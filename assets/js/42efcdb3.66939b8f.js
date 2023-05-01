"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[80618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Bootstrap Framework",sidebar_title:"Bootstrap Framework",description:"How to quickly init testing environment"},i=void 0,l={unversionedId:"Tooling/flow-js-testing/generator",id:"Tooling/flow-js-testing/generator",title:"Bootstrap Framework",description:"How to quickly init testing environment",source:"@site/docs/Tooling/flow-js-testing/generator.md",sourceDirName:"Tooling/flow-js-testing",slug:"/Tooling/flow-js-testing/generator",permalink:"/docs/next/Tooling/flow-js-testing/generator",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Bootstrap Framework",sidebar_title:"Bootstrap Framework",description:"How to quickly init testing environment"},sidebar:"tutorialSidebar",previous:{title:"FLOW Token Management",permalink:"/docs/next/Tooling/flow-js-testing/flow-token"},next:{title:"Flow Javascript Testing",permalink:"/docs/next/Tooling/flow-js-testing/"}},s={},p=[{value:"Init Testing Environment",id:"init-testing-environment",level:3},{value:"Generate New Test Suite",id:"generate-new-test-suite",level:3},{value:"Flags",id:"flags",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"init-testing-environment"},"Init Testing Environment"),(0,a.kt)("p",null,"Bootstrap your testing environment with a single command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx flow-js-testing init\n")),(0,a.kt)("p",null,"When you run this command in the terminal it will initiate npm package in your current directory and create ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file.\nThen it will install dependencies. After the installation is finished, the utility will create the required config files for Babel, Jest and Flow CLI."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Warning:")," This command will overwrite ",(0,a.kt)("inlineCode",{parentName:"p"},"babel.config.sj"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jest.config.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," files in the folder, where\nit would be executed and also could affect your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file. That's why we advise you to use new empty folder\nto contain your Cadence related tests.")),(0,a.kt)("h3",{id:"generate-new-test-suite"},"Generate New Test Suite"),(0,a.kt)("p",null,"Create a test suite file for your project with all necessary imports and setup for describe blocks.\nYou can start writing your asserts and expectations right away:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npx flow-js-testing make [name]\n")),(0,a.kt)("h4",{id:"flags"},"Flags"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-c")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--clear")),(0,a.kt)("td",{parentName:"tr",align:null},"Exclude comments from test suit code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-b")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--base-path")),(0,a.kt)("td",{parentName:"tr",align:null},"Specify base path to Cadence folder")))),(0,a.kt)("p",null,"If you do not specify ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," as second argument, the tool will give your file a unique name."))}d.isMDXComponent=!0}}]);