"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9648],{9613:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),l=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(t),h=i,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||r;return t?a.createElement(d,s(s({ref:n},c),{},{components:t})):a.createElement(d,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7270:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>l,toc:()=>c,default:()=>m});var a=t(5900),i=t(4750),r=(t(9496),t(9613)),s=["components"],p={id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},o=void 0,l={unversionedId:"using-changesets",id:"using-changesets",isDocsHomePage:!1,title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b",description:"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u306e\u3001\u6700\u65b0\u306e pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v6.14 \u3067\u3059\u3002 \u6700\u65b0\u306e Changesets  \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v2.16.0 \u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/using-changesets.md",sourceDirName:".",slug:"/using-changesets",permalink:"/ja/next/using-changesets",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"using-changesets",title:"pnpm \u3068 Changesets \u3092\u7d44\u307f\u5408\u308f\u305b\u3066\u4f7f\u7528\u3059\u308b"},sidebar:"docs",previous:{title:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3 Tab \u88dc\u5b8c",permalink:"/ja/next/completion"},next:{title:"\u7d99\u7d9a\u7684\u30a4\u30f3\u30c6\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3",permalink:"/ja/next/continuous-integration"}},c=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:[],level:2},{value:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0",children:[],level:2},{value:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9",children:[],level:2},{value:"Using GitHub Actions",id:"using-github-actions",children:[{value:"Bump up package versions",id:"bump-up-package-versions",children:[],level:3},{value:"Publishing",id:"publishing",children:[],level:3}],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f8\u3044\u3066\u3044\u308b\u6642\u70b9\u3067\u306e\u3001\u6700\u65b0\u306e pnpm \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v6.14 \u3067\u3059\u3002 \u6700\u65b0\u306e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/atlassian/changesets"},"Changesets"),"  \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f v2.16.0 \u3067\u3059\u3002"))),(0,r.kt)("h2",{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"},"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"),(0,r.kt)("p",null,"changesets \u3092 pnpm \u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b\u306b\u306f\u3001changesets \u3092 devDependency \u3068\u3057\u3066\u30ef\u30fc\u30af\u30b9\u30da\u30fc\u30b9\u306e\u30eb\u30fc\u30c8\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),(0,r.kt)("p",null,"changesets \u306e\u521d\u671f\u5316\u30b3\u30de\u30f3\u30c9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm changeset init\n")),(0,r.kt)("h2",{id:"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"},"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u306e\u8ffd\u52a0"),(0,r.kt)("p",null,"\u65b0\u3057\u3044\u30c1\u30a7\u30f3\u30b8\u30bb\u30c3\u30c8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001 ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm changeset")," \u3092\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30eb\u30fc\u30c8\u3067\u5b9f\u884c\u3057\u307e\u3059\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},".changeset")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u751f\u6210\u3055\u308c\u305f\u30de\u30fc\u30af\u30c0\u30a6\u30f3\u30d5\u30a1\u30a4\u30eb\u306f\u30ea\u30dd\u30b8\u30c8\u30ea\u306b\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("h2",{id:"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"},"\u5909\u66f4\u306e\u30ea\u30ea\u30fc\u30b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm changeset version")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u5148\u307b\u3069 ",(0,r.kt)("inlineCode",{parentName:"li"},"pnpm changeset")," \u306b\u3088\u3063\u3066\u6307\u5b9a\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8 (\u3068\u305d\u308c\u3089\u306e\u3059\u3079\u3066\u306e\u4f9d\u5b58) \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u66f4\u65b0\u3092\u9069\u7528\u3057\u3001\u30c1\u30a7\u30f3\u30b8\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm install")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 \u3053\u306e\u30b3\u30de\u30f3\u30c9\u306b\u3088\u308a\u30ed\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u306e\u66f4\u65b0\u3068\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d3\u30eb\u30c9\u3092\u884c\u3044\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5909\u66f4\u3092\u30b3\u30df\u30c3\u30c8\u3057\u307e\u3059\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"pnpm publish -r")," \u3092\u5b9f\u884c\u3057\u307e\u3059\u3002 This command will publish all packages that have bumped versions not yet present in the registry.")),(0,r.kt)("h2",{id:"using-github-actions"},"Using GitHub Actions"),(0,r.kt)("p",null,"To automate the process, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),(0,r.kt)("h3",{id:"bump-up-package-versions"},"Bump up package versions"),(0,r.kt)("p",null,"The action will detect when changeset files arrive in the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, and then open a new PR listing all the packages with bumped versions. Once merged, the packages will be updated and you can decide whether to publish or not by adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish")," property."),(0,r.kt)("h3",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"By adding ",(0,r.kt)("inlineCode",{parentName:"p"},"publish: pnpm ci:publish")," which is a script that executes ",(0,r.kt)("inlineCode",{parentName:"p"},"changeset publish")," will publish to the registry once the PR is opened by ",(0,r.kt)("inlineCode",{parentName:"p"},"changeset version"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Changesets\non:\n  push:\n    branches:\n      - main\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: Setup npmrc\n        run: echo "//registry.npmjs.org/:_authToken=${{ secrets.NPM_TOKEN }}" > .npmrc\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create and publish versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: "chore: update versions"\n          title: "chore: update versions"\n          publish: pnpm ci:publish\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n')),(0,r.kt)("p",null,"More info and documentation regarding this action can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."))}m.isMDXComponent=!0}}]);