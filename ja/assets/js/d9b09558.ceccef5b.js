"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7666],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5590:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>p,assets:()=>u,toc:()=>s,default:()=>f});var r=n(5900),o=n(4750),a=(n(9496),n(9613)),c=["components"],i={title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,p={permalink:"/ja/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/ja",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"pnpm \u3067\u306e\u30ce\u30fc\u30c9\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u95a2\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u8a2d\u5b9a",description:"nodemodules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 nodemodules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002",date:"2020-10-17T00:00:00.000Z",formattedDate:"2020\u5e7410\u670817\u65e5",tags:[],readingTime:3.38,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],nextItem:{title:"\u30d5\u30e9\u30c3\u30c8\u306a node_modules \u304c\u552f\u4e00\u306e\u65b9\u6cd5\u3067\u306f\u3042\u308a\u307e\u305b\u3093",permalink:"/ja/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"node_modules \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u751f\u6210\u3059\u308b\u65b9\u6cd5\u306f\u591a\u304f\u3042\u308a\u307e\u3059\u3002 \u3086\u308b\u3044 node_modules \u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u3053\u3067\u306e\u76ee\u6a19\u306f\u6700\u3082\u53b3\u683c\u306a\u3082\u306e\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3067\u3059\u3002"))}f.isMDXComponent=!0}}]);