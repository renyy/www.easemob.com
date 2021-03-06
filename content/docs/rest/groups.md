---
title: REST API 群组管理
secondnavrest: true
sidebar: restsidebar
---

# 群组管理

环信提供了REST API 来管理app中的群组

## 获取app中所有的群组ID {#getallgroups}

- Path : /{org_name}/{app_name}/chatgroups
- HTTP Method : GET
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：
- Response Body ： 详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略。

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X GET -H "Authorization: Bearer YWMtP_8IisA-EeK-a5cNq4Jt3QAAAT7fI10IbPuKdRxUTjA9CNiZMnQIgk0LEUE" -i  "https://a1.easemob.com/easemob-demo/chatdemoui/chatgroups"
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
    "action": "get",
    "application": "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
    "params": {},
    "uri": "https://a1.easemob.com/easemob-demo/chatdemoui",
    "entities": [],
    "data": [
        {
            "groupid": "1404705934830"
        },
        {
            "groupid": "1404114807341"
        },
        {
            "groupid": "1404268812888"
        }    ],
    "timestamp": 1404932824158,
    "duration": 3551,
    "organization": "easemob-demo",
    "applicationName": "chatdemoui",
    "count": 0
}
</code></pre>


## 获取一个或者多个群组的详情 {#getgroups}         

- Path : /{org_name}/{app_name}/chatgroups/{group_id1},{group_id2}
- HTTP Method : GET
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ： 详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略。

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X GET -H "Authorization: Bearer YWMtP_8IisA-EeK-a5cNq4Jt3QAAAT7fI10IbPuKdRxUTjA9CNiZMnQIgk0LEUE"  -i  "https://a1.easemob.com/easemob-demo/chatdemoui/chatgroups/1410511142870,1408518613503"
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "get",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "params" : { },
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui/chatgroups/1410511142870,1408518613503",
  "entities" : [ ],
  "data" : [ {
    "id" : "1408518613503",
    "name" : "Jay13800138000",
    "description" : "",
    "public" : false,
    "membersonly" : true,
    "allowinvites" : false,
    "maxusers" : 200,
    "affiliations_count" : 3,
    "affiliations" : [ {
      "owner" : "13800138001"
     }, {
      "member" : "v3y0kf9arx"
     }, {
      "member" : "xc6xrnbzci"
     } ]
   }, {
    "id" : "1410511142870",
    "name" : "abc",
    "description" : "",
    "public" : false,
    "membersonly" : true,
    "allowinvites" : false,
    "maxusers" : 200,
    "affiliations_count" : 1,
    "affiliations" : [ {
      "owner" : "u366"
    } ]
  } ],
  "timestamp" : 1411526263806,
  "duration" : 34,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>

## 创建一个群组 {#create}

- Path : /{org_name}/{app_name}/chatgroups
- HTTP Method : POST
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：

<pre class="hll"><code class="language-java">
{
    "groupname":"testrestgrp12", //群组名称, 此属性为必须的
    "desc":"server create group", //群组描述, 此属性为必须的
    "public":true, //是否是公开群, 此属性为必须的
    "maxusers":300, //群组成员最大数(包括群主), 值为数值类型,默认值200,此属性为可选的
    "approval":true, //加入公开群是否需要批准, 没有这个属性的话默认是true, 此属性为可选的
    "owner":"jma1", //群组的管理员, 此属性为必须的
    "members":["jma2","jma3"] //群组成员,此属性为可选的,但是如果加了此项,数组元素至少一个
}
</code></pre>

- Response Body ： 详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略。

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X POST 'https://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups' -H 'Authorization: Bearer YWMtG4T5wkOTEeST5V-9lp7f-wAAAUnafsqrQFnCU4gI0-rQImw45TXUWSIrXI8' -d '{"groupname":"testrestgrp12","desc":"server create group","public":true,"approval":true,"owner":"2ewcgkhhxf","maxusers":300,"members":["zh9w1hc49q"]}'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "post",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "params" : { },
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui",
  "entities" : [ ],
  "data" : {
    "groupid" : "1411527886490154"
  },
  "timestamp" : 1411527886457,
  "duration" : 125,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>

## 删除群组 {#delete}

- Path : /{org_name}/{app_name}/chatgroups/{group_id}
- HTTP Method : DELETE
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ： 详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略。

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X DELETE 'https://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups/1411527886490154' -H 'Authorization: Bearer YWMtG4T5wkOTEeST5V-9lp7f-wAAAUnafsqrQFnCU4gI0-rQImw45TXUWSIrXI8'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "delete",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "params" : { },
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui",
  "entities" : [ ],
  "data" : {
    "success" : true,
    "groupid" : "1411527886490154"
  },
  "timestamp" : 1411528112078,
  "duration" : 15,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>


## 获取群组中的所有成员  {#users}

- Path : /{org_name}/{app_name}/chatgroups/{group_id}/users
- HTTP Method : GET 
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ：详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X GET 'https://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups/1411816013089/users' -H 'Authorization: Bearer YWMtgNIiTFAwEeSB9olyTIXFtwAAAUotKvWaUOaUuqeuhNMgOgozO4popVZe-Ls'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "get",
  "uri" : "http://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups/1411816013089/users",
  "entities" : [ ],
  "data" : [ {
    "member" : "lidis"
  }, {
    "member" : "asdfgh"
  }, {
    "member" : "zhanglin"
  }, {
    "owner" : "ruson"
  } ],
  "timestamp" : 1413012431449,
  "duration" : 24
}
</code></pre>


## 在群组中添加一个人 {#addmember}

- Path : /{org_name}/{app_name}/chatgroups/{group_id}/users/{user_primary_key}
- HTTP Method :  POST 
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ：详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X POST 'https://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups/1411816013089/users'/q4xpsfjfvf -H 'Authorization: Bearer YWMtgNIiTFAwEeSB9olyTIXFtwAAAUotKvWaUOaUuqeuhNMgOgozO4popVZe-Ls'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "post",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui",
  "entities" : [ ],
  "data" : {
    "action" : "add_member",
    "result" : true,
    "groupid" : "1411816013089",
    "user" : "q4xpsfjfvf"
  },
  "timestamp" : 1413012512005,
  "duration" : 29,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>


## 在群组中减少一个人 {#deletemember}

- Path : /{org_name}/{app_name}/chatgroups/{group_id}/users/{user_primary_key}
- HTTP Method : DELETE 
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ：详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X DELETE 'https://a1.easemob.com/easemob-demo/4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5/chatgroups/1411816013089/users'/q4xpsfjfvf -H 'Authorization: Bearer YWMtgNIiTFAwEeSB9olyTIXFtwAAAUotKvWaUOaUuqeuhNMgOgozO4popVZe-Ls'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "delete",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui",
  "entities" : [ ],
  "data" : {
    "action" : "remove_member",
    "result" : true,
    "groupid" : "1411816013089",
    "user" : "q4xpsfjfvf"
  },
  "timestamp" : 1413012566573,
  "duration" : 56,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>


##  获取一个用户参与的所有群组  {#joinedchatgroups}

- Path : /users/{username}/joined_chatgroups
- HTTP Method : GET
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：无
- Response Body ：详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略

##### curl示例：

<pre class="hll"><code class="language-java">
 curl -X GET 'https://a1.easemob.com/easemob-demo/chatdemoui/users/kenshinn/joined_chatgroups' -H 'Authorization: Bearer YWMtF4ZxXlLmEeS7kWnCMObSnQAAAUo-7HZU-bP7-SJzYGCaUdumxsGelt8pmss'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "get",
  "uri" : "http://a1.easemob.com/easemob-demo/chatdemoui/users/kenshinn/joined_chatgroups",
  "entities" : [ ],
  "data" : [ {
    "groupid" : "1413193977786197",
    "groupname" : "kenshingrou"
  }, {
    "groupid" : "1413194058403881",
    "groupname" : "kenshinngr1"
  }, {
    "groupid" : "1413601924284",
    "groupname" : "kenshinngroup002"
  }, {
    "groupid" : "1413026100974",
    "groupname" : "18192976732 的地图"
  }, {
    "groupid" : "141327925742855",
    "groupname" : "kenshinngro"
  }, {
    "groupid" : "1413211974686981",
    "groupname" : "5cxhactgdjgr"
  } ],
  "timestamp" : 1413428676499,
  "duration" : 80
}
</code></pre>


##  群组批量添加成员  {#addmemberbatch}

- Path : /chatgroups/{chatgroupid}/users
- HTTP Method : POST
- URL Params ： 无
- Request Headers : {"Authorization":"Bearer ${token}"}
- Request Body ：{"usernames":["username1","username2"]}'    --- usernames固定属性，作为json的KEY；username1/username2 要添加到群中的成员用户名，可变
- Response Body ：详情参见示例返回值, 返回的json数据中会包含除上述属性之外的一些其他信息，均可以忽略

##### curl示例：

<pre class="hll"><code class="language-java">
curl -X  POST -H 'Authorization: Bearer YWMtF4ZxXlLmEeS7kWnCMObSnQAAAUo-7HZU-bP7-SJzYGCaUdumxsGelt8pmE4' -i  'https://a1.easemob.com/easemob-demo/chatdemoui/chatgroups/1411816013089/users' -d '{"usernames":["5cxhactgdj","mh2kbjyop1"]}'
</code></pre>

##### Response

<pre class="hll"><code class="language-java">
{
  "action" : "post",
  "application" : "4d7e4ba0-dc4a-11e3-90d5-e1ffbaacdaf5",
  "uri" : "https://a1.easemob.com/easemob-demo/chatdemoui",
  "entities" : [ ],
  "data" : {
    "newmembers" : [ "5cxhactgdj", "mh2kbjyop1" ],
    "action" : "add_member",
    "groupid" : "1411816013089"
  },
  "timestamp" : 1413428995083,
  "duration" : 4,
  "organization" : "easemob-demo",
  "applicationName" : "chatdemoui"
}
</code></pre>
