"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3350],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2706:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>c,toc:()=>s,default:()=>d});var r=n(5900),l=n(4750),i=(n(9496),n(9613)),a=["components"],p={id:"exec",title:"pnpm exec"},o=void 0,c={unversionedId:"cli/exec",id:"version-6.x/cli/exec",isDocsHomePage:!1,title:"pnpm exec",description:"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/exec.md",sourceDirName:"cli",slug:"/cli/exec",permalink:"/zh/cli/exec",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"exec",title:"pnpm exec"},sidebar:"version-6.x/docs",previous:{title:"pnpm test",permalink:"/zh/cli/test"},next:{title:"pnpm dlx",permalink:"/zh/cli/dlx"}},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[],level:2},{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--parallel",id:"--parallel",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u8303\u56f4\u5185\u6267\u884c shell \u547d\u4ee4\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node_modules/.bin")," \u6dfb\u52a0\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"PATH"),"\uff0c\u56e0\u6b64 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec")," \u5141\u8bb8\u6267\u884c\u4f9d\u8d56\u9879\u7684\u547d\u4ee4\u3002"),(0,i.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5c06 Jest \u4f5c\u4e3a\u9879\u76ee\u7684\u4f9d\u8d56\u9879\uff0c\u5219\u65e0\u9700\u5168\u5c40\u5b89\u88c5 Jest\uff0c\u53ea\u9700\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm exec"),"\u8fd0\u884c\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm exec jest\n")),(0,i.kt)("p",null,"\u5f53\u547d\u4ee4\u4e0e\u5185\u7f6e pnpm \u547d\u4ee4\u4e0d\u51b2\u7a81\u65f6\uff0c ",(0,i.kt)("inlineCode",{parentName:"p"},"exec")," \u90e8\u5206\u5b9e\u9645\u4e0a\u662f\u53ef\u9009\u7684\uff0c\u56e0\u6b64\u60a8\u4e5f\u53ef\u4ee5\u8fd0\u884c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pnpm jest\n")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Added in: v2.9.0"),(0,i.kt)("p",null,"\u5728\u5de5\u4f5c\u533a\u7684\u6bcf\u4e2a\u9879\u76ee\u4e2d\u6267\u884c shell \u547d\u4ee4\u3002"),(0,i.kt)("p",null,"The name of the current package is available through the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"PNPM_PACKAGE_NAME")," (supported from pnpm v2.22.0 onwards)."),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# prune node_modules installations for all packages\npnpm -r exec -- rm -rf node_modules\n# view package information for all packages\npnpm -r exec -- pnpm view $PNPM_PACKAGE_NAME\n")),(0,i.kt)("h3",{id:"--parallel"},"--parallel"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av5.1.0"),(0,i.kt)("p",null,"Completely disregard concurrency and topological sorting, running a given script immediately in all matching packages with prefixed streaming output. This is the preferred flag for long-running processes over many packages, for instance, a lengthy build process."),(0,i.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}d.isMDXComponent=!0}}]);