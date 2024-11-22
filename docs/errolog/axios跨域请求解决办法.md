# axios跨域请求解决办法

axios 请求中默认 headers 的 Content-Type 属性为 application/json 类型，这种类型在跨域时，浏览器会先发送 options 请求，如果服务器响应完全符合请求要求，浏览器则会发送真正的 post 请求。

而当 headers 的 Content-Type 属性是 application/x-www-form-urlencoded 时不会发送 options 请求，所以需要在 axios 请求拦截中配置 headers['Content-Type'] = 'application/x-www-form-urlencoded 。并将 post 的参数转换为序列化的 URL 形式，具体设置如下：
```javascript
axios({
	method:'post',
	url:'请求地址',
	data:{
		param:'参数'
	},
  	headers: {
    		'Content-Type': 'application/x-www-form-urlencoded',
  	}
}).then(function(res){
	return res.data;
});

```
