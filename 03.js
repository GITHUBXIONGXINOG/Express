//1.引入express框架
//返回值是方法
//通过调用该方法就可以创建服务器
const express = require('express')
//2.创建网站服务器
//app 变量就是网站服务器
const app = express()

//use 不添加地址 接收所有的请求
app.use((req,res,next)=>{
    console.log('请求走了app.use中间件')
    //调用next方法请求才会继续下走
    next()
})


//当客户端访问/request请求的时候才走当前中间件
app.use('/request',(req,res,next)=>{
    console.log('请求走了app.use /request 中间件')
    next()
})

//定义路由
app.get('/list',(req,res,next)=>{
    //send响应
    res.send('/list')
    next()
})

//next 权限控制函数,执行next请求会向下继续进行匹配
app.get('/request',(req,res,next)=>{
    //向req请求添加name属性张三
    req.name='张三'
    next()
})
app.get('/request',(req,res)=>{
    //res.send响应给客户端 显示在页面
    res.send(req.name)
})


//3.网站服务器监听端口
app.listen(3000)
console.log('网站服务器启动成功')
