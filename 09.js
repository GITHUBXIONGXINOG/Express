
//引入epress框架
const express = require('express')
//创建网站服务器
const app = express()
 app.get('/index',(req,res)=>{
     //获取get请求参数
     //通过   req.query获取请求参数
     res.send(req.query)
 })

//服务器监听端口
app.listen(3000)
