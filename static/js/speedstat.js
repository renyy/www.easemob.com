try{
	(function(){

		var report_url = "http://s.easemob.com/s/net";

		var tasks = {
			1 : ["qq-guangzhou-1k", "http://203.195.202.39/s/1k.html"],
			2 : ["qq-guangzhou-10k", "http://203.195.202.39/s/10k.html"],
			3 : ["ali-beijing-1k", "http://182.92.159.193/1k.html"],
			4 : ["ali-beijing-10k", "http://182.92.159.193/10k.html"],
			5 : ["qing-guangzhou-1k", "http://121.201.15.126/1k.html"],
			6 : ["qing-guangzhou-10k", "http://121.201.15.126/10k.html"],
			7 : ["qing-beijing2-1k", "http://119.254.108.53/1k.html"],
			8 : ["qing-beijing2-10k", "http://119.254.108.53/10k.html"],
			9 : ["aws-cn-1k", "http://54.223.147.200:8090/1k.html"],
			10 : ["aws-cn-10k", "http://54.223.147.200:8090/10k.html"],
			11 : ["ali-hangzhou-1k", "http://121.41.37.18/1k.html"],
			12 : ["ali-hangzhou-10k", "http://121.41.37.18/10k.html"]
		};
		var _count = 12; // length of tasks[]
		var _submited = false;

		var _count_success = 0;
		var _count_fail = 0;

		var _status = new Array(); // 1: success, 0: fail
		var _timeCost = new Array();

		var log = function(message) {
			var img = new Image();
			img.src = report_url + "?" + message;
		}

		var submit_result = function() {
			if (!_submited) {
				var t = "submit&data=";
				for (_idx in _status) {
					t += _idx + "," + _status[_idx] + "," + _timeCost[_idx] + ";";
				}
				log(t);
				_submited = true;
			}
		}

		var update_status = function() {
			if (_count_success + _count_fail >= _count) {
				submit_result();
			}
		}

		var loadimg = function(url_idx) {
			var tag = tasks[url_idx][0];
			var url = tasks[url_idx][1];
			var img = new Image();
			var time = (new Date()).getTime();
			img.onload = function() {
				time = (new Date()).getTime() - time;
				_status[tag] = 1;
				_timeCost[tag] = time;
				_count_success += 1;

				update_status();
			}
			img.onerror = img.onabort = function() {
				time = (new Date()).getTime() - time;
				_status[tag] = 0;
				_timeCost[tag] = time;
				_count_fail += 1;

				update_status();
			}
			img.src = url + "?" + new Date().getTime();
			img.alt = tag;
			img.title = url;
		}

		var runStat = function(timeoutFunc) {
			for (var url_idx in tasks) {
				loadimg(url_idx);
			}
		}

		runStat(submit_result);
		// TODO: submit after 25s
	})();
} catch(e) {}
