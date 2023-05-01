"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[71082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,k=d["".concat(i,".").concat(p)]||d[p]||h[p]||r;return n?a.createElement(k,c(c({ref:t},u),{},{components:n})):a.createElement(k,c({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW"},c=void 0,s={unversionedId:"Concepts/flow-token/locked-account-setup",id:"Concepts/flow-token/locked-account-setup",title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW",source:"@site/docs/Concepts/flow-token/locked-account-setup.mdx",sourceDirName:"Concepts/flow-token",slug:"/Concepts/flow-token/locked-account-setup",permalink:"/docs/next/Concepts/flow-token/locked-account-setup",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Locked/Leased FLOW Account Setup",description:"Configure an account to hold locked or leased FLOW"},sidebar:"tutorialSidebar",previous:{title:"Token Recipient FAQs",permalink:"/docs/next/Concepts/flow-token/faq"},next:{title:"FLOW for Wallets & Custodians",permalink:"/docs/next/Concepts/flow-token/wallets"}},i={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure a Creator Account",id:"configure-a-creator-account",level:3},{value:"Receive Account Creator Capability",id:"receive-account-creator-capability",level:3},{value:"Account Creation",id:"account-creation",level:2},{value:"1. Create Both Accounts for the User",id:"1-create-both-accounts-for-the-user",level:3},{value:"2. Create the Shared Account for an Existing User Account",id:"2-create-the-shared-account-for-an-existing-user-account",level:3},{value:"3. (Optional) Convert the Shared account to a locked account.",id:"3-optional-convert-the-shared-account-to-a-locked-account",level:3},{value:"Summary",id:"summary",level:2}],u=(d="Callout",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const h={toc:l},p="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u,{type:"warning",mdxType:"Callout"},(0,o.kt)("p",null,"  This guide is for custodians and wallet providers who wish to create user accounts\nthat can hold leased or locked FLOW tokens from the Flow token sale."),(0,o.kt)("p",null,"  If you already have an account and wish to stake tokens,\nplease see our guides on staking ",(0,o.kt)("a",{parentName:"p",href:"/staking/"},"here"),".")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide covers the technical integration required for custodians to create\naccounts that store locked and/or leased FLOW tokens for users."),(0,o.kt)("p",null,"Before discussing the account creation process, some terminology needs to be defined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Flow Token Admin")," - The user who controls the locked and vesting tokens from the\nFlow Token sale. This user maintains a record of users, their account addresses,\nand how many Flow tokens they will receive according to their vesting schedule.\nThis user also is required to co-sign any transactions that transfer locked tokens\nbefore they have been unlocked via the vesting schedule.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"User")," - A user who has bought Flow tokens in the Flow token sale or auction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Custody/Wallet Provider")," - A service that is managing accounts on behalf of users."))),(0,o.kt)("p",null,"Every user who holds locked FLOW tokens gets two accounts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Account 1 - User Account:")," This is the user's normal Flow account.\nThis account is completely controlled by the user. It can have already been created by\nthe custody provider or can be created along with the user's second account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Account 2 - Shared Account:")," This account is shared between the Flow token admin and the user.\nIn the case of a ",(0,o.kt)("strong",{parentName:"p"},"locked token relationship")," with a user who owns the tokens in this account,\nThe user's key will have weight 900 and the token admin's key will have weight 100.\nThe pre-generated token admin's key with weight 100 will be easily accessible for the custody provider\nto fetch and use to create this account.\nAny transactions that directly access this account need to be signed by the user and the token admin.\nThe locked tokens are stored in this account and the token admin has the authority to unlock\ntokens as outlined by the vesting schedule. This account also manages access to the staking\nand delegating functionality that a user signs up for. "))),(0,o.kt)("p",null,"In the case of a ",(0,o.kt)("strong",{parentName:"p"},"leased token relationship")," where the token admin has leased tokens\nto a user for the purposes or node operation, the user does not own the tokens in the shared account.\nThe token admin's key will have weight 1000.\nThe pre-generated token admin's key with weight 1000 will be easily accessible for the custody provider\nto fetch and use to create this account. This account also manages access to the staking\nand delegating functionality that a user signs up for. "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"User Account")," will include an object that manages access to\nthe staking functionality contained in the shared account.\nThe user submits token withdrawal and staking transactions with locked tokens\nwith their normal account, without the need for a signature from the token admin.\nThe user can also withdraw staking rewards from the shared account without the need for a signature\nfrom the token admin."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("h3",{id:"configure-a-creator-account"},"Configure a Creator Account"),(0,o.kt)("p",null,"As the custodian, you must configure a Flow account that you will use to\ncreate user accounts. This is called your ",(0,o.kt)("strong",{parentName:"p"},"creator account"),"."),(0,o.kt)("p",null,"You can convert an existing account into a ",(0,o.kt)("strong",{parentName:"p"},"creator account")," by running\nthe ",(0,o.kt)("strong",{parentName:"p"},"Set Up Creator Account")," (",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/locked-tokens/#custodian"},"C.01"),") transaction."),(0,o.kt)("p",null,"This transaction creates an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountCreator")," object and stores it in the custodian's account.\nIt also publishes a capability that allows the token admin to grant the custodian\nthe authority to register locked token accounts."),(0,o.kt)("h3",{id:"receive-account-creator-capability"},"Receive Account Creator Capability"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note: Once you reach this step, please contact the token admin."))),(0,o.kt)("p",null,"After you have set up your creator account,\nthe token admin needs to submit one more transaction\nto enable your account to register new user accounts to receive locked tokens."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Deposit Account Creator")," (",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/locked-tokens/#token-admin"},"TA.06"),") transaction\nmust be signed and authorized by the token admin account. It requires the\nfollowing arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"custodyProviderAddress")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Address")),(0,o.kt)("td",{parentName:"tr",align:null},"The address of the custodian's account.")))),(0,o.kt)("p",null,"This transaction gives the account registration capability to the custodian's creator account\nthat was configured in the previous transaction."),(0,o.kt)("h2",{id:"account-creation"},"Account Creation"),(0,o.kt)("p",null,"When a custodian uses these transactions, they must also ensure that\nthe token admin knows which account addresses map to which users. This is so\nthe token admin knows how much to pay to each locked account,\nhow many tokens to unlock via the vesting schedule,\nand/or which accounts apply to each node operator."),(0,o.kt)("h3",{id:"1-create-both-accounts-for-the-user"},"1. Create Both Accounts for the User"),(0,o.kt)("p",null,"If your user does not have a regular account created for them yet, you must\ncreate both accounts using the ",(0,o.kt)("strong",{parentName:"p"},"Create Shared Lease Accounts")," (",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/locked-tokens/#custodian"},"C.04"),")\ntransaction with the following arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fullAdminPublicKey")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[UInt8]")),(0,o.kt)("td",{parentName:"tr",align:null},"The public key of the token admin. Must be Weight: 1000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fullUserPublicKey")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[UInt8]")),(0,o.kt)("td",{parentName:"tr",align:null},"The public key of the user. Must be Weight: 1000")))),(0,o.kt)("h3",{id:"2-create-the-shared-account-for-an-existing-user-account"},"2. Create the Shared Account for an Existing User Account"),(0,o.kt)("p",null,"If your user already has a personal account allocated to them, you can run a transaction\nthat creates the shared account and gives their existing account the capability\nto interact with their locked tokens."),(0,o.kt)(u,{type:"warning",mdxType:"Callout"},(0,o.kt)("p",null,"  This transaction ",(0,o.kt)("strong",{parentName:"p"},"MUST")," also be signed and authorized by the existing user account.\nIt needs this because it needs to have access to the user's private storage and Authorized access.")),(0,o.kt)("p",null,"To attach a shared account to an existing user account,\nrun the ",(0,o.kt)("strong",{parentName:"p"},"Create Only Shared Account")," (",(0,o.kt)("a",{parentName:"p",href:"/core-contracts/locked-tokens/#custodian"},"C.03"),")\ntransaction with the following arguments:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"fullAdminPublicKey")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[UInt8]")),(0,o.kt)("td",{parentName:"tr",align:null},"The public key of the token admin. Must be Weight: 1000")))),(0,o.kt)("h3",{id:"3-optional-convert-the-shared-account-to-a-locked-account"},"3. (Optional) Convert the Shared account to a locked account."),(0,o.kt)("p",null,"If the account is intended to be a leased tokens account, then there is no more action to take.\nThe token admin by default should have control of the shared account, and the user has access\nto staking capabilities on the shared account, but not the tokens themselves."),(0,o.kt)("p",null,"If you would like to convert the shared account to a locked token account instead of a leased account,\nyou must contact the token admin, who will submit a transaction that sets the keys on the shared account\nto the locked account set up, which consists of the admin key with weight 100 and the user key with weight 900."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The account creation transactions generally perform these actions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create the shared account and add the public keys to the account."),(0,o.kt)("li",{parentName:"ol"},"Create and store the Locked Token Manager object in the shared account."),(0,o.kt)("li",{parentName:"ol"},"Create the Token Holder object and store it in the user account. This object\nis what the user interacts with to withdraw unlocked tokens and perform staking actions."),(0,o.kt)("li",{parentName:"ol"},"Register the new accounts with the token admin account so that\nit can receive locked tokens from the vesting schedule."),(0,o.kt)("li",{parentName:"ol"},"Override the default Flow Token receiver to mark received tokens as unlocked."),(0,o.kt)("li",{parentName:"ol"},"Create a different Flow Token receiver that the token admin account uses to deposit locked tokens.")))}k.isMDXComponent=!0}}]);