"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[468],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),v=c(n),d=l,m=v["".concat(i,".").concat(d)]||v[d]||s[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=v;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1062:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>i,metadata:()=>c,toc:()=>u,default:()=>v});var r=n(5900),l=n(4750),o=(n(9496),n(9613)),a=["components"],p={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Hozz\xe1adva: v6.12.0",source:"@site/i18n/hu/docusaurus-plugin-content-docs/current/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/hu/next/cli/env",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"current",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"docs",previous:{title:"pnpm start",permalink:"/hu/next/cli/start"},next:{title:"pnpm publish",permalink:"/hu/next/cli/publish"}},u=[{value:"Parancsok",id:"parancsok",children:[{value:"use",id:"use",children:[],level:3}],level:2},{value:"Opci\xf3k",id:"opci\xf3k",children:[{value:"--global, -g",id:"--global--g",children:[],level:3}],level:2}],s={toc:u};function v(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hozz\xe1adva: v6.12.0"),(0,o.kt)("p",null,"A Node.js k\xf6rnyezet kezel\xe9se."),(0,o.kt)("h2",{id:"parancsok"},"Parancsok"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"A Node.js megadott verzi\xf3ja telep\xedt\xe9se \xe9s aktiv\xe1l\xe1sa."),(0,o.kt)("p",null,"Install the LTS version of Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Node.js v16 telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Szint\xe9n a v6.18.0 \xf3ta:"),(0,o.kt)("p",null,"Node.js el\u0151zetes verzi\xf3i telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Node.js legujabb verzi\xf3ja telep\xedt\xe9se:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"opci\xf3k"},"Opci\xf3k"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"A v\xe1ltoztat\xe1sok rendszerszinten t\xf6rt\xe9nnek."))}v.isMDXComponent=!0}}]);