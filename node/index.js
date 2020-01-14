const express = require('express');
const app = express();
const List = [
  {name: 'zs', age: 18},
  {name: 'ls', age: 20},
  {name: 'ww', age: 19},
]
const List1 = [
  {name1: 'zs', age: 18},
  {name1: 'ls', age: 20},
  {name1: 'ww', age: 19},
]
app.get('/getList',(req,res) => {
  res.send(JSON.stringify(List1))
})
app.post('/api/getList', (req, res) => {
  res.send(JSON.stringify(List))
})
app.listen(2600,() => {
  console.log('服务器启动：http://127.0.0.1:2000');
})



/**
 * webpack 配置代理
* '/api': {// '/api':匹配项
*    target: 'http://192.168.10.183:8103',// 接口的域名
*    secure: false,// 如果是https接口，需要配置这个参数
*    changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
*    pathRewrite: {// 如果接口本身没有/api需要通过pathRewrite来重写了地址
*       '^api': ''
*    }
* }
 * 
 */