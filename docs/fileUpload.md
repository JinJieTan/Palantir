RestFul 接口地址: `http://47.106.220.143`

上传成功会返回上传后的资源地址 直接可以访问

文件上传 1 号:

请求方式:`post`

请求路由:`/file_upload`

请求必须跟下面示例一样 :

```
<form action="http://47.106.220.143/file_upload" method="post" enctype="multipart/form-data">
        <input type="file" name="file" /><br />
        <input type="submit" value="上传文件" />
    </form>
```

返回响应：上传成功后的资源地址，可以直接访问，上传不能超过 10mb 大的文件

---
