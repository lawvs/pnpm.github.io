"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5171],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(9496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8375:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>l,toc:()=>u,default:()=>d});var n=r(5900),i=r(4750),a=(r(9496),r(9613)),c=["components"],o={id:"pack",title:"pnpm pack"},p=void 0,l={unversionedId:"cli/pack",id:"version-6.x/cli/pack",isDocsHomePage:!1,title:"pnpm pack",description:"Create a tarball from a package.",source:"@site/i18n/pl/docusaurus-plugin-content-docs/version-6.x/cli/pack.md",sourceDirName:"cli",slug:"/cli/pack",permalink:"/pl/cli/pack",editUrl:"https://crowdin.com/project/pnpm/pl",tags:[],version:"6.x",frontMatter:{id:"pack",title:"pnpm pack"},sidebar:"version-6.x/docs",previous:{title:"pnpm publish",permalink:"/pl/cli/publish"},next:{title:"pnpm recursive",permalink:"/pl/cli/recursive"}},u=[{value:"Opcje",id:"opcje",children:[{value:"--pack-destination &lt;dir&gt;",id:"--pack-destination-dir",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create a tarball from a package."),(0,a.kt)("h2",{id:"opcje"},"Opcje"),(0,a.kt)("h3",{id:"--pack-destination-dir"},"--pack-destination ","<","dir",">"),(0,a.kt)("p",null,"Directory in which ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm pack")," will save tarballs. The default is the current working directory."))}d.isMDXComponent=!0}}]);