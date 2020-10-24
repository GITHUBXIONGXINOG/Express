//引入epress框架
const express = require('express')
const bodyParser = require('body-parser')
//创建网站服务器
const app = express()

// /:id 占位符 表示接收一个id作为参数
//  http://localhost:3000/index/123/zhangsan/20
app.get('/index/:id/:name/:age',(req,res)=>{
    res.send(req.params)
})


//服务器监听端口
app.listen(3000)
