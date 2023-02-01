//导入express
 const express = require('express')
//创建web服务器
const app = express()
// 解决跨域问题
app.all("*",function(req,res,next){
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin','*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers','content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS');
    if(req.method.toLowerCase() == 'options')
        res.send(200); // 让options 尝试请求快速结束
    else
        next();
})
//在这里调用express.static()方法， 快速对外提供静态资源
//如果要对外提供多个静态资源目录，重复写更换文件目录即可
app.use(express.static('./vue-hash'))
app.listen(9001,(req,res)=>{
    console.log('express server running at 127.0.0.1')
})
