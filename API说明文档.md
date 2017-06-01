# API说明文档


---

>**/login/{id}**

用于用户登陆，方便后台记录用户id及登陆时间。
其中id为用户ID。

>Http请求方式

Post

>返回结果

"login success"


>**/messages**

用于用户发送消息，需要传输JSON字段,内容格式由客户端定义。

>Http请求方式

Post

>  请求体

```json
{
  "content": "Hello, world!",
  "nickname": "123456"
}
```

>返回结果

返回成功创建的消息：

```json
{
  "content": "Hello, world!",
  "time": 1495867423793
}
```

>**/messages?userId={id}**

用户客户端向后台拉取消息。
其中id为用户ID。
>Http请求方式

Get
>返回结果样例

假设返回2段消息
```json
[
  {
    "nickname": "shapys",
    "content": "Hello, world!",
    "time":1495867423793
  }, {
    "nickname": "shabis"
    "content": "Hello, another world!",
    "time":1495867423794
  }
]
```






