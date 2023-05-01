"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[28716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68705:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s="Account Abstraction on Flow",c={unversionedId:"hybrid-custody/guides/account-abstraction",id:"version-legacy/hybrid-custody/guides/account-abstraction",title:"Account Abstraction on Flow",description:"Flow provides native support for key use cases that are enabled by Account Abstraction, empowering developers to deliver mainstream-ready user experiences.  With Cadence, Flow was designed with these use cases in mind through the separation of the contract and transaction layers.  This guide demonstrates how Flow supports key use cases that are made possible with Account Abstraction.",source:"@site/versioned_docs/version-legacy/hybrid-custody/guides/account-abstraction.md",sourceDirName:"hybrid-custody/guides",slug:"/hybrid-custody/guides/account-abstraction",permalink:"/docs/hybrid-custody/guides/account-abstraction",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get Started with Account Linking",permalink:"/docs/hybrid-custody/get-started"},next:{title:"Account Model & Implementation",permalink:"/docs/hybrid-custody/guides/account-model"}},i={},l=[{value:"Multi-sig Transactions",id:"multi-sig-transactions",level:2},{value:"Sponsored Transactions",id:"sponsored-transactions",level:2},{value:"Bundled Transactions",id:"bundled-transactions",level:2},{value:"Account Recovery",id:"account-recovery",level:2},{value:"Multi-factor Authentication",id:"multi-factor-authentication",level:2},{value:"Seamless Experience",id:"seamless-experience",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-abstraction-on-flow"},"Account Abstraction on Flow"),(0,r.kt)("p",null,"Flow provides native support for key use cases that are enabled by Account Abstraction, empowering developers to deliver mainstream-ready user experiences.  With Cadence, Flow was designed with these use cases in mind through the separation of the contract and transaction layers.  This guide demonstrates how Flow supports key use cases that are made possible with Account Abstraction."),(0,r.kt)("h2",{id:"multi-sig-transactions"},"Multi-sig Transactions"),(0,r.kt)("p",null,"Since accounts are smart contracts, they can be defined in order to require multiple signatures in order to execute a transaction, which unlocks a range of new users that improve the user experience for Web3 apps."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The move from from Externally-Owned Accounts (EOAs) to smart contract accounts enables developers to build in logic to require multiple signatures to execute transactions."),(0,r.kt)("td",{parentName:"tr",align:null},"Flow has native support for multi-sig transactions since all accounts are defined as smart contracts. Flow provides ",(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/learn/concepts/accounts-and-keys#keys"},"support for multiple keys")," to be added to an account and weights can be applied to denote relative priority.")))),(0,r.kt)("h2",{id:"sponsored-transactions"},"Sponsored Transactions"),(0,r.kt)("p",null,"The concept of paying fees to execute transactions in order to use Web3 apps can be a hurdle for newcomers as they begin to explore these experiences.  In order to remove this significant point of friction in requiring newcomers to acquire crypto before they can get started with an app, developers can subsidize these costs on behalf of users."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The ERC-4337 standard introduces the concept of ",(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-4337#extension-paymasters"},"paymasters"),", which can enable a developer to pay the fees for a transaction for their users."),(0,r.kt)("td",{parentName:"tr",align:null},"Flow has built-in support for ",(0,r.kt)("a",{parentName:"td",href:"https://developers.flow.com/learn/concepts/accounts-and-keys#signer-roles"},"3 different roles")," for transactions which provides native support for sponsored transactions.")))),(0,r.kt)("h2",{id:"bundled-transactions"},"Bundled Transactions"),(0,r.kt)("p",null,"Developers can deliver a more streamlined user experience that reduces the amount of interruptions in the form of transaction approvals by bundling multiple transactions together into a single transaction that executes the set of operations with one signature."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"The ERC-4337 standard outlines support for bundled transactions through a new mempool that holds user operations from smart wallets. Bundlers package sets of these user operations into a single transaction on the blockchain and return the result back to each wallet."),(0,r.kt)("td",{parentName:"tr",align:null},"Since Cadence has an explicit separation of contracts and transactions, Flow has protocol-level support for bundling transactions across multiple contracts into a single transaction.")))),(0,r.kt)("h2",{id:"account-recovery"},"Account Recovery"),(0,r.kt)("p",null,"Account Abstraction enables developers to build more robust account management features for users, addressing the major pain point of losing access to assets forever if the user loses their keys to their account.  Apps can enable users to recover access to their accounts and enclosed assets through social recovery or pre-approved accounts."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart contract accounts can be defined to include account recovery logic that enables users to define custom recovery methods that can rely on specific accounts or other validated sources."),(0,r.kt)("td",{parentName:"tr",align:null},"Since all accounts are smart contracts, Flow has native support for account recovery and cycling of keys to help users regain access to accounts in a secure manner.")))),(0,r.kt)("h2",{id:"multi-factor-authentication"},"Multi-factor Authentication"),(0,r.kt)("p",null,"Multi-factor authentication is a broadly accepted concept in Web2 apps for secure access to accounts and Account Abstraction enables developers to deliver the same benefits to Web3 users."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Smart contract accounts can require a secondary factor to confirm transactions which can be delivered in the form of familiar confirmation channels such as email or SMS."),(0,r.kt)("td",{parentName:"tr",align:null},"Since all accounts are smart contracts, Flow has native support for multi-factor authentication as developers can implement these security mechanisms for their users.")))),(0,r.kt)("h2",{id:"seamless-experience"},"Seamless Experience"),(0,r.kt)("p",null,"Account Abstraction brings the potential for dramatic improvements to the user experience of Web3 apps.  Developers can introduce conditions under which a user can grant a smart contract account to pre-approve transactions under certain conditions, reducing interruptions for the user to explicitly sign each transaction."),(0,r.kt)("p",null,"These improvements are especially notable on mobile, where users are typically met with the jarring experience of switching between apps in approve transactions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account Abstraction"),(0,r.kt)("th",{parentName:"tr",align:null},"Flow"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Developers can build new features that streamline the user experience of Web3 apps, such as \u2018session keys\u2019 that pre-approve transactions for a period of time or setting custom limits on transaction volume or network fees."),(0,r.kt)("td",{parentName:"tr",align:null},"Since all accounts are smart contracts, Flow has support for these new controls that enable apps to sign pre-approved transactions based on user controls and preferences.")))))}d.isMDXComponent=!0}}]);