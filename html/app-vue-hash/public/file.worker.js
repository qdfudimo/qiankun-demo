importScripts("/child/vue-hash/axios.js")
self.onmessage = function (event) {
    // you can  start ajax
    console.log(event, "zhuxiancheng");
    console.log(axios, "zhuxiancheng");
    let result = "111111父线程发送"
    axios({
        method: 'get',
        url: 'http://localhost:3000/test'
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error, "error");
    })
    //将计算结果回传给主线程
    self.postMessage(result);
    //workers 也可以调用自己的 close  方法进行关闭
}
// self.onerror = function (event) {
//  console.log(event.message);//可读性良好的错误消息
//  console.log(event.filename)//发生错误的文件名
//  console.log(event.lineno) //发生错误时所在脚本文件的行号	 
//  self.close() 
// }