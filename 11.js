//引入epress框架
const express = require('express')
const bodyParser = require('body-parser')
//创建网站服务器
const app = express()
//拦截所有请求
app.use(fn({a:2}))

function fn(obj) {
  return function (req,res,next) {
      if (obj.a==1){
          console.log(req.url)
      }else {
          console.log(req.method)
      }
      next()
  }
}

app.get('/',(req,res)=>{
    res.send('ok')
})


//服务器监听端口
app.listen(3000)
