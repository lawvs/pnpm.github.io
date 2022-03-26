"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[649],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,v=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(v,p(p({ref:n},m),{},{components:t})):a.createElement(v,p({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(2182),r=t(9028),o=(t(9496),t(9613)),p=["components"],i={id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},l=void 0,s={unversionedId:"continuous-integration",id:"version-5.x/continuous-integration",title:"\u6301\u7eed\u96c6\u6210",description:"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/zh/5.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"5.x",frontMatter:{id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210"},sidebar:"version-5.x/docs",previous:{title:"\u5728 pnpm \u4e2d\u4f7f\u7528 Changesets",permalink:"/zh/5.x/using-changesets"},next:{title:"\u53ea\u5141\u8bb8 pnpm",permalink:"/zh/5.x/only-allow-pnpm"}},m={},c=[{value:"Travis",id:"travis",level:2},{value:"Semaphore",id:"semaphore",level:2},{value:"AppVeyor",id:"appveyor",level:2},{value:"Sail CI",id:"sail-ci",level:2},{value:"GitHub Actions",id:"github-actions",level:2}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002"),(0,o.kt)("h2",{id:"travis"},"Travis"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://travis-ci.org"},"Travis CI"),"\uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".travis.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".travis.yml"',title:'".travis.yml"'},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,o.kt)("h2",{id:"semaphore"},"Semaphore"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semapore"),"\u4e0a \uff0c\u8bf7\u5c06\u6b64\u5185\u5bb9\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," \u6587\u4ef6\u4e2d\uff0c\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".semaphore/semaphore.yml"',title:'".semaphore/semaphore.yml"'},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n            - checkout\n            - cache restore node-$(checksum pnpm-lock.yaml)\n            - pnpm install\n            - cache store node-$(checksum pnpm-lock.yaml) ~/.pnpm-store\n")),(0,o.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://www.appveyor.com"},"AppVeyor")," \uff0c\u8bf7\u5c06\u6b64\u6dfb\u52a0\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),"\u6765\u4f7f\u7528 pnpm \u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u9879\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="appveyor.yml"',title:'"appveyor.yml"'},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n  - pnpm install\n")),(0,o.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,o.kt)("p",null,"\u5728 ","[Sail CI]","\u4e0a\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 pnpm \u901a\u8fc7\u5c06\u6b64\u6dfb\u52a0\u5230\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".sail.yml")," \u6587\u4ef6\u6765\u5b89\u88c5\u60a8\u7684\u4f9d\u8d56\u5173\u7cfb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".sail.yml"',title:'".sail.yml"'},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,o.kt)("p",null,"\u8981\u83b7\u5f97\u4f60\u9700\u8981\u7684\u51c6\u786e\u7684 Node \u7248\u672c\u548c pnpm \u7248\u672c\uff0c\u60a8\u603b\u662f\u53ef\u4ee5\u4f7f \u81ea\u5df1\u7684Docker\u56fe\u50cf\uff0c\u5e76\u63a8\u52a8\u81f3 ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"\u3002"),(0,o.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,o.kt)("p",null,"\u5728 GitHub Actions \u4e0a\uff0c\u60a8\u53ef\u4ee5\u50cf\u8fd9\u6837\u4f7f\u7528 pnpm \u5b89\u88c5\u548c\u7f13\u5b58\u60a8\u7684\u4f9d\u8d56\u9879 ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/NAME.yml"),"\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=".github/workflows/NAME.yml"',title:'".github/workflows/NAME.yml"'},"name: pnpm Example Workflow\non:\n  push:\njobs:\n  build:\n    runs-on: ubuntu-20.04\n    strategy:\n      matrix:\n        node-version: [15]\n    steps:\n    - uses: actions/checkout@v2\n    - name: Use Node.js ${{ matrix.node-version }}\n      uses: actions/setup-node@v2\n      with:\n        node-version: ${{ matrix.node-version }}\n    - name: Cache .pnpm-store\n      uses: actions/cache@v1\n      with:\n        path: ~/.pnpm-store\n        key: ${{ runner.os }}-node${{ matrix.node-version }}-${{ hashFiles('**/pnpm-lock.yaml') }}\n    - name: Install pnpm\n      run: curl -f https://get.pnpm.io/v5.js | node - add --global pnpm@5\n    - name: pnpm Build\n      run: pnpm install\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"actions/setup-node@v2")," \u60a8\u9700\u8981\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/setup-node/issues/177"},"root \u6743\u9650")," \u6765\u5b89\u88c5 pnpm \uff0c\u4f8b\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"sudo npm install -g pnpm"),"\u3002 \u6216\u8005\uff0c\u5982\u679c\u60a8\u6307\u5b9a\u8981\u4f7f\u7528\u7684 Node.js \u7248\u672c\uff0c\u5219\u53ef\u80fd\u4f1a\u5728\u6ca1\u6709\u7279\u6743\u7528\u6237\u7684\u60c5\u51b5\u4e0b\u5b89\u88c5 pnpm\u3002"))))}d.isMDXComponent=!0}}]);