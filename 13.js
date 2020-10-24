const express = require('express')
const app = express()
const path = require('path')

//拼接路径

//实现静态资源访问
//直接访问 http://localhost:3000/default.html
// app.use(express.static(path.join(__dirname,'public')))

// http://localhost:3000/static/default.html
app.use('/static',express.static(path.join(__dirname,'public')))

app.listen(3000)
