"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[174],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),a=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=a(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,p(p({ref:n},u),{},{components:t})):r.createElement(f,p({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var a=2;a<o;a++)p[a]=t[a];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7849:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>a,toc:()=>u,default:()=>d});var r=t(5900),i=t(4750),o=(t(9496),t(9613)),p=["components"],l={id:"prune",title:"pnpm prune"},c=void 0,a={unversionedId:"cli/prune",id:"version-5.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Rimuove i pacchetti non necessari.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/it/5.x/cli/prune",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-5.x/docs",previous:{title:"pnpm rebuild",permalink:"/it/5.x/cli/rebuild"},next:{title:"pnpm install-test",permalink:"/it/5.x/cli/install-test"}},u=[{value:"Opzioni",id:"opzioni",children:[{value:"--prod",id:"--prod",children:[],level:3},{value:"--no-optional",id:"--no-optional",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rimuove i pacchetti non necessari."),(0,o.kt)("h2",{id:"opzioni"},"Opzioni"),(0,o.kt)("h3",{id:"--prod"},"--prod"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle dipendenze di sviluppo (",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,o.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,o.kt)("p",null,"Rimuove i pacchetti specificati nelle dipendenze facoltative (",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."))}d.isMDXComponent=!0}}]);