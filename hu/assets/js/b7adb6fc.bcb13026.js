"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7964],{9613:(e,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>m});var n=t(9496);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},k=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,u=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return t?n.createElement(u,r(r({ref:a},k),{},{components:t})):n.createElement(u,r({ref:a},k))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7656:(e,a,t)=>{t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>i,metadata:()=>p,toc:()=>k,default:()=>d});var n=t(5900),o=t(4750),l=(t(9496),t(9613)),r=["components"],s={id:"workspaces",title:"Workspace"},i=void 0,p={unversionedId:"workspaces",id:"version-5.x/workspaces",isDocsHomePage:!1,title:"Workspace",description:"A pnpm be\xe9p\xedtett t\xe1mogat\xe1st ny\xfajt monorep\xf3khoz (m\xe1s n\xe9ven t\xf6bbcsomagos repozit\xf3riumok, t\xf6bbprojektes repozit\xf3riumok vagy monolit repozit\xf3riumok). L\xe9trehozhatsz egy workspace-t, amely t\xf6bb projektet egyes\xedt egyetlen repozit\xf3riumon bel\xfcl.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-5.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/hu/5.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/hu",tags:[],version:"5.x",frontMatter:{id:"workspaces",title:"Workspace"},sidebar:"version-5.x/docs",previous:{title:"pnpmfile.js",permalink:"/hu/5.x/pnpmfile"},next:{title:"Aliases",permalink:"/hu/5.x/aliases"}},k=[{value:"Workspace protokoll (workspace:)",id:"workspace-protokoll-workspace",children:[{value:"Workspace csomagra val\xf3 hivatkoz\xe1s \xe1ln\xe9v haszn\xe1lat\xe1val",id:"workspace-csomagra-val\xf3-hivatkoz\xe1s-\xe1ln\xe9v-haszn\xe1lat\xe1val",children:[],level:3},{value:"Workspace csomagra val\xf3 hivatkoz\xe1s relat\xedv \xfatvonallal",id:"workspace-csomagra-val\xf3-hivatkoz\xe1s-relat\xedv-\xfatvonallal",children:[],level:3},{value:"Workspace csomagok publishol\xe1sa",id:"workspace-csomagok-publishol\xe1sa",children:[],level:3}],level:2},{value:"Release workflow",id:"release-workflow",children:[],level:2},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[],level:3},{value:"prefer-workspace-packages",id:"prefer-workspace-packages",children:[],level:3},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[],level:3},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[],level:3}],level:2}],c={toc:k};function d(e){var a=e.components,t=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A pnpm be\xe9p\xedtett t\xe1mogat\xe1st ny\xfajt monorep\xf3khoz (m\xe1s n\xe9ven t\xf6bbcsomagos repozit\xf3riumok, t\xf6bbprojektes repozit\xf3riumok vagy monolit repozit\xf3riumok). L\xe9trehozhatsz egy workspace-t, amely t\xf6bb projektet egyes\xedt egyetlen repozit\xf3riumon bel\xfcl."),(0,l.kt)("p",null,"A workspace gy\xf6ker\xe9ben egy ",(0,l.kt)("a",{parentName:"p",href:"/hu/5.x/pnpm-workspace_yaml"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm-workspace.yaml"))," f\xe1jl kell hogy jelen legyen. A workspace gy\xf6ker\xe9ben egy ",(0,l.kt)("a",{parentName:"p",href:"/hu/5.x/npmrc"},(0,l.kt)("inlineCode",{parentName:"a"},".npmrc"))," f\xe1jl is jelen lehet."),(0,l.kt)("h2",{id:"workspace-protokoll-workspace"},"Workspace protokoll (workspace:)"),(0,l.kt)("p",null,"Supported since v3.7.0."),(0,l.kt)("p",null,"Alap konfigur\xe1ci\xf3 szerint pnpm a workspacen bel\xfclr\u0151l linkeli a csomagokat, ha a rendelkez\xe9sre \xe1ll\xf3 lok\xe1lis csomagok megfelelnek a deklar\xe1lt verzi\xf3val. P\xe9ld\xe1ul a ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," a ",(0,l.kt)("inlineCode",{parentName:"p"},"bar"),"hoz lesz linkelve ha a ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," f\xfcgg\u0151s\xe9gei k\xf6zt van a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"'),". Ha azonban ",(0,l.kt)("inlineCode",{parentName:"p"},"bar")," f\xfcgg\u0151s\xe9ge ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"'),", \xe9s ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," nincs a workspaceben, akkor ",(0,l.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," a registry-b\u0151l lesz let\xf6ltve. Ez a viselked\xe9s n\xe9mi bizonytalans\xe1got okozhat."),(0,l.kt)("p",null,"Luckily, pnpm supports the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (the same as in Yarn v2). Ha ez a protokoll van haszn\xe1lva, pnpm csak a workspace-ben jelenl\xe9v\u0151 csomagokat fogja felhaszn\xe1lni a f\xfcgg\u0151s\xe9g telep\xedt\xe9s\xe9re. Teh\xe1t, ha a f\xfcgg\u0151s\xe9g a k\xf6vetkez\u0151 ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"'),", a telep\xedt\xe9s sikertelen lesz, mert a ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," nincs jelen a workspace-ben."),(0,l.kt)("p",null,"Ez a protokoll k\xfcl\xf6n\xf6sen akkor v\xe1lik hasznoss\xe1, ha a ",(0,l.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," be\xe1ll\xedt\xe1s ",(0,l.kt)("inlineCode",{parentName:"p"},"false<code>-ra van be\xe1ll\xedtva. Ebben az esetben pnpm csak akkor linkel a workspace-en bel\xfcl csomagokat, ha\na <code>workspace:")," protokoll van haszn\xe1lva az adott csomag deklar\xe1l\xe1s\xe1ra."),(0,l.kt)("h3",{id:"workspace-csomagra-val\xf3-hivatkoz\xe1s-\xe1ln\xe9v-haszn\xe1lat\xe1val"},"Workspace csomagra val\xf3 hivatkoz\xe1s \xe1ln\xe9v haszn\xe1lat\xe1val"),(0,l.kt)("p",null,"Added in 5.12.0"),(0,l.kt)("p",null,"Tegy\xfck fel, hogy van egy ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," nev\u0171 csomag a workspace-ben. \xc1ltal\xe1ban \xfagy hivatkozn\xe1l r\xe1 hogy ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:*"'),"."),(0,l.kt)("p",null,"Ha m\xe1s nevet szeretn\xe9l haszn\xe1lni a f\xfcgg\u0151s\xe9g sz\xe1m\xe1ra, akkor a k\xf6vetkez\u0151 szintaxis is m\u0171k\xf6dni fog: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "workspace:foo@*"'),"."),(0,l.kt)("p",null,"Publish el\u0151tt az ilyen \xe1ln\xe9vvel telep\xedtett workspace f\xfcgg\u0151s\xe9gek \xe1talakulnak szokv\xe1nyos \xe1lneves f\xfcgg\u0151s\xe9gekbe. A fenti p\xe9lda a k\xf6vetkez\u0151 lesz: ",(0,l.kt)("inlineCode",{parentName:"p"},'"bar": "npm:foo@1.0.0"'),"."),(0,l.kt)("h3",{id:"workspace-csomagra-val\xf3-hivatkoz\xe1s-relat\xedv-\xfatvonallal"},"Workspace csomagra val\xf3 hivatkoz\xe1s relat\xedv \xfatvonallal"),(0,l.kt)("p",null,"Added in 5.12.0"),(0,l.kt)("p",null,"K\xe9t csomaggal rendelkez\u0151 workace-ben:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+ packages\n    + foo\n    + bar\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"bar")," f\xfcgg\u0151s\xe9geiben ott lehet ",(0,l.kt)("inlineCode",{parentName:"p"},"foo")," mint ",(0,l.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:../foo"'),". Publish el\u0151tt ez a specifik\xe1ci\xf3 norm\xe1l verzi\xf3 specifik\xe1ci\xf3v\xe1 van cser\xe9lve, amelyet minden csomagkezel\u0151 ismer."),(0,l.kt)("h3",{id:"workspace-csomagok-publishol\xe1sa"},"Workspace csomagok publishol\xe1sa"),(0,l.kt)("p",null,"Amikor egy workspace csomag arch\xedvumba van csomagolva (ak\xe1r ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm pack")," vagy az egyik publish parancs haszn\xe1lata \xe1ltal, p\xe9ld\xe1ul ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), dinamikusan le lesznek cser\xe9lve a ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," protokoll specifik\xe1ci\xf3k:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,l.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,l.kt)("li",{parentName:"ul"},"A megadott semver specifik\xe1ci\xf3ra (b\xe1rmely m\xe1s specifik\xe1ci\xf3 eset\xe9ben)")),(0,l.kt)("p",null,"So for example, if we have a workspace package at version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "workspace:*",\n        "bar": "workspace:^1.2.3"\n    }\n}\n')),(0,l.kt)("p",null,"\xc1talakulnak ezekre:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "foo": "1.5.0",\n        "bar": "^1.2.3"\n    }\n}\n')),(0,l.kt)("p",null,"This feature allows you to depend on your local workspace packages while still being able to publish the resulting packages to the remote registry without needing intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefitting from the guarantees semver offers."),(0,l.kt)("h2",{id:"release-workflow"},"Release workflow"),(0,l.kt)("p",null,"Versioning packages inside a workspace is a complex task and pnpm currently does not provide a built-in solution for it. However, there are 2 well tested tools that handle versioning and support pnpm:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/atlassian/changesets"},"changesets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rushjs.io"},"Rush"),".")),(0,l.kt)("p",null,"For how to set up a repository using Rush, read ",(0,l.kt)("a",{parentName:"p",href:"https://rushjs.io/pages/maintainer/setup_new_repo"},"this page"),"."),(0,l.kt)("p",null,"For using Changesets with pnpm, read ",(0,l.kt)("a",{parentName:"p",href:"/hu/5.x/using-changesets"},"this guide"),"."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,l.kt)("p",null,"Added in: v2.14.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"true"),", ",(0,l.kt)("strong",{parentName:"li"},"false"),", ",(0,l.kt)("strong",{parentName:"li"},"deep"))),(0,l.kt)("p",null,"If this is enabled, locally available packages are linked to ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo. If you need local packages to also be linked to subdependencies, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"deep")," setting (since v5)."),(0,l.kt)("p",null,"Else, packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol."),(0,l.kt)("h3",{id:"prefer-workspace-packages"},"prefer-workspace-packages"),(0,l.kt)("p",null,"Added in: v5.13.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"false")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry."),(0,l.kt)("p",null,"This setting is only useful if the workspace doesn't use ",(0,l.kt)("inlineCode",{parentName:"p"},"save-workspace-protocol"),"."),(0,l.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,l.kt)("p",null,"Added in: v2.17.0 as ",(0,l.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, pnpm creates a single ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace. This also means that all dependencies of workspace packages will be in a single ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," (and get symlinked to their package ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules")," folder for Node's module resolution)."),(0,l.kt)("p",null,"Advantages of this option:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,l.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,l.kt)("li",{parentName:"ul"},"fewer changes in code reviews as they are all in one file")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Even though all the dependencies will be hard linked into the root ",(0,l.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),", so pnpm's strictness is preserved. This is a result of the aforementioned symbolic linking."))),(0,l.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"If this is enabled, new dependencies will be added with the workspace protocol IF (and only if) they are present in the workspace."),(0,l.kt)("p",null,"You might want to change this setting to ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," if the tooling in your repository does not understand the workspace protocol (and ideally submit a PR to your tooling to get it added in the future)."))}d.isMDXComponent=!0}}]);