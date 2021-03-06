---
title: 环信
---

#集成用户体系

## 环信和用户体系集成概述
环信只是即时通讯的消息通道。环信本身不提供用户体系，环信既不保存任何APP业务数据，也不保存任何APP的用户信息。比如说，你的APP是一个婚恋交友APP,那么你的APP用户的头像，昵称，身高，体重，三围，电话号码等信息是保存在你自己的APP业务服务器上，这些信息不需要告诉环信，环信也不想知道。

环信这样设计的目的有2个：

 
1. 尽量少的侵入开发者自己APP的业务数据和用户体系。用户体系是一个APP的最最核心的数据，在当前中国的环境下，部分开发者会比较难信赖一个第三方厂商，把自己最关键的用户体系信息托管到一个第三方平台上。
 
1. 大多数APP都有自己的服务器后台，有自己的用户体系。所以环信要尽力做好的环节是尽可能方便开发者把环信和自己的用户体系集成，而不是为开发者提供他们可能并不会用的用户体系。


要使用环信，只需要为每一个APP用户创建一个环信账号。创建环信账号仅需要以下信息：


	{
		username: "jliu",  //username是第三方用户体系中的primarykey。需要在appkey的范围内唯一。
		password:"123456" //密码。为保证第三方用户体系中的账号密码不必要的泄露给环信，建议对第三方用户体系的账号密码做一次hash算法。然后在手机端登录环信时，客户端同样适用hash后的密码登录。
	}


环信和用户体系的集成主要发生在2个地方，服务器端集成和客户端集成。


## 服务器端集成

### 将已上线的APP的现有用户集成到环信
**[用户管理REST API](/docs/rest/userapi)**提供了一个创建环信账号的REST方法。这个方法很简单，只需要提供账号ID和密码2个参数，就可以创建一个环信账号。对一个已经上线，已经有很多现有用户的APP来说，要集成环信，只需要写一个脚本，循环调用创建环信用户的REST方法即可。

环信账号中的username可以和已有的APP用户体系的用户的primary key相同。这样做的好处是不需要对现有APP后台的数据库的用户表做任何修改（比如不需要给用户表增加一个叫环信账号ID的字段）。

### APP创建新用户时创建环信账号
为保证安全，强烈建议只在服务器端调用创建环信账号的REST方法。具体方法见**[用户管理REST API](/docs/rest/userapi)**。即每次当APP客户端调用APP自己的业务后台创建新用户时，也在环信上为该APP用户创建一个环信账号。

通常的做法是在自己APP创建用户成功后调用创建环信账号的REST方法来创建环信账号。因为这个方法是服务器对服务器的调用，所以因为网络不稳定原因失败的可能很小。但开发者仍旧需要对该方法的返回结果做处理，如果该方法失败，应该做个retry，如果仍旧失败，应该回滚在自己APP创建用户的操作。否则会导致APP的用户账号和环信账号不一致的问题。

### APP删除用户时删除环信账号

为保证安全，强烈建议只在服务器端调用删除环信账号的REST方法。具体方法见**[用户管理REST API](/docs/rest/userapi)**。即每次当APP客户端调用APP自己的业务后台删除新用户时，也在环信上将该APP用户对应的环信账号删除。

### APP修改用户密码时更新环信账号的密码

为保证安全，强烈建议只在服务器端调用修改环信账号密码的REST方法。具体方法见**[用户管理REST API](/docs/rest/userapi)**。即每次当APP用户的密码被修改时，也要更新该APP用户对应的环信账号的密码。

## 客户端集成


### 客户端登录集成
APP客户端在登录自己的APP服务器后台成功后，需要调用环信客户端SDK的登录方法。

### 客户端退出登陆集成
APP客户端在退出登录自己的APP服务器后台成功后，需要调用环信客户端SDK的退出登录方法。
