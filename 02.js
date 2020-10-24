//1.引入express框架
//返回值是方法
//通过调用该方法就可以创建服务器
const express = require('express')
//2.创建网站服务器
//app 变量就是网站服务器
const app = express()

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
