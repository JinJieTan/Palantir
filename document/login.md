RestFul 接口地址: `http://47.106.220.143`

全局`code`为状态码 0 为成功 其余都是失败 返回的提示信息都是中文

账户密码登陆,未注册的账户会自动注册

请求方式:`get`

请求路由:`/login`

请求参数:

1.username:string,required,格式校验等待确定

2.password:string,required,格式校验等待确定,必须经过 sha1 加密后才能传输过来，服务端不保存明文密码

请求示例 : `http://47.106.220.143/login?username=test&password=test`

返回响应: `{code:0 或 1,data:提示信息}`

---

是否免密码登陆

请求方式:`get`

请求路由:`/authentication`

请求参数：无（session 存储在服务端）

请求示例 : `http://47.106.220.143/authentication`

返回响应: `{code:0 或 1,data:提示信息}`

---

退出免密码登陆

请求方式:`get`

请求路由:`/clearSession`

请求参数：无（session 存储在服务端）

请求示例 : `http://47.106.220.143/clearSession`

返回响应: `{code:0 或 1,data:提示信息}`

---

