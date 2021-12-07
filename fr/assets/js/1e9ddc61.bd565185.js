"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7543],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.createElement(f,p(p({ref:t},m),{},{components:n})):r.createElement(f,p({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<i;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7957:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>c,toc:()=>m,default:()=>d});var r=n(5900),a=n(4750),i=(n(9496),n(9613)),p=["components"],l={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,c={unversionedId:"pnpm-cli",id:"version-6.x/pnpm-cli",isDocsHomePage:!1,title:"pnpm CLI",description:"Diff\xe9rences avec npm",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.x/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/fr/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/fr",tags:[],version:"6.x",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"version-6.x/docs",previous:{title:"Installation",permalink:"/fr/installation"},next:{title:"pnpx CLI",permalink:"/fr/pnpx-cli"}},m=[{value:"Diff\xe9rences avec npm",id:"diff\xe9rences-avec-npm",children:[],level:2},{value:"Options",id:"options",children:[{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",children:[],level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",children:[],level:3}],level:2},{value:"Commandes",id:"commandes",children:[],level:2}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"diff\xe9rences-avec-npm"},"Diff\xe9rences avec npm"),(0,i.kt)("p",null,"Contraitement \xe0 npm, pnpm valide toutes les options. Par exemple ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --foo")," ne fonctionnera pas car ",(0,i.kt)("inlineCode",{parentName:"p"},"--foo")," n'est pas une option valide pour ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"However, some dependencies may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_")," environment variable, which is populated from the CLI options. Dans ce cas, vous avez vous disposez des options suivantes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"d\xe9finissez explicitement la variables d'environnement: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_foo=true pnpm install")),(0,i.kt)("li",{parentName:"ol"},"forcez l'option jusqu'alors inconnue avec ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.foo"))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,i.kt)("p",null,"Execute comme si pnpm avait \xe9t\xe9 lanc\xe9 dans ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," au lieu du r\xe9p\xe9rtoire de travail actuel."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Ajout : v5.6.0"),(0,i.kt)("p",null,"Execute comme si pnpm avait \xe9t\xe9 lanc\xe9 dans le repertoire root de l'espace de travail au lieu du repertoire de travail courant."),(0,i.kt)("h2",{id:"commandes"},"Commandes"),(0,i.kt)("p",null,"Pour plus d'informations, referez vous a la documentation pour la liste des commandes CLI. Here is a list of handy npm equivalents to get you started:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"commande npm"),(0,i.kt)("th",{parentName:"tr",align:null},"\xe9quivalent pnpm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/fr/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,i.kt)("p",null,"When an unknown command is used, pnpm will search for a script with the given name, so ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". If there is no script with the specified name, then pnpm will execute the command as a shell script, so you can do things like ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (see ",(0,i.kt)("a",{parentName:"p",href:"/fr/cli/exec"},"pnpm exec"),")."))}d.isMDXComponent=!0}}]);