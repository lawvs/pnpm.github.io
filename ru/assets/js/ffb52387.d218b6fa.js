"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{9613:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=m(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?r.createElement(f,p(p({ref:n},s),{},{components:t})):r.createElement(f,p({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var m=2;m<o;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2259:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>m,toc:()=>s,default:()=>u});var r=t(5900),i=t(4750),o=(t(9496),t(9613)),p=["components"],a={id:"limitations",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},l=void 0,m={unversionedId:"limitations",id:"version-6.x/limitations",isDocsHomePage:!1,title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",description:"1. npm-shrinkwrap.json \u0438 package-lock.json \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 pnpm, npm \u043c\u043e\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 name@version \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. \u041b\u043e\u043a\u0444\u0430\u0439\u043b \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 npm \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043b\u043e\u0441\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b node_modules, \u043e\u0434\u043d\u0430\u043a\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 pnpm \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u043e\u0431\u043d\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u043e\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b\u0430 npm. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 pnpm import, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f pnpm.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/ru/limitations",editUrl:"https://crowdin.com/project/pnpm/ru",tags:[],version:"6.x",frontMatter:{id:"limitations",title:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"},sidebar:"version-6.x/docs",previous:{title:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f\u044b",permalink:"/ru/logos"},next:{title:"Symlinked `node_modules` structure",permalink:"/ru/symlinked-node-modules-structure"}},s=[],c={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," \u0438 ",(0,o.kt)("inlineCode",{parentName:"li"},"package-lock.json")," \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 pnpm, npm \u043c\u043e\u0436\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438 \u0442\u043e \u0436\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"name@version")," \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0438 \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439. \u041b\u043e\u043a\u0444\u0430\u0439\u043b \u043f\u0430\u043a\u0435\u0442\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430 npm \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u043e\u0442\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u043b\u043e\u0441\u043a\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),", \u043e\u0434\u043d\u0430\u043a\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 pnpm \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0434\u043e\u0431\u043d\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u043e\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b\u0430 npm. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,o.kt)("a",{parentName:"li",href:"/ru/cli/import"},"pnpm import"),", \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043b\u043e\u043a-\u0444\u0430\u0439\u043b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0439 \u0434\u043b\u044f pnpm."),(0,o.kt)("li",{parentName:"ol"},"pnpm \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b npm \u0441 ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),". \u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f, \u043d\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 ",(0,o.kt)("inlineCode",{parentName:"li"},"bundledDependencies"),", \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u043f\u0440\u0438 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438, \u0434\u0430\u0436\u0435 \u0432 \u043c\u043e\u043c\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0430\u043c\u043e\u0433\u043e npm. \u0412\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0432\u0430\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u0441\u0431\u043e\u0440\u0449\u0438\u043a \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439/\u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, webpack, rollup \u0438\u043b\u0438 ESBuild."),(0,o.kt)("li",{parentName:"ol"},"\u0411\u0438\u043d\u0441\u0442\u0430\u0431\u044b (\u0444\u0430\u0439\u043b\u044b \u0432 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules/.bin"),") \u0432\u0441\u0435\u0433\u0434\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430/\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438, \u0430 \u043d\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0441\u0441\u044b\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 JS \u0444\u0430\u0439\u043b\u044b. (\u0411\u0438\u043d\u0441\u0442\u0430\u0431\u044b - \u044d\u0442\u043e \u0441\u043a\u0440\u0438\u043f\u0442\u044b-\u043e\u0431\u0435\u0440\u0442\u043a\u0438 \u0432\u043e\u043a\u0440\u0443\u0433 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432, \u0446\u0435\u043b\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0440\u0435\u0434\u044b \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439 \u0432\u044b\u0437\u043e\u0432\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0443). \u0424\u0430\u0439\u043b\u044b \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u043c CLI \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u0432 \u043f\u043e\u0438\u0441\u043a\u0435 \u0441\u0432\u043e\u0438\u0445 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0432 \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"node_modules"),". \u042d\u0442\u043e \u043e\u0447\u0435\u043d\u044c \u0440\u0435\u0434\u043a\u043e \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439, \u0438 \u0435\u0441\u043b\u0438 \u0432\u044b \u043e\u0436\u0438\u0434\u0430\u0435\u0442\u0435, \u0447\u0442\u043e \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 JS-\u0444\u0430\u0439\u043b\u043e\u043c, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0441\u0441\u044b\u043b\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0430 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u0444\u0430\u0439\u043b, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pnpm/pnpm/issues/736"},"#736"),"."),(0,o.kt)("li",{parentName:"ol"},"Nodejs \u0444\u043b\u0430\u0433 ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/cli.html#cli_preserve_symlinks"},"--preserve-symlinks")," \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 pnpm.")),(0,o.kt)("p",null,"\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0438\u0434\u0435\u044f \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0440\u0435\u0448\u0438\u0442\u044c \u044d\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/new"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0438\u0435\u0441\u044c \u0438\u043c\u0438.")))}u.isMDXComponent=!0}}]);