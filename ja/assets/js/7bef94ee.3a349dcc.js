"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5704],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1593:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>u,default:()=>s});var n=r(5900),o=r(4750),i=(r(9496),r(9613)),a=["components"],p={id:"import",title:"pnpm import"},l=void 0,c={unversionedId:"cli/import",id:"cli/import",isDocsHomePage:!1,title:"pnpm import",description:"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.15.0",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/import.md",sourceDirName:"cli",slug:"/cli/import",permalink:"/ja/next/cli/import",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"import",title:"pnpm import"},sidebar:"docs",previous:{title:"pnpm unlink",permalink:"/ja/next/cli/unlink"},next:{title:"pnpm rebuild",permalink:"/ja/next/cli/rebuild"}},u=[],m={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8ffd\u52a0\u3055\u308c\u305f\u30d0\u30fc\u30b8\u30e7\u30f3\uff1av2.15.0"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pnpm import")," generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," from another package manager's lockfile. Supported source files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn.lock")," (since v6.14.0)")))}s.isMDXComponent=!0}}]);