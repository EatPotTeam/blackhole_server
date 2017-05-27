# API说明文档

标签：就3个

---

>**localhost:8080/login/id**

用于用户登陆，方便后台记录用户id及登陆时间。
其中id为用户输入昵称。

>Http请求方式

Get

>返回结果

"login success"


>**localhost:8080/submit**

用于用户发送消息，需要传输JSON字段,内容格式由客户端定义。

>Http请求方式

Post

>返回结果

"message accepted"

>**localhost:8080/pull/id**

用户客户端向后台拉取消息。
其中id为用户输入昵称。
>Http请求方式

Get
>返回结果案例

假设返回2段消息
```json
[{"message":{"message":"789101112","name":"jjj"},"time":1495867423793},{"message":{"message":"123456","name":"iiii"},"time":1495867408360}]
```






