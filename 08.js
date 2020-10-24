
//引入epress框架
const express = require('express')
//创建网站服务器
const app = express()
const home = require('./route/home')
const admin = require('./route/admin')

//用app.use进行路径匹配
//当客户端访问/home路径时,用home路由
app.use('/home',home)
app.use('/admin',admin)



//服务器监听端口
app.listen(3000)
