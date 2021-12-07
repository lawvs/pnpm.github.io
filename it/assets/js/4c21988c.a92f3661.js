"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6223],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?i.createElement(f,l(l({ref:n},c),{},{components:t})):i.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8278:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>u});var i=t(5900),r=t(4750),o=(t(9496),t(9613)),l=["components"],a={id:"limitations",title:"Limitazioni"},p=void 0,s={unversionedId:"limitations",id:"limitations",isDocsHomePage:!1,title:"Limitazioni",description:"1. npm-shrinkwrap.json e package-lock.json vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso nome@versione pi\xf9 volte e con diversi set di dipendenze. Il lockfile di npm \xe8 progettato per riflettere la struttura flat di node_modules, tuttavia, poich\xe9 pnpm non pu\xf2 creare un layout simile, non pu\xf2 rispettare il formato del lockfile di npm. Vedi pnpm import se desideri convertire un lockfile nel formato di pnpm.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/it/next/limitations",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"current",frontMatter:{id:"limitations",title:"Limitazioni"},sidebar:"docs",previous:{title:"Loghi",permalink:"/it/next/logos"},next:{title:"Struttura `node_modules` con collegamenti simbolici",permalink:"/it/next/symlinked-node-modules-structure"}},c=[],m={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," e ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," vengono ignorati. A differenza di pnpm, npm pu\xf2 installare lo stesso ",(0,o.kt)("inlineCode",{parentName:"li"},"nome@versione")," pi\xf9 volte e con diversi set di dipendenze. Il lockfile di npm \xe8 progettato per riflettere la struttura flat di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", tuttavia, poich\xe9 pnpm non pu\xf2 creare un layout simile, non pu\xf2 rispettare il formato del lockfile di npm. Vedi ",(0,o.kt)("a",{parentName:"li",href:"/it/next/cli/import"},"pnpm import")," se desideri convertire un lockfile nel formato di pnpm."),(0,o.kt)("li",{parentName:"ol"},"pnpm non pu\xf2 pubblicare pacchetti npm con ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". Attualmente, non ci sono piani per aggiungere il supporto per ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),", siccome non hanno un funzionamento molto consistente nella pubblicazione, anche su npm. Invece, ti consigliamo di utilizzare un bundler di pacchetti effettivo, come webpack, rollup o ESBuild."),(0,o.kt)("li",{parentName:"ol"},"I file binari (file in ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") sono sempre file di shell, non collegamenti simbolici a file JS. I file shell sono creati per aiutare le app CLI collegabili a trovare i loro plug-in nell'insolita struttura di ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". Questo \xe8 molto raramente un problema e se prevedi che il file sia un file JS, fai invece riferimento direttamente al file originale, come spiegato in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,o.kt)("li",{parentName:"ol"},"Il flag ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," di Node non funziona se eseguito in un progetto che usa pnpm.")),(0,o.kt)("p",null,"Hai un'idea per risolvere questi problemi? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"Condividila.")))}u.isMDXComponent=!0}}]);