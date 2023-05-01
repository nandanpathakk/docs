"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[99841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Mainnet Account Setup Guidelines",sidebar_title:"4. Mainnet Account Setup"},c=void 0,i={unversionedId:"Tutorials/mainnet-account-setup",id:"Tutorials/mainnet-account-setup",title:"Mainnet Account Setup Guidelines",description:"In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account.",source:"@site/docs/Tutorials/mainnet-account-setup.md",sourceDirName:"Tutorials",slug:"/Tutorials/mainnet-account-setup",permalink:"/docs/next/Tutorials/mainnet-account-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Mainnet Account Setup Guidelines",sidebar_title:"4. Mainnet Account Setup"},sidebar:"tutorialSidebar",previous:{title:"How to Launch a Fungible Token on Flow",permalink:"/docs/next/Tutorials/fungible-tokens"},next:{title:"Mainnet Deployment Guidelines",permalink:"/docs/next/Tutorials/mainnet-deployment"}},u={},s=[{value:"Create an account",id:"create-an-account",level:2}],l={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to deploy your smart contracts to the mainnet, you need to register, fund, and setup a new account."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": This account will be used for production purposes. Make sure you handle keys appropriately. Using a Key Management Service is the best practice. By default, this command generates an ECDSA key pair on the P-256 curve. Keep in mind the CLI is intended for development purposes only and is not recommended for production use. Handling keys using a Key Management Service is the best practice.")),(0,a.kt)("h2",{id:"create-an-account"},"Create an account"),(0,a.kt)("p",null,"You can easily create a new funded account on mainnet using the Flow CLI. You only need to run a single command ",(0,a.kt)("inlineCode",{parentName:"p"},"flow accounts create")," and select a name for the account and the network, which in this case is ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet"),". After that the account private key is saved into a seperate file called ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}.pkey"),". We advice switching to KMS system for production use which you ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/configuration#advanced-format-1"},"can read more about here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"flow accounts create\n\nEnter an account name: mike\n\u2714 Testnet\n\n\ud83c\udf89 New account created with address 0x77e6ae4c8c2f1dd6 and name mike on Testnet network.\n\nHere\u2019s a summary of all the actions that were taken:\n - Added the new account to flow.json.\n - Saved the private key to mike.pkey.\n - Added mike.pkey to .gitignore.\n")),(0,a.kt)("p",null,"Read more about the command in the ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/create-accounts#interactive-mode"},"CLI account creation documentation"),"."))}d.isMDXComponent=!0}}]);