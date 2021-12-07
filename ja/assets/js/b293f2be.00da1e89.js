"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1752],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=l,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=n.length,a=new Array(p);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var o=2;o<p;o++)a[o]=n[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4925:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>o,toc:()=>u,default:()=>m});var r=n(5900),l=n(4750),p=(n(9496),n(9613)),a=["components"],i={id:"exec",title:"pnpm exec"},c=void 0,o={unversionedId:"cli/exec",id:"cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/ja/next/cli/exec",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"docs",previous:{title:"pnpm test",permalink:"/ja/next/cli/test"},next:{title:"pnpm dlx",permalink:"/ja/next/cli/dlx"}},u=[{value:"\u5177\u4f53\u4f8b",id:"\u5177\u4f53\u4f8b",children:[],level:2},{value:"\u5f15\u6570",id:"\u5f15\u6570",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,a);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30b9\u30b3\u30fc\u30d7\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u74b0\u5883\u5909\u6570",(0,p.kt)("inlineCode",{parentName:"p"},"PATH"),"\u306b",(0,p.kt)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\u3092\u8ffd\u52a0\u3057\u305f\u72b6\u614b\u3067\u5b9f\u884c\u3059\u308b\u305f\u3081\u3001",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u306f\u4f9d\u5b58\u95a2\u4fc2\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u542b\u307e\u308c\u308b\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("h2",{id:"\u5177\u4f53\u4f8b"},"\u5177\u4f53\u4f8b"),(0,p.kt)("p",null,"\u3042\u306a\u305f\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f9d\u5b58\u95a2\u4fc2\u306bJest\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u306a\u3089\u3001\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u3067\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,p.kt)("p",null,"\u5b9f\u969b\u306e\u3068\u3053\u308d\u30b5\u30d6\u30b3\u30de\u30f3\u30c9\u306e",(0,p.kt)("inlineCode",{parentName:"p"},"exec"),"\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u3059\u3002\u5b9f\u884c\u3059\u308b\u30b3\u30de\u30f3\u30c9\u304cpnpm\u306e\u7d44\u307f\u8fbc\u307f\u30b3\u30de\u30f3\u30c9\u3068\u885d\u7a81\u3057\u306a\u3044\u5834\u5408\u3001\u305d\u306e\u307e\u307e\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,p.kt)("h2",{id:"\u5f15\u6570"},"\u5f15\u6570"),(0,p.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.9.0"),(0,p.kt)("p",null,"\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u3059\u3079\u3066\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u30b7\u30a7\u30eb\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u73fe\u5728\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u540d\u524d\u306f\u3001\u74b0\u5883\u5909\u6570 ",(0,p.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (pnpm v2.22.0 \u4ee5\u964d\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u307e\u3059) \u3067\u53c2\u7167\u3067\u304d\u307e\u3059\u3002"),(0,p.kt)("p",null,"\u4f8b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,p.kt)("h3",{id:"--parallel"},"--parallel"),(0,p.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av5.1.0"),(0,p.kt)("p",null,"\u4e26\u884c\u6027\u3068\u30c8\u30dd\u30ed\u30b8\u30ab\u30eb\u30bd\u30fc\u30c8\u306e\u7d50\u679c\u3092\u5b8c\u5168\u306b\u7121\u8996\u3057\u3066\u3001\u30de\u30c3\u30c1\u3059\u308b\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5bfe\u3057\u3066\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5373\u6642\u5b9f\u884c\u3057\u3001\u63a5\u982d\u8f9e\u4ed8\u304d\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u51fa\u529b\u3057\u307e\u3059\u3002 \u6642\u9593\u306e\u304b\u304b\u308a\u304c\u3061\u306a\u30d3\u30eb\u30c9\u51e6\u7406\u306a\u3069\u3001\u591a\u304f\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u6a2a\u65ad\u3059\u308b\u9577\u6642\u9593\u51e6\u7406\u306b\u5411\u3044\u3066\u3044\u308b\u30d5\u30e9\u30b0\u3067\u3059\u3002"),(0,p.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"\u8a73\u3057\u304f\u306f\u30d5\u30a3\u30eb\u30bf\u30ea\u30f3\u30b0\u306b\u95a2\u3059\u308b\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")))}m.isMDXComponent=!0}}]);