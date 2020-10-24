
//1.引入express框架
//返回值是方法
//通过调用该方法就可以创建服务器
const express = require('express')
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)
//2.创建网站服务器
//app 变量就是网站服务器
const app = express()
//捕获错误 程序不会因为一个错误而整个程序无法运行
app.get('/index',async (req,res,next)=>{
    //try catch 捕获错误信息
    try{
        await readFile('./aa.js')
    }catch (ex){
        //如果发生错误执行next
        next(ex)
    }

})

//错误处理中间件
app.use((err,req,res,next)=>{
    //err.message 报错程序错误信息 '程序发生了未知错误'
    res.status(500).send(err.message)
})

//3.网站服务器监听端口
app.listen(3000)
console.log('网站服务器启动成功')
