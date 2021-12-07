"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4511],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},126:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>i,toc:()=>u,default:()=>s});var n=r(5900),a=r(4750),p=(r(9496),r(9613)),o=["components"],l={id:"dlx",title:"pnpm dlx"},c=void 0,i={unversionedId:"cli/dlx",id:"cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Adicionado em: v6.13.0",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/pt/next/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/pt",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/pt/next/cli/exec"},next:{title:"pnpm create",permalink:"/pt/next/cli/create"}},u=[{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",children:[{value:"--package &lt;name&gt;",id:"--package-name",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],d={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Adicionado em: v6.13.0"),(0,p.kt)("p",null,"Busca um pacote do registro sem instala-lo como uma depend\xeancia e executa qualquer comando padr\xe3o que o bin\xe1rio exp\xf5e."),(0,p.kt)("p",null,"Por exemplo, para usar ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," em qualquer lugar para iniciar um novo projeto react sem precisar instala-lo em outro projeto, voc\xea pode executar:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Isso ira buscar ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," no registro e execut\xe1-lo com os argumentos fornecidos."),(0,p.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,p.kt)("h3",{id:"--package-name"},"--package ","<","name",">"),(0,p.kt)("p",null,"O pacote a ser instalado antes de executar o comando."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"A partir da vers\xe3o 6.14.5, v\xe1rios pacotes podem ser fornecidos para a instala\xe7\xe3o:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Adicionado em: v6.17.0"),(0,p.kt)("p",null,"Apenas a sa\xedda do comando executado \xe9 exibida."))}s.isMDXComponent=!0}}]);