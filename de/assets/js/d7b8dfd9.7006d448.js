"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2412],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(9496);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=l,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(v,p(p({ref:n},s),{},{components:t})):r.createElement(v,p({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,p=new Array(o);p[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:l,p[1]=a;for(var c=2;c<o;c++)p[c]=t[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7932:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>c,toc:()=>s,default:()=>d});var r=t(5900),l=t(4750),o=(t(9496),t(9613)),p=["components"],a={id:"env",title:"pnpm env <cmd>"},i=void 0,c={unversionedId:"cli/env",id:"version-6.x/cli/env",isDocsHomePage:!1,title:"pnpm env <cmd>",description:"Added in: v6.12.0",source:"@site/i18n/de/docusaurus-plugin-content-docs/version-6.x/cli/env.md",sourceDirName:"cli",slug:"/cli/env",permalink:"/de/cli/env",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"6.x",frontMatter:{id:"env",title:"pnpm env <cmd>"},sidebar:"version-6.x/docs",previous:{title:"pnpm start",permalink:"/de/cli/start"},next:{title:"pnpm publish",permalink:"/de/cli/publish"}},s=[{value:"Commands",id:"commands",children:[{value:"use",id:"use",children:[],level:3}],level:2},{value:"Options",id:"options",children:[{value:"--global, -g",id:"--global--g",children:[],level:3}],level:2}],u={toc:s};function d(e){var n=e.components,t=(0,l.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Added in: v6.12.0"),(0,o.kt)("p",null,"Manages the Node.js environment."),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("h3",{id:"use"},"use"),(0,o.kt)("p",null,"Install and use the specified version of Node.js"),(0,o.kt)("p",null,"Install the LTS version of Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global lts\npnpm env use --global argon\n")),(0,o.kt)("p",null,"Install Node.js v16:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global 16\n")),(0,o.kt)("p",null,"Also since v6.18.0:"),(0,o.kt)("p",null,"Install a prerelease version of Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global nightly\npnpm env use --global rc\npnpm env use --global 16.0.0-rc.0\npnpm env use --global rc/14\n")),(0,o.kt)("p",null,"Install the latest version of Node.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pnpm env use --global latest\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"--global--g"},"--global, -g"),(0,o.kt)("p",null,"Die \xc4nderungen werden systemweit vorgenommen."))}d.isMDXComponent=!0}}]);