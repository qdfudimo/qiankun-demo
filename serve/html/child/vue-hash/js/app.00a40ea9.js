(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["app-vue-hash"]=t():e["app-vue-hash"]=t()})(window,(function(){return function(e){function t(t){for(var r,u,i=t[0],s=t[1],c=t[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"81ecf46b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/child/vue-hash/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp_app-vue-hash"]=window["webpackJsonp_app-vue-hash"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;return a.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Q})),n.d(t,"mount",(function(){return S})),n.d(t,"unmount",(function(){return W}));var r=n("c7eb"),o=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("83f4"),n("2b0e")),u=n("8c4f"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._m(0),e.isQiankun?t("p",[e._v(" 主项目把router传给子项目，子项目用这个router来跳转 "),t("span",{on:{click:function(t){return e.goToPage("/about")}}},[e._v("parent About")]),t("span",{on:{click:function(t){return e.goToPage("/app-vue-history/about")}}},[e._v("app-vue-history About")])]):e._e()],1),t("router-view")],1)},s=[function(){var e=this,t=e._self._c;return t("p",[e._v("a链接跳转到主项目/其他子项目的页面，页面会刷新，效果不好"),t("a",{attrs:{href:"/about"}},[e._v("parent About")])])}],c=(n("14d9"),{data:function(){return{isQiankun:window.__POWERED_BY_QIANKUN__}},methods:{goToPage:function(e){console.log(this.$root.parentRouter),this.$root.parentRouter.push(e)}}}),l=c,p=(n("775e"),n("2877")),f=Object(p["a"])(l,i,s,!1,null,null,null),v=f.exports,h=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e.isQiankun?t("span",{on:{click:e.changeParentState}},[e._v("主项目的数据："+e._s(e.commonData.parent)+",点击变为2")]):e._e(),t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)}),_=[],d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e._self._c;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},g=m,w=(n("83d5"),Object(p["a"])(g,d,b,!1,null,"1935ec24",null)),j=w.exports,k={name:"Home",components:{HelloWorld:j},data:function(){return{isQiankun:window.__POWERED_BY_QIANKUN__}},computed:{commonData:function(){return this.isQiankun?this.$root.parentVuex.state.commonData:""}},mounted:function(){console.log("app-vue-hash Home.vue mounted")},methods:{changeParentState:function(){this.isQiankun&&this.$root.parentVuex.commit("setCommonData",{parent:2})}}},y=k,O=Object(p["a"])(y,h,_,!1,null,null,null),x=O.exports;a["a"].use(u["a"]);var P=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],E=P,A=n("2f62");a["a"].use(A["a"]);var N=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1;var T=null,C=null;function H(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,n=void 0===t?{}:t,r=e.container;T=new u["a"]({routes:E}),C=new a["a"]({router:T,store:N,data:function(){return{parentRouter:n.router,parentVuex:n.store}},render:function(e){return e(v)}}).$mount(r?r.querySelector("#appVueHash"):"#appVueHash")}function Q(){return D.apply(this,arguments)}function D(){return D=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("vue app bootstraped");case 1:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return I=Object(o["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("props from main framework",t.data),H(t);case 2:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function W(){return R.apply(this,arguments)}function R(){return R=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:C.$destroy(),C.$el.innerHTML="",C=null,T=null;case 4:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||H(),console.log("window.a",window.a)},"775e":function(e,t,n){"use strict";n("bb98")},"81ae":function(e,t,n){},"83d5":function(e,t,n){"use strict";n("81ae")},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},bb98:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}})}));
//# sourceMappingURL=app.00a40ea9.js.map