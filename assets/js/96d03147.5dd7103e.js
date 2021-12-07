"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3063],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return t?a.createElement(y,r(r({ref:n},m),{},{components:t})):a.createElement(y,r({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8372:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>l,toc:()=>m,default:()=>u});var a=t(5900),o=t(4750),i=(t(9496),t(9613)),r=["components"],s={id:"continuous-integration",title:"Continuous Integration"},p=void 0,l={unversionedId:"continuous-integration",id:"version-5.x/continuous-integration",isDocsHomePage:!1,title:"Continuous Integration",description:"pnpm can easily be used in various continuous integration systems.",source:"@site/versioned_docs/version-5.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/5.x/continuous-integration",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/main/versioned_docs/version-5.x/continuous-integration.md",tags:[],version:"5.x",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1617659593,formattedLastUpdatedAt:"4/5/2021",frontMatter:{id:"continuous-integration",title:"Continuous Integration"},sidebar:"version-5.x/docs",previous:{title:"Using Changesets with pnpm",permalink:"/5.x/using-changesets"},next:{title:"Only allow pnpm",permalink:"/5.x/only-allow-pnpm"}},m=[{value:"Travis",id:"travis",children:[],level:2},{value:"Semaphore",id:"semaphore",children:[],level:2},{value:"AppVeyor",id:"appveyor",children:[],level:2},{value:"Sail CI",id:"sail-ci",children:[],level:2},{value:"GitHub Actions",id:"github-actions",children:[],level:2}],c={toc:m};function u(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"pnpm can easily be used in various continuous integration systems."),(0,i.kt)("h2",{id:"travis"},"Travis"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this\nto your ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,i.kt)("h2",{id:"semaphore"},"Semaphore"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by\nadding this to your ",(0,i.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,i.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,i.kt)("p",null,"On ",(0,i.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this\nto your ",(0,i.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm install\n")),(0,i.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,i.kt)("p",null,"On ","[Sail CI]",", you can use pnpm for installing your dependencies by adding this to your ",(0,i.kt)("inlineCode",{parentName:"p"},".sail.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,i.kt)("p",null,"To get the exact Node version and pnpm version you require you can always make\nyour own Docker image and push to ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."),(0,i.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"On GitHub Actions, you can use pnpm for installing and caching your dependencies\nlike so (belongs in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n    - name: pnpm Build\n      run: pnpm install\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," you need to install pnpm with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"root permissions"),", eg:",(0,i.kt)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),". Alternatively, if you specify the Node.js version to use, pnpm may be installed with no priviledged user."))))}u.isMDXComponent=!0}}]);