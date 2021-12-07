"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[593],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(9496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8193:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,assets:()=>u,toc:()=>c,default:()=>m});var r=t(5900),a=t(4750),o=(t(9496),t(9613)),i=["components"],s={title:"Options de configuration des node_modules avec pnpm",author:"Zoltan Kochan",authorURL:"http://twitter.com/zoltankochan",authorImageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"},l=void 0,p={permalink:"/fr/blog/2020/10/17/node-modules-configuration-options-with-pnpm",editUrl:"https://crowdin.com/project/pnpm/fr",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2020-10-17-node-modules-configuration-options-with-pnpm.md",title:"Options de configuration des node_modules avec pnpm",description:"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier nodemodules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n'est pas possible, il y a aussi des options pour faire un nodemodules en vrac.",date:"2020-10-17T00:00:00.000Z",formattedDate:"17 octobre 2020",tags:[],readingTime:1.925,truncated:!0,authors:[{name:"Zoltan Kochan",url:"http://twitter.com/zoltankochan",imageURL:"https://gravatar.com/avatar/1f59f040fb37d5799e3879fa678c2373?s=48"}],nextItem:{title:"Flat node_modules n'est pas le seul moyen",permalink:"/fr/blog/2020/05/27/flat-node-modules-is-not-the-only-way"}},u={authorsImageUrls:[void 0]},c=[{value:"Configuration par d\xe9faut",id:"configuration-par-d\xe9faut",children:[],level:2},{value:"Plug&#39;n&#39;Play. La configuration la plus stricte",id:"plugnplay-la-configuration-la-plus-stricte",children:[],level:2},{value:"Un r\xe9pertoire de node_modules strict et traditionnel",id:"un-r\xe9pertoire-de-node_modules-strict-et-traditionnel",children:[],level:2},{value:"Le pire des cas - hisser \xe0 la racine",id:"le-pire-des-cas---hisser-\xe0-la-racine",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Il existe de nombreuses fa\xe7ons de cr\xe9er un dossier node_modules. Votre objectif doit \xeatre de cr\xe9er le plus strict, mais si ce n'est pas possible, il y a aussi des options pour faire un node_modules en vrac."),(0,o.kt)("h2",{id:"configuration-par-d\xe9faut"},"Configuration par d\xe9faut"),(0,o.kt)("p",null,"Par d\xe9faut, pnpm v5 cr\xe9era un node_modules semi-strict. Semi-strict signifie que votre application ne pourra require que des packages ajout\xe9s en tant que d\xe9pendances au ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," (\xe0 quelques exceptions pr\xe8s). Cependant, vos d\xe9pendances pourront acc\xe9der \xe0 tous les packages."),(0,o.kt)("p",null,"La configuration par d\xe9faut ressemble \xe0 ceci:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"; Tous les packages sont hiss\xe9s vers node_modules/.pnpm/node_modules\nhoist-pattern[]=*\n\n; Tous les types sont hiss\xe9s \xe0 la racine afin de rendre TypeScript heureux\npublic-hoist-pattern[]=*types*\n\n; Tous les packages li\xe9s \xe0 ESLint sont \xe9galement hiss\xe9s \xe0 la racine\npublic-hoist-pattern[]=*eslint*\n")),(0,o.kt)("h2",{id:"plugnplay-la-configuration-la-plus-stricte"},"Plug'n'Play. La configuration la plus stricte"),(0,o.kt)("p",null,"pnpm prend en charge ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/features/pnp"},"Yarn's Plug'n'Play")," depuis la version 5.9. Avec PnP, votre application et les d\xe9pendances de votre application n'auront acc\xe8s qu'\xe0 leurs d\xe9pendances d\xe9clar\xe9es. C'est encore plus strict que de d\xe9finir ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist=false")," car \xe0 l'int\xe9rieur d'un monod\xe9p\xf4t, votre application ne pourra m\xeame pas acc\xe9der aux d\xe9pendances du projet racine."),(0,o.kt)("p",null,"Pour utiliser Plug'n'Play, d\xe9finissez ces param\xe8tres:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"node-linker=pnp\nsymlink=false\n")),(0,o.kt)("h2",{id:"un-r\xe9pertoire-de-node_modules-strict-et-traditionnel"},"Un r\xe9pertoire de node_modules strict et traditionnel"),(0,o.kt)("p",null,"Si vous n'\xeates pas encore pr\xeat \xe0 utiliser PnP, vous pouvez toujours \xeatre strict et autoriser uniquement les packages \xe0 acc\xe9der \xe0 leurs propres d\xe9pendances en d\xe9finissant la configuration de hoist sur false:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist=false\n")),(0,o.kt)("p",null,"Cependant, si certaines de vos d\xe9pendances tentent d'acc\xe9der \xe0 des packages qui ne figurent pas dans leurs d\xe9pendances, vous avez deux options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Cr\xe9ez un ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpmfile.js")," et utilisez un ",(0,o.kt)("a",{parentName:"p",href:"/pnpmfile"},"crochet")," pour ajouter la d\xe9pendance manquante au manifeste du package.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ajoutez un pattern au param\xe8tre ",(0,o.kt)("inlineCode",{parentName:"p"},"hoist-pattern"),". Par exemple, si le module non trouv\xe9 est ",(0,o.kt)("inlineCode",{parentName:"p"},"babel-core"),", ajoutez le param\xe8tre suivant \xe0 ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"hoist-pattern[]=babel-core\n")))),(0,o.kt)("h2",{id:"le-pire-des-cas---hisser-\xe0-la-racine"},"Le pire des cas - hisser \xe0 la racine"),(0,o.kt)("p",null,"Certains outils peuvent ne pas fonctionner m\xeame avec la configuration par d\xe9faut de pnpm, qui h\xe9berge tout \xe0 la racine du magasin virtuel et quelques packages \xe0 la racine. Dans ce cas, vous pouvez hisser tout ou un sous-ensemble de d\xe9pendances \xe0 la racine du r\xe9pertoire des modules."),(0,o.kt)("p",null,"Tout placer \xe0 la racine de node_modules:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"shamefully-hoist=true\n")),(0,o.kt)("p",null,"Ne hisser que les packages qui correspondent \xe0 un mod\xe8le:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"public-hoist-pattern[]=babel-*\n")))}m.isMDXComponent=!0}}]);