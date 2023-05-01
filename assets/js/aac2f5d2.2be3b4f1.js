"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[72447],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},39107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Non-Fungible Token Contract",sidebar_title:"Non-Fungible Token"},l=void 0,c={unversionedId:"flow/core-contracts/non-fungible-token",id:"version-legacy/flow/core-contracts/non-fungible-token",title:"Non-Fungible Token Contract",description:"The NonFungibleToken contract interface implements the Fungible Token Standard.",source:"@site/versioned_docs/version-legacy/flow/core-contracts/non-fungible-token.mdx",sourceDirName:"flow/core-contracts",slug:"/flow/core-contracts/non-fungible-token",permalink:"/docs/flow/core-contracts/non-fungible-token",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Non-Fungible Token Contract",sidebar_title:"Non-Fungible Token"},sidebar:"tutorialSidebar",previous:{title:"NFT Storefront Smart Contract",permalink:"/docs/flow/core-contracts/nft-storefront"},next:{title:"Service Account Contracts",permalink:"/docs/flow/core-contracts/service-account"}},i={},u=[],p={toc:u},d="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NonFungibleToken")," contract interface implements the Fungible Token Standard.\nAll NFT contracts are encouraged to import and implement this standard."),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-nft/blob/master/contracts/NonFungibleToken.cdc"},"NonFungibleToken.cdc")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Contract Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Emulator/Canary"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0xf8d6e0586b0a20c7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x631e88ae7f1d7c20"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sandboxnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x83ade3a54eb3870c"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0x1d7e57aa55817448"))))))}s.isMDXComponent=!0}}]);