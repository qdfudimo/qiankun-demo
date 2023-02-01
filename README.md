# qiankun-demo
vue乾坤 部署加配置
# 项目说明 qiankun-demo

用`qiankun`来实现`vue`技术栈的前端微服务
`html`文件是客户端代码
`main`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

`qiankun`的开发和打包和正常模式一模一样，它使用一个全局变量`__POWERED_BY_QIANKUN__`来区分微前端模式和正常模式，不需要额外的配置和代码。

`serve`文件是服务端代码,简单的`express`静态托管文件
## 运行和打包

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。

`npm run build-all`可以打包所有`vue`项目，`jQuery`项目不需要打包。


## 分支介绍

- `master` 分支： `qiankun` 的常规基础用法  
    部署方式:主应用和微应用部署在不同的服务器，使用 `Nginx` 代理访问
    一般这么做是因为不允许主应用跨域访问微应用，做法就是将主应用服务器上一个特殊路径的请求全部转发到微应用的服务器上，即通过代理实现“微应用部署在主应用服务器上”的效果。

    例如，主应用在 A 服务器，微应用在 B 服务器，使用路径 `/app1` 来区分微应用，即 A 服务器上所有 `/app1` 开头的请求都转发到 B 服务器上。

    此时主应用的 `Nginx` 代理配置为：

    ```/app1/ {
     proxy_pass http://www.b.com/app1/;
    proxy_set_header Host $host:$server_port;
    }
    ```
    主应用注册微应用时，`entry` 可以为相对路径，`activeRule` 不可以和 `entry` 一样（否则主应用页面刷新就变成微应用）：

    ```registerMicroApps([
      {
        name: 'app1',
        entry: '/app1/', // http://localhost:8080/app1/
        container: '#container',
        activeRule: '/child-app1',
      },
    ]
    ```
对于 `webpack` 构建的微应用，微应用的 `webpack` 打包的 `publicPath` 需要配置成 `/app1/`，
否则微应用的 `index.html` 能正确请求，但是微应用 `index.html` 里面的 `js/css` 路径不会带上 `/app1/`。

    module.exports = {
      output: {
        publicPath: `/app1/`,
      },
    };
    
微应用打包的 `publicPath` 加上 `/app1/` 之后，必须部署在 `/app1` 目录，否则无法独立访问。

另外，如果不想微应用通过代理路径被独立访问，可以根据请求的一些信息判断下，主应用中请求微应用是用 `fetch` 请求的，可以带参数和 `cookie`。例如通过请求头参数判断：


    if ($http_custom_referer != "main") {
      rewrite /index /404.html;
    }
    
- `feature/hash-router` 分支 ：主子项目都是 `hash` 模式
- `feature/keep-alive` 分支 ：使用 `loadMicroApp` 来实现 `keep-alive` 的 `tab` 效果
- `feature/share-component` 分支 ：项目间共享组件的例子
- `feature/routing-page` 分支 ：在主项目的某个路由页面加载子应用
- `feature/share-dependencies` 分支 ：子项目复用主项目的公共依赖（vue，vuex，vue-router），以及主子项目间 i18n 的处理
- `feature/vite-child` 分支 ：子项目是 vite 构建的 vue3 项目
- `feature/use-main-app-component` 分支 ：子项目复用主项目的依赖
- `feature/abstract-route` 分支 ：主项目同时展示两个子应用的不同页面，子项目使用 abstract 路由
- `develop` 分支 ：修改源码来实现 `keep-alive`，以及公共依赖的复用的例子