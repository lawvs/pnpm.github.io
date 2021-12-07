"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6551],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(9496);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,a(a({ref:t},u),{},{components:r})):n.createElement(k,a({ref:t},u))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1581:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var n=r(5900),l=r(4750),o=(r(9496),r(9613)),a=["components"],i={id:"server",title:"pnpm server"},s=void 0,p={unversionedId:"cli/server",id:"version-6.x/cli/server",isDocsHomePage:!1,title:"pnpm server",description:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.30.0",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/cli/server.md",sourceDirName:"cli",slug:"/cli/server",permalink:"/ru/cli/server",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"server",title:"pnpm server"},sidebar:"version-6.x/docs",previous:{title:"pnpm recursive",permalink:"/ru/cli/recursive"},next:{title:"pnpm store",permalink:"/ru/cli/store"}},u=[{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",children:[{value:"pnpm server start",id:"pnpm-server-start",children:[],level:3},{value:"pnpm server stop",id:"pnpm-server-stop",children:[],level:3},{value:"pnpm server status",id:"pnpm-server-status",children:[],level:3}],level:2},{value:"\u041e\u043f\u0446\u0438\u0438",id:"\u043e\u043f\u0446\u0438\u0438",children:[{value:"--background",id:"--background",children:[],level:3},{value:"--network-concurrency",id:"--network-concurrency",children:[],level:3},{value:"--protocol",id:"--protocol",children:[],level:3},{value:"--port",id:"--port",children:[],level:3},{value:"--store-dir",id:"--store-dir",children:[],level:3},{value:"--no-lock",id:"--no-lock",children:[],level:3},{value:"--ignore-stop-requests",id:"--ignore-stop-requests",children:[],level:3},{value:"--ignore-upload-requests",id:"--ignore-upload-requests",children:[],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1.30.0"),(0,o.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,o.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,o.kt)("h3",{id:"pnpm-server-start"},"pnpm server start"),(0,o.kt)("p",null,"Starts a server that performs all interactions with the store. Other commands will delegate any store-related tasks to this server."),(0,o.kt)("h3",{id:"pnpm-server-stop"},"pnpm server stop"),(0,o.kt)("p",null,"\u041e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u0435\u0440\u0432\u0435\u0440 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430."),(0,o.kt)("h3",{id:"pnpm-server-status"},"pnpm server status"),(0,o.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435."),(0,o.kt)("h2",{id:"\u043e\u043f\u0446\u0438\u0438"},"\u041e\u043f\u0446\u0438\u0438"),(0,o.kt)("h3",{id:"--background"},"--background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Runs the server in the background, similar to daemonizing on UNIX systems."),(0,o.kt)("h3",{id:"--network-concurrency"},"--network-concurrency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"null")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Number"))),(0,o.kt)("p",null,"The maximum number of network requests to process simultaneously."),(0,o.kt)("h3",{id:"--protocol"},"--protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"auto")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"auto"),", ",(0,o.kt)("strong",{parentName:"li"},"tcp"),", ",(0,o.kt)("strong",{parentName:"li"},"ipc"))),(0,o.kt)("p",null,"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0441\u0432\u044f\u0437\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. When this is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", IPC is used on all systems except for Windows, which uses TCP."),(0,o.kt)("h3",{id:"--port"},"--port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"5813")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Number (\u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0440\u0442\u0430)"))),(0,o.kt)("p",null,"The port number to use when TCP is used for communication. If a port is specified and the protocol is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"auto"),", regardless of system type, the protocol is automatically set to use TCP."),(0,o.kt)("h3",{id:"--store-dir"},"--store-dir"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"<","home",">","/.pnpm-store")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"\u043f\u0443\u0442\u044c"))),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432: v1 \u043a\u0430\u043a ",(0,o.kt)("inlineCode",{parentName:"p"},"store")),(0,o.kt)("p",null,"The directory to use for the content addressable store."),(0,o.kt)("h3",{id:"--no-lock"},"--","[no-]","lock"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Set whether to make the package store immutable to external processes while the server is running or not."),(0,o.kt)("h3",{id:"--ignore-stop-requests"},"--ignore-stop-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Prevents you from stopping the server using ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm server stop"),"."),(0,o.kt)("h3",{id:"--ignore-upload-requests"},"--ignore-upload-requests"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,o.kt)("strong",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0438\u043f: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"Prevents creating a new side effect cache during install."))}m.isMDXComponent=!0}}]);