"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[64959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,h=d["".concat(i,".").concat(f)]||d[f]||c[f]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"FUSD Stablecoin on Flow",sidebar_title:"Introduction",description:"FUSD is a 1:1 USD-backed stablecoin on Flow"},l=void 0,s={unversionedId:"flow/fusd/index",id:"version-legacy/flow/fusd/index",title:"FUSD Stablecoin on Flow",description:"FUSD is a 1:1 USD-backed stablecoin on Flow",source:"@site/versioned_docs/version-legacy/flow/fusd/index.md",sourceDirName:"flow/fusd",slug:"/flow/fusd/",permalink:"/docs/flow/fusd/",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"FUSD Stablecoin on Flow",sidebar_title:"Introduction",description:"FUSD is a 1:1 USD-backed stablecoin on Flow"},sidebar:"tutorialSidebar",previous:{title:"How to Launch a Fungible Token on Flow",permalink:"/docs/flow/fungible-tokens"},next:{title:"FUSD Providers",permalink:"/docs/flow/fusd/providers"}},i={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Building with FUSD",id:"building-with-fusd",level:2},{value:"FUSD on Flow Testnet",id:"fusd-on-flow-testnet",level:3},{value:"FUSD on Flow Mainnet",id:"fusd-on-flow-mainnet",level:3},{value:"FAQs",id:"faqs",level:2},{value:"Who is the issuer of FUSD?",id:"who-is-the-issuer-of-fusd",level:3},{value:"How do I get an FUSD-enabled wallet?",id:"how-do-i-get-an-fusd-enabled-wallet",level:3},{value:"For Developers",id:"for-developers",level:4},{value:"Where can my users purchase FUSD?",id:"where-can-my-users-purchase-fusd",level:3},{value:"How do I sell FUSD for fiat?",id:"how-do-i-sell-fusd-for-fiat",level:3},{value:"Does the Flow Ledger app support FUSD?",id:"does-the-flow-ledger-app-support-fusd",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flow USD (FUSD) is a stablecoin\nissued by ",(0,r.kt)("a",{parentName:"p",href:"https://www.primetrust.com/"},"Prime Trust"),"\nthat is backed 1:1 by the US Dollar."),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"FUSD is a USD-backed stablecoin issued as a fungible\ntoken on the Flow network. Its primary purpose is to provide\na more consistently-priced payment experience for dapp developers\nand their users."),(0,r.kt)("p",null,"As a valid payment token, FUSD also acts as an alternative for users who may not be holding the native FLOW token."),(0,r.kt)("h2",{id:"building-with-fusd"},"Building with FUSD"),(0,r.kt)("p",null,"As a dapp developer, you can build your application to support\nFUSD as a user payment method."),(0,r.kt)("h3",{id:"fusd-on-flow-testnet"},"FUSD on Flow Testnet"),(0,r.kt)("p",null,"A mock version of FUSD is live on Flow Testnet for development purposes."),(0,r.kt)("p",null,"Testnet FUSD is not backed by any real USD and is available\nonly for testing purposes."),(0,r.kt)("p",null,"To add FUSD to your app on Testnet, use the ",(0,r.kt)("a",{parentName:"p",href:"/fusd/transactions"},"standard transactions and scripts")," with the\nTestnet contract addresses."),(0,r.kt)("h3",{id:"fusd-on-flow-mainnet"},"FUSD on Flow Mainnet"),(0,r.kt)("p",null,"FUSD is made available on Mainnet through ",(0,r.kt)("a",{parentName:"p",href:"/fusd/providers/#mainnet"},"several providers"),"."),(0,r.kt)("p",null,"To add FUSD to your app on Mainnet, use the ",(0,r.kt)("a",{parentName:"p",href:"/fusd/transactions"},"standard transactions and scripts")," with the\nMainnet contract addresses."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"who-is-the-issuer-of-fusd"},"Who is the issuer of FUSD?"),(0,r.kt)("p",null,"FUSD is issued by ",(0,r.kt)("a",{parentName:"p",href:"https://www.primetrust.com/"},"Prime Trust"),",\na Nevada-based trust company with address 330 South Rampart Blvd. Suite 260\nSummerlin, NV 89145."),(0,r.kt)("h3",{id:"how-do-i-get-an-fusd-enabled-wallet"},"How do I get an FUSD-enabled wallet?"),(0,r.kt)("p",null,"In order to hold FUSD tokens,\nyou will need a Flow account (wallet) that is configured to receive FUSD. "),(0,r.kt)("p",null,"All FCL compatible wallets can be easily configured to also receive FUSD."),(0,r.kt)("p",null,"FCL compatible wallets currently supporting FUSD include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blocto.portto.io/"},"Blocto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nu.fi/"},"NuFi"))),(0,r.kt)("p",null,"You can configure your Blocto wallet to hold FUSD in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"On mobile:"),' In the Blocto mobile app, add "Flow USD" as a token asset in the "Wallet" tab.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"In browser:")," Log in to ",(0,r.kt)("a",{parentName:"li",href:"https://port.onflow.org/"},"Flow Port"),' using your Blocto account\nand select "Configure" in the "FUSD Balance" panel.')),(0,r.kt)("h4",{id:"for-developers"},"For Developers"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/fusd/transactions/#setup-fusd-vault--receiver"},"FUSD setup transaction"),"\nto manually configure a Flow account to hold FUSD."),(0,r.kt)("h3",{id:"where-can-my-users-purchase-fusd"},"Where can my users purchase FUSD?"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/fusd/providers/"},"providers")," page for available FUSD providers."),(0,r.kt)("h3",{id:"how-do-i-sell-fusd-for-fiat"},"How do I sell FUSD for fiat?"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/fusd/providers/"},"providers")," page for available FUSD providers."),(0,r.kt)("h3",{id:"does-the-flow-ledger-app-support-fusd"},"Does the Flow Ledger app support FUSD?"),(0,r.kt)("p",null,"No, the Flow Ledger application does not yet support FUSD, but support is planned."))}c.isMDXComponent=!0}}]);