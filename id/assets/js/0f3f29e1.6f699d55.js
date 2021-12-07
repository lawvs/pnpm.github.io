"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5097],{9613:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>s});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),s=r,k=m["".concat(o,".").concat(s)]||m[s]||u[s]||p;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9714:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>c,toc:()=>d,default:()=>m});var a=t(5900),r=t(4750),p=(t(9496),t(9613)),i=["components"],l={id:"dlx",title:"pnpm dlx"},o=void 0,c={unversionedId:"cli/dlx",id:"cli/dlx",isDocsHomePage:!1,title:"pnpm dlx",description:"Ditambahkan dalam: v6.13.0",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/cli/dlx.md",sourceDirName:"cli",slug:"/cli/dlx",permalink:"/id/next/cli/dlx",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"dlx",title:"pnpm dlx"},sidebar:"docs",previous:{title:"pnpm exec",permalink:"/id/next/cli/exec"},next:{title:"pnpm create",permalink:"/id/next/cli/create"}},d=[{value:"Opsi",id:"opsi",children:[{value:"--paket &lt;nama&gt;",id:"--paket-nama",children:[],level:3},{value:"--silent, -s",id:"--silent--s",children:[],level:3}],level:2}],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Ditambahkan dalam: v6.13.0"),(0,p.kt)("p",null,"Mengambil paket dari registri tanpa menginstalnya sebagai dependensi, meng-hotloadnya, dan menjalankan perintah biner apapun yang dieksposnya."),(0,p.kt)("p",null,"Misalnya, untuk menggunakan ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," di mana saja untuk mem-bootstrap aplikasi reaksi tanpa perlu menginstalnya di bawah proyek lain, Anda dapat menjalankan:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app ./my-app\n")),(0,p.kt)("p",null,"Ini akan mengambil ",(0,p.kt)("inlineCode",{parentName:"p"},"create-react-app")," dari registri dan menjalankannya dengan argumen yang diberikan."),(0,p.kt)("p",null,"Since v6.23.1 you may also specify which exact version of the package you'd like to use:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm dlx create-react-app@next ./my-app\n")),(0,p.kt)("h2",{id:"opsi"},"Opsi"),(0,p.kt)("h3",{id:"--paket-nama"},"--paket ","<","nama",">"),(0,p.kt)("p",null,"Paket yang perlu diinstal sebelum menjalankan perintah."),(0,p.kt)("p",null,"Example:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=@pnpm/meta-updater dlx meta-updater --help\npnpm --package=@pnpm/meta-updater@0 dlx meta-updater --help\n")),(0,p.kt)("p",null,"Pada v6.14.5, beberapa paket dapat disediakan untuk instalasi:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"pnpm --package=yo --package=generator-webapp dlx yo webapp --skip-install\n")),(0,p.kt)("h3",{id:"--silent--s"},"--silent, -s"),(0,p.kt)("p",null,"Ditambahkan di: v6.17.0"),(0,p.kt)("p",null,"Hanya output dari perintah yang dieksekusi yang dicetak."))}m.isMDXComponent=!0}}]);