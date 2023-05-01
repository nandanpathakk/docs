"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[55517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},45673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},l="Contract Interface FungibleToken",i={unversionedId:"flow/flow-ft/FungibleToken/FungibleToken",id:"version-legacy/flow/flow-ft/FungibleToken/FungibleToken",title:"Contract Interface FungibleToken",description:"The interface that Fungible Token contracts implement.",source:"@site/versioned_docs/version-legacy/flow/flow-ft/FungibleToken/FungibleToken.md",sourceDirName:"flow/flow-ft/FungibleToken",slug:"/flow/flow-ft/FungibleToken/",permalink:"/docs/flow/flow-ft/FungibleToken/",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Vault",permalink:"/docs/flow/flow-ft/ExampleToken/ExampleToken_Vault"},next:{title:"Resource Interface Balance",permalink:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Balance"}},c={},u=[{value:"Interfaces",id:"interfaces",level:2},{value:"resource interface <code>Provider</code>",id:"resource-interface-provider",level:3},{value:"resource interface <code>Receiver</code>",id:"resource-interface-receiver",level:3},{value:"resource interface <code>Balance</code>",id:"resource-interface-balance",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"resource <code>Vault</code>",id:"resource-vault",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>createEmptyVault()</code>",id:"fun-createemptyvault",level:3},{value:"Events",id:"events",level:2},{value:"event <code>TokensInitialized</code>",id:"event-tokensinitialized",level:3},{value:"event <code>TokensWithdrawn</code>",id:"event-tokenswithdrawn",level:3},{value:"event <code>TokensDeposited</code>",id:"event-tokensdeposited",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-interface-fungibletoken"},"Contract Interface ",(0,a.kt)("inlineCode",{parentName:"h1"},"FungibleToken")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"contract interface FungibleToken {\n\n    totalSupply:  UFix64\n}\n")),(0,a.kt)("p",null,"The interface that Fungible Token contracts implement."),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("h3",{id:"resource-interface-provider"},"resource interface ",(0,a.kt)("inlineCode",{parentName:"h3"},"Provider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface Provider {\n}\n")),(0,a.kt)("p",null,"The interface that enforces the requirements for withdrawing\ntokens from the implementing type."),(0,a.kt)("p",null,"It does not enforce requirements on ",(0,a.kt)("inlineCode",{parentName:"p"},"balance")," here,\nbecause it leaves open the possibility of creating custom providers\nthat do not necessarily need their own balance."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Provider"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resource-interface-receiver"},"resource interface ",(0,a.kt)("inlineCode",{parentName:"h3"},"Receiver")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface Receiver {\n}\n")),(0,a.kt)("p",null,"The interface that enforces the requirements for depositing\ntokens into the implementing type."),(0,a.kt)("p",null,"We do not include a condition that checks the balance because\nwe want to give users the ability to make custom receivers that\ncan do custom things with the tokens, like split them up and\nsend them to different places."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Receiver"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resource-interface-balance"},"resource interface ",(0,a.kt)("inlineCode",{parentName:"h3"},"Balance")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface Balance {\n\n    balance:  UFix64\n}\n")),(0,a.kt)("p",null,"The interface that contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"balance")," field of the Vault\nand enforces that when new Vaults are created, the balance\nis initialized correctly."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Balance"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,a.kt)("h3",{id:"resource-vault"},"resource ",(0,a.kt)("inlineCode",{parentName:"h3"},"Vault")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Vault {\n\n    balance:  UFix64\n}\n")),(0,a.kt)("p",null,"The resource that contains the functions to send and receive tokens.\nThe declaration of a concrete type in a contract interface means that\nevery Fungible Token contract that implements the FungibleToken interface\nmust define a concrete ",(0,a.kt)("inlineCode",{parentName:"p"},"Vault")," resource that conforms to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Receiver"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance")," interfaces, and declares their required fields and functions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/flow/flow-ft/FungibleToken/FungibleToken_Vault"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-createemptyvault"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"createEmptyVault()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func createEmptyVault(): Vault\n")),(0,a.kt)("p",null,"Allows any user to create a new Vault that has a zero balance"),(0,a.kt)("p",null,"Returns: The new Vault resource"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"event-tokensinitialized"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"TokensInitialized")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event TokensInitialized(initialSupply UFix64)\n")),(0,a.kt)("p",null,"The event that is emitted when the contract is created"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"event-tokenswithdrawn"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"TokensWithdrawn")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event TokensWithdrawn(amount UFix64, from Address?)\n")),(0,a.kt)("p",null,"The event that is emitted when tokens are withdrawn from a Vault"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"event-tokensdeposited"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"TokensDeposited")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event TokensDeposited(amount UFix64, to Address?)\n")),(0,a.kt)("p",null,"The event that is emitted when tokens are deposited into a Vault"),(0,a.kt)("hr",null))}p.isMDXComponent=!0}}]);