//1.引入express框架
    //返回值是方法
    //通过调用该方法就可以创建服务器
const express = require('express')
//2.创建网站服务器
    //app 变量就是网站服务器
const app = express()

//4.接收get请求
    //地址 请求对象 响应对象
app.get('/',(req,res)=>{
    //用send方法代替之前的end方法进行响应
    //1.send方法内部会检测响应内容的类型
    //2.send方法会自动设置http状态码
    //3.send方法会帮我们自动设置响应的内容类型集编码
    res.send('hello express')

})

app.get('/list',(req,res)=>{
    //send 直接向客户端响应对象
    res.send({name:'张三',age:20})
})


//3.网站服务器监听端口
app.listen(3000)
console.log('网站服务器启动成功')
