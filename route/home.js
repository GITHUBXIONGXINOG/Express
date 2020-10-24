const express = require('express')

const home = express.Router()

home.get('/index',(req,res)=>{
    res.send('欢迎来到博客首页页面')
})
//导出当前路由对象
module.exports = home
