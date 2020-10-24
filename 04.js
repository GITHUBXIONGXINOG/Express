
//1.引入express框架
//返回值是方法
//通过调用该方法就可以创建服务器
const express = require('express')
//2.创建网站服务器
//app 变量就是网站服务器
const app = express()

/*
//公告 匹配所有的路径
app.use((req,res,next)=>{
    res.send('当前网站正在维护...')
})
*/


//定义中间件对登录状态进行判断
app.use('/admin',(req,res,next)=>{
    //用户没有登录
    // let isLogin = false
    let isLogin = true
    //如果已经登录
    if (isLogin){
        //执行next请求向下继续进行匹配
        next()
    }else{
        //如果用户没有登录,直接对客户端进行响应res.send 响应
        res.send('您还未登录,不能访问当前页面')
    }

})


//如果用户能进入该路由就说明已经登录
app.get('/admin',(req,res)=>{
    //res.send 响应
    res.send('您已经登录,可以访问当前页面')
})

//自定义404
app.use((req,res,next)=>{
    //status设置状态码
    //为客户端响应404状态码以及提示信息
    res.status(404).send('当前访问的页面是不存在的')
})

//3.网站服务器监听端口
app.listen(3000)
console.log('网站服务器启动成功')
