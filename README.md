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

   **主应用和微应用部署到同一个服务器（同一个 IP 和端口）**
   如果服务器数量有限，或不能跨域等原因需要把主应用和微应用部署到一起。

    通常的做法是主应用部署在一级目录，微应用部署在二/三级目录。

    微应用想部署在非根目录，在微应用打包之前需要做两件事：

    必须配置 webpack 构建时的 `publicPath` 为目录名称，更多信息请看 webpack 官方说明 和 vue-cli3 的官方说明

    history 路由的微应用需要设置 base ，值为目录名称，用于独立访问时使用。

    部署之后注意三点：

    activeRule 不能和微应用的真实访问路径一样，否则在主应用页面刷新会直接变成微应用页面。

    微应用的真实访问路径就是微应用的 entry，entry 可以为相对路径。

    微应用的 entry 路径最后面的 / 不可省略，否则 `publicPath` 会设置错误，例如子项的访问路径是 `http://    localhost:8080/app1`,
    那么 entry 就是 `http://localhost:8080/app1/`。

    具体的部署有以下两种方式，选择其一即可。
  **微应用都放在在一个特殊名称（不会和微应用重名）的文件夹下（建议使用）**

    ```
    └── html/                     # 根文件夹
        |
        ├── child/                # 存放所有微应用的文件夹
        |   ├── vue-hash/         # 存放微应用 vue-hash 的文件夹
        |   ├── vue-history/      # 存放微应用 vue-history 的文件夹
        |   ├── react-hash/       # 存放微应用 react-hash 的文件夹
        |   ├── react-history/    # 存放微应用 react-history 的文件夹
        |   ├── angular-hash/     # 存放微应用 angular-hash 的文件夹
        |   ├── angular-history/  # 存放微应用 angular-history 的文件夹
        ├── index.html            # 主应用的index.html
        ├── css/                  # 主应用的css文件夹
        ├── js/                   # 主应用的js文件夹
    ```
  **此时需要设置微应用构建时的 publicPath 和 history 模式的路由 base，然后才能打包放到对应的目录里。**
  
  | 项目 | 路由 base | publicPath | 真实访问路径 |
  | ----- | ---- | ---- | ---- |
  | vue-hash | 无 | /child/vue-hash/ | http://localhost:8080/child/vue-hash/ |
  | vue-history | /child/vue-history/ | /child/vue-history/ | http://localhost:8080/child/vue-history/ |

  * `vue-history` 微应用

      路由设置：  
      `base: window.__POWERED_BY_QIANKUN__ ? '/app-vue-history/' : '/child/vue-history/'`

    `webpack `打包 `publicPath` 配置（`vue.config.js`）：
    ```
    module.exports = {
      publicPath: '/child/vue-history/',
    };

  **那么此时的注册函数是这样的（需要保证 activeRule 和 entry 不同）：**

  ```
    registerMicroApps([
    {
      name: 'app-vue-hash',
      entry: '/child/vue-hash/', // http://localhost:8080/child/vue-hash/
      container: '#container',
      activeRule: '/app-vue-hash',
    },
    {
      name: 'app-vue-history',
      entry: '/child/vue-history/', // http://localhost:8080/child/vue-history/
      container: '#container',
      activeRule: '/app-vue-history',
    },
    // angular 和 react 同上
  ],
  ```

  至此主应用已经和微应用都能跑起来了，但是主应用和 `vue-history、react-history、angular-history` 微应用是 `history` 路由，需要解决刷新 404 的问题，nginx 还需要配置一下：
  ```
    server {
    listen       8080;
    server_name  localhost;
  
    location / {
      root   html;
      index  index.html index.htm;
      try_files $uri $uri/ /index.html;
    }
  
    location /child/vue-history {
      root   html;
      index  index.html index.htm;
      try_files $uri $uri/ /child/vue-history/index.html;
    }
    # angular 和 react 的history 配置同上
  }
  ```
  **2. 微应用直接放在二级目录，但是设置特殊的 activeRule**
  ```
  └── html/                     # 根文件夹
    |
    ├── vue-hash/             # 存放微应用 vue-hash 的文件夹
    ├── vue-history/          # 存放微应用 vue-history 的文件夹
    ├── react-hash/           # 存放微应用 react-hash 的文件夹
    ├── react-history/        # 存放微应用 react-history 的文件夹
    ├── angular-hash/         # 存放微应用 angular-hash 的文件夹
    ├── angular-history/      # 存放微应用 angular-history 的文件夹
    ├── index.html            # 主应用的index.html
    ├── css/                  # 主应用的css文件夹
    ├── js/                   # 主应用的js文件夹
    ````
    基本操作和上面是一样的，只要保证 `activeRule` 和微应用的存放路径名不一样即可。
- ~~`feature/keep-alive` 分支 ：使用 `loadMicroApp` 来实现 `keep-alive` 的 `tab` 效果~~
- ~~`feature/share-component` 分支 ：项目间共享组件的例子~~
- ~~`feature/routing-page` 分支 ：在主项目的某个路由页面加载子应用~~
- ~~`feature/share-dependencies` 分支 ：子项目复用主项目的公共依赖（vue，vuex，vue-router），以及主子项目间 i18n 的处理~~
- ~~`feature/vite-child` 分支 ：子项目是 vite 构建的 vue3 项目~~
- ~~`feature/use-main-app-component` 分支 ：子项目复用主项目的依赖~~
- ~~`feature/abstract-route` 分支 ：主项目同时展示两个子应用的不同页面，子项目使用 abstract 路由~~