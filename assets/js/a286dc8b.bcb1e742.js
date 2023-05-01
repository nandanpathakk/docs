"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o="Struct Traits",l={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews_Traits",id:"version-legacy/flow/flow-nft/MetdataViews/MetadataViews_Traits",title:"Struct Traits",description:"Wrapper view to return all the traits on an NFT.",source:"@site/versioned_docs/version-legacy/flow/flow-nft/MetdataViews/MetadataViews_Traits.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews_Traits",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Traits",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct Trait",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Trait"},next:{title:"Contract Interface NonFungibleToken",permalink:"/docs/flow/flow-nft/NonFungibleToken/"}},s={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>addTrait()</code>",id:"addtrait",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"struct-traits"},"Struct ",(0,n.kt)("inlineCode",{parentName:"h1"},"Traits")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Traits {\n\n    pub let traits: [Trait]\n}\n")),(0,n.kt)("p",null,"Wrapper view to return all the traits on an NFT.\nThis is used to return traits as individual key/value pairs along with\nsome contextualized data about each trait."),(0,n.kt)("h3",{id:"initializer"},"Initializer"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"init(_: [Trait])\n")),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"addtrait"},(0,n.kt)("inlineCode",{parentName:"h3"},"addTrait()")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cadence"},"fun addTrait(_: Trait)\n")),(0,n.kt)("p",null,"Adds a single Trait to the Traits view"),(0,n.kt)("p",null,"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trait : ",(0,n.kt)("em",{parentName:"li"},"The trait struct to be added"))),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);