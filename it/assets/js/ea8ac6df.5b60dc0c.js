"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5534],{9613:(e,i,n)=>{n.d(i,{Zo:()=>u,kt:()=>m});var t=n(9496);function o(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?r(Object(n),!0).forEach((function(i){o(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function c(e,i){if(null==e)return{};var n,t,o=function(e,i){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),p=function(e){var i=t.useContext(a),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},u=function(e){var i=p(e.components);return t.createElement(a.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},s=t.forwardRef((function(e,i){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(a,".").concat(m)]||s[m]||d[m]||r;return n?t.createElement(f,l(l({ref:i},u),{},{components:n})):t.createElement(f,l({ref:i},u))}));function m(e,i){var n=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var c={};for(var a in i)hasOwnProperty.call(i,a)&&(c[a]=i[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6277:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var t=n(2182),o=n(9028),r=(n(9496),n(9613)),l=["components"],c={id:"production",title:"Produzione"},a=void 0,p={unversionedId:"production",id:"version-5.x/production",title:"Produzione",description:"Ci sono due modi per avviare il tuo pacchetto in un ambiente di produzione con pnpm. Uno di questi \xe8 eseguire il commit del file di blocco. Quindi, nel tuo ambiente di produzione, esegui pnpm install - questo creer\xe0 l'albero delle dipendenze utilizzando il file di blocco, il che significa che le versioni delle dipendenze saranno coerenti con il modo in cui erano quando \xe8 stato eseguito il commit del file di blocco. Questo \xe8 il modo pi\xf9 efficace (e quello che consigliamo) per garantire che l'albero delle dipendenze persista in tutti gli ambienti.",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/production.md",sourceDirName:".",slug:"/production",permalink:"/it/5.x/production",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"production",title:"Produzione"}},u={},d=[],s={toc:d};function m(e){var i=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ci sono due modi per avviare il tuo pacchetto in un ambiente di produzione con pnpm. Uno di questi \xe8 eseguire il commit del file di blocco. Quindi, nel tuo ambiente di produzione, esegui ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install")," - questo creer\xe0 l'albero delle dipendenze utilizzando il file di blocco, il che significa che le versioni delle dipendenze saranno coerenti con il modo in cui erano quando \xe8 stato eseguito il commit del file di blocco. Questo \xe8 il modo pi\xf9 efficace (e quello che consigliamo) per garantire che l'albero delle dipendenze persista in tutti gli ambienti."),(0,r.kt)("p",null,"L'altro metodo \xe8 quello di eseguire il commit del file di blocco E copiare l'archivio dei pacchetti nel tuo ambiente di produzione (puoi cambiare dove con l'",(0,r.kt)("a",{parentName:"p",href:"npmrc#store-dir"},"opzione posizione archivio"),"). Quindi, puoi eseguire ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm install --offline")," e pnpm utilizzer\xe0 i pacchetti dall'archivio globale, quindi non far\xe0 alcuna richiesta al registro. Questo \xe8 consigliato ",(0,r.kt)("strong",{parentName:"p"},"SOLO")," per ambienti in cui l'accesso esterno al registro \xe8 non disponibile per qualsiasi motivo."))}m.isMDXComponent=!0}}]);