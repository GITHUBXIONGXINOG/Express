//引入epress框架
const express = require('express')
//创建网站服务器
const app = express()

//构架模块化路由
//1.创建路由对象
const home = express.Router()
//2.为路由对象匹配请求路径
//当地址以/home开头,就以home这个路由地址进行处理
app.use('/home',home)
//3.在红么路由下创建二级路由
home.get('/index',(req,res)=>{
    res.send('欢迎来到博客首页页面')
})



//服务器监听端口
app.listen(3000)
