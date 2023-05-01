"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74216],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),k=r,f=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return o?n.createElement(f,l(l({ref:t},u),{},{components:o})):n.createElement(f,l({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},47689:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={title:"FLOW for Backers",sidebar_title:"For Backers",description:"How to claim FLOW tokens"},l=void 0,i={unversionedId:"flow/flow-token/backers",id:"version-legacy/flow/flow-token/backers",title:"FLOW for Backers",description:"How to claim FLOW tokens",source:"@site/versioned_docs/version-legacy/flow/flow-token/backers.mdx",sourceDirName:"flow/flow-token",slug:"/flow/flow-token/backers",permalink:"/docs/flow/flow-token/backers",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"FLOW for Backers",sidebar_title:"For Backers",description:"How to claim FLOW tokens"},sidebar:"tutorialSidebar",previous:{title:"Flow Wallets",permalink:"/docs/flow/flow-token/available-wallets"},next:{title:"Key Concepts",permalink:"/docs/flow/flow-token/concepts"}},s={},c=[{value:"Step 1: Choose a Custody Provider",id:"step-1-choose-a-custody-provider",level:2},{value:"Step 2: Create an Account",id:"step-2-create-an-account",level:2},{value:"Step 3: Claim Your Tokens",id:"step-3-claim-your-tokens",level:2},{value:"Support",id:"support",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Please follow the process outlined below if you would like to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Claim tokens purchased in a previous sale"),(0,r.kt)("li",{parentName:"ul"},"Purchase or hold FLOW in the future")),(0,r.kt)("h2",{id:"step-1-choose-a-custody-provider"},"Step 1: Choose a Custody Provider"),(0,r.kt)("p",null,"Choose a custody provider who currently supports Flow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://finoa.io/"},"Finoa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kraken.com/"},"Kraken")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.ledger.com/"},"Ledger"),", or"),(0,r.kt)("li",{parentName:"ul"},"Create your own Flow account by going to ",(0,r.kt)("a",{parentName:"li",href:"https://port.onflow.org/"},"Flow Port")," and selecting the ",(0,r.kt)("em",{parentName:"li"},"Create Account")," transaction option.\nYou will only be able to use this option if you currently hold an account on the network with the ability to pay for the account creation fees.")),(0,r.kt)("h2",{id:"step-2-create-an-account"},"Step 2: Create an Account"),(0,r.kt)("p",null,"Your chosen custody provider will give you an option to create a Flow address.\nAccount addresses for managing funds and signing transactions are created as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custodian (or user) generates a cryptographic key-pair consisting of a public and private key."),(0,r.kt)("li",{parentName:"ol"},"The public key is then inserted into an ",(0,r.kt)("em",{parentName:"li"},"account creation")," Cadence transaction. This transaction\nwill execute code that creates a new account that can only be accessed by the accompanying private key (generated in step 1)."),(0,r.kt)("li",{parentName:"ol"},"This transaction is submitted to a Flow Access API, which broadcasts it to the rest of the network."),(0,r.kt)("li",{parentName:"ol"},"Once the transaction is executed and verified, the Access API notifies the custodian of the ",(0,r.kt)("em",{parentName:"li"},"account creation"),"\nevent, including the newly-generated account address.")),(0,r.kt)("p",null,"Once the account creation transaction has been executed and the result sealed,\nthe user can use their private key to authorize transactions through their account\n(generally this is done through a wallet provider)."),(0,r.kt)("p",null,"The exact steps to complete this may vary between custody providers, but it will always require a thorough KYC process."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You are done this step when you receive your Flow address.")),(0,r.kt)("p",null,"It should look like something like: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x7e60df042a9c0868")),(0,r.kt)("p",null,"You can read more about address generation in the ",(0,r.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys#account-addresses"},"accounts & keys documentation"),"."),(0,r.kt)("h2",{id:"step-3-claim-your-tokens"},"Step 3: Claim Your Tokens"),(0,r.kt)("p",null,"Once your Flow address has been created, please submit it via the ",(0,r.kt)("em",{parentName:"p"},"token claim form")," (coming soon).\nThe form also asks for some additional information so that we can securely verify your\ndetails prior to delivering your tokens. "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note, we will require a phone confirmation in order to initiate the deposit.")),(0,r.kt)("p",null,"You will be able to ",(0,r.kt)("strong",{parentName:"p"},"check your FLOW balance")," at any time on ",(0,r.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port"),"."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"Need a hand? Please don't hesitate to contact our team at ",(0,r.kt)("a",{parentName:"p",href:"mailto:hello@onflow.org"},"hello@onflow.org"),"."))}d.isMDXComponent=!0}}]);