# qiankun-demo 服务端说明 
`index.js` 端口`9000` 可以通过`127.0.0.1:9000`访问 这是主应用服务
因为主应用是`history`刷新可能会导致主应用路由找不到路径 微应用不受影响
静态托管的是`html`文件夹中的
`index1.js` 端口`9001` 可以通过`127.0.0.1:90001`访问 这是微应用服务
静态托管的是`vue-hash`文件夹中的
两个服务器分开部署
主应用设置
```
registerMicroApps([
  { 
    name: 'app-vue-hash', 
    entry: '/child/vue-hash/', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router } }
  },
  // { 
  //   name: 'app-vue-history',
  //   entry: 'http://localhost:2222', 
  //   container: '#appContainer', 
  //   activeRule: '/app-vue-history',
  //   props: { data : store }
  // },
]);

