//导入express
 const express = require('express')
//创建web服务器
const app = express()

//在这里调用express.static()方法， 快速对外提供静态资源
//如果要对外提供多个静态资源目录，重复写更换文件目录即可
app.use(express.static('./html'))
app.listen(9000,(req,res)=>{
    console.log('express server running at 127.0.0.1')
})
