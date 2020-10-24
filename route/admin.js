const express = require('express')

const admin = express.Router()

admin.get('/index',(req,res)=>{
    res.send('欢迎来到博客管理页面')
})
//导出当前路由对象
module.exports = admin
