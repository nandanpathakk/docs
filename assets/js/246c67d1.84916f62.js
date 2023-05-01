"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),y=a,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},23378:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,i={unversionedId:"cadence/why",id:"version-legacy/cadence/why",title:"why",description:"Why should you use Cadence for building smart contracts ?",source:"@site/versioned_docs/version-legacy/cadence/why.md",sourceDirName:"cadence",slug:"/cadence/why",permalink:"/docs/cadence/why",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"10. Composable Resources",permalink:"/docs/cadence/tutorial/resources-compose"},next:{title:"Introduction to Flow",permalink:"/docs/flow/"}},c={},l=[{value:"Why should you use Cadence for building smart contracts ?",id:"why-should-you-use-cadence-for-building-smart-contracts-",level:2},{value:"1) <strong>Security and Safety</strong>",id:"1-security-and-safety",level:3},{value:"2) Composability",id:"2-composability",level:3},{value:"3) <strong>Simplicity</strong>",id:"3-simplicity",level:3}],u={toc:l},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"why-should-you-use-cadence-for-building-smart-contracts-"},"Why should you use Cadence for building smart contracts ?"),(0,a.kt)("h3",{id:"1-security-and-safety"},"1) ",(0,a.kt)("strong",{parentName:"h3"},"Security and Safety")),(0,a.kt)("p",null,"Cadence provides security and safety guarantees that greatly simplify the development of secure smart contracts. As smart contracts often deal with valuable assets, Cadence provides the resource-oriented programming paradigm, which guarantees that assets can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted.\nCadence includes several language features which prevent entire classes of bugs.\nThese security and safety features allow smart contract developers to focus on the business logic of their contract instead of preventing accidents and attacks."),(0,a.kt)("h3",{id:"2-composability"},"2) Composability"),(0,a.kt)("p",null,"Cadence enables composability. Resources (which are arbitrary user-defined data types) are stored directly in users\u2019 accounts, and can flow freely between contracts: They can be passed as arguments to functions, returned from functions, or even combined in arbitrary data structures. This makes implementing business logic easier, more natural and promotes reuse of existing logic."),(0,a.kt)("h3",{id:"3-simplicity"},"3) ",(0,a.kt)("strong",{parentName:"h3"},"Simplicity")),(0,a.kt)("p",null,"Cadence\u2019s syntax is inspired by popular modern general-purpose programming languages like ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://developer.apple.com/swift/"},"Swift")),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://kotlinlang.org/"},"Kotlin")),", and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.rust-lang.org/"},"Rust"),",")," so developers will find the syntax and the semantics familiar.\nPractical tooling, documentation, and examples enable developers to start creating programs quickly and effectively. Hundreds of developers were able to learn Cadence quickly and develop production-quality smart contracts with it shortly."))}p.isMDXComponent=!0}}]);