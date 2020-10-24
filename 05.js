
//1.引入express框架
//返回值是方法
//通过调用该方法就可以创建服务器
const express = require('express')
const fs = require('fs')
//2.创建网站服务器
//app 变量就是网站服务器
const app = express()

app.get('/index',(req,res,next)=>{
    //创建一个错误并抛出
   // throw  new Error('程序发生了未知错误')
    fs.readFile('./01.js','utf8',(err,result)=>{
        if (err != null){
            next(err)
        }else{
            res.send(result)
        }
    })
    // res.send('程序正常执行')
})

//错误处理中间件
app.use((err,req,res,next)=>{
    //err.message 报错程序错误信息 '程序发生了未知错误'
    res.status(500).send(err.message)
})

//3.网站服务器监听端口
app.listen(3000)
console.log('网站服务器启动成功')
