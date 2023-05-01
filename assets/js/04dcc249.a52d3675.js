"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[57309],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=s(n),g=r,m=k["".concat(c,".").concat(g)]||k[g]||p[g]||o;return n?a.createElement(m,l(l({ref:e},d),{},{components:n})):a.createElement(m,l({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[k]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70250:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Flow Staking Collection Contract Reference",sidebar_title:"Staking Collection"},l="Contract",i={unversionedId:"flow/core-contracts/staking-collection",id:"version-legacy/flow/core-contracts/staking-collection",title:"Flow Staking Collection Contract Reference",description:"The FlowStakingCollection contract is a contract that manages a resource containing a user's stake and delegation objects.",source:"@site/versioned_docs/version-legacy/flow/core-contracts/staking-collection.mdx",sourceDirName:"flow/core-contracts",slug:"/flow/core-contracts/staking-collection",permalink:"/docs/flow/core-contracts/staking-collection",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Flow Staking Collection Contract Reference",sidebar_title:"Staking Collection"},sidebar:"tutorialSidebar",previous:{title:"Service Account Contracts",permalink:"/docs/flow/core-contracts/service-account"},next:{title:"Flow Staking Contract Reference",permalink:"/docs/flow/core-contracts/staking-contract-reference"}},c={},s=[{value:"Transactions",id:"transactions",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Setup Transaction",id:"setup-transaction",level:2},{value:"Events",id:"events",level:2}],d={toc:s},k="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract"},"Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowStakingCollection")," contract is a contract that manages a resource containing a user's stake and delegation objects."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"FlowStakingCollection")," allows a user to manage multiple active nodes or delegators\nand interact with node or delegator objects stored in either their optional locked account\nor in the StakingCollection itself (stored in the main account).\nIf a user has locked tokens, StakingCollection allows a user to interact with their locked tokens\nto perform staking actions for any of their nodes or delegators."),(0,r.kt)("p",null,"The staking collection also manages creating a node's machine accounts if they have any collector or consensus nodes.\nIt also allows them to deposit and withdraw tokens from any of their machine accounts through the staking collection."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/staking/staking-collection/"},"Staking Collection Docs")," for more information on the design of the staking collection contract."),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowStakingCollection.cdc"},"FlowStakingCollection.cdc")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Contract Address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x95e019a17d0e23d7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sandboxnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0xf4527793ee68aede"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x8d0e87b65159ae63"))))),(0,r.kt)("h2",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"Use the following transactions to interact with the StakingCollection."),(0,r.kt)("p",null,"_Note: The StakingCollection differentiates between stake and delegation requests through\npassing an optional DelegatorID argument. For example, if you wish to Stake New Tokens for an active node,\npass ",(0,r.kt)("inlineCode",{parentName:"p"},"nil")," as the optional DelegatorID argument to the Stake New Tokens transaction.\nThe same applies for all the other staking operation transactions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.01"))),(0,r.kt)("td",{parentName:"tr",align:null},"Setup Staking Collection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/setup_staking_collection.cdc"},"stakingCollection/setup_staking_collection.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.02"))),(0,r.kt)("td",{parentName:"tr",align:null},"Register Delegator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/register_delegator.cdc"},"stakingCollection/register_delegator.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.03"))),(0,r.kt)("td",{parentName:"tr",align:null},"Register Node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/register_node.cdc"},"stakingCollection/register_node.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.04"))),(0,r.kt)("td",{parentName:"tr",align:null},"Create Machine Account"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/create_machine_account.cdc"},"stakingCollection/create_machine_account.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.05"))),(0,r.kt)("td",{parentName:"tr",align:null},"Request Unstaking"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/request_unstaking.cdc"},"stakingCollection/request_unstaking.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.06"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stake New Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/stake_new_tokens.cdc"},"stakingCollection/stake_new_tokens.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.07"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stake Rewarded Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/stake_rewarded_tokens.cdc"},"stakingCollection/stake_rewarded_tokens.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.08"))),(0,r.kt)("td",{parentName:"tr",align:null},"Stake Unstaked Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/stake_unstaked_tokens.cdc"},"stakingCollection/stake_unstaked_tokens.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.09"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unstake All"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/unstake_all.cdc"},"stakingCollection/unstake_all.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.10"))),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw Rewarded Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/withdraw_rewarded_tokens.cdc"},"stakingCollection/withdraw_rewarded_tokens.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.11"))),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw Unstaked Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/withdraw_unstaked_tokens.cdc"},"stakingCollection/withdraw_unstaked_tokens.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.12"))),(0,r.kt)("td",{parentName:"tr",align:null},"Close Stake"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/close_stake.cdc"},"stakingCollection/close_stake.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.13"))),(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Node"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/transfer_node.cdc"},"stakingCollection/transfer_node.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.14"))),(0,r.kt)("td",{parentName:"tr",align:null},"Transfer Delegator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/transfer_delegator.cdc"},"stakingCollection/transfer_delegator.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.15"))),(0,r.kt)("td",{parentName:"tr",align:null},"Withdraw From Machine Account"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/withdraw_from_machine_account.cdc"},"stakingCollection/withdraw_from_machine_account.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.22"))),(0,r.kt)("td",{parentName:"tr",align:null},"Update Networking Address"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/update_networking_address.cdc"},"stakingCollection/update_networking_address.cdc"))))),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.16"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get All Delegator Info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_all_delegator_info.cdc"},"stakingCollection/scripts/get_all_delegator_info.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.15"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get All Node Info"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_all_node_info.cdc"},"stakingCollection/scripts/get_all_node_info.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.16"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Delegator Ids"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_delegator_ids.cdc"},"stakingCollection/scripts/get_delegator_ids.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.17"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Node Ids"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_node_ids.cdc"},"stakingCollection/scripts/get_node_ids.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.18"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Does Stake Exist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_does_stake_exist.cdc"},"stakingCollection/scripts/get_does_stake_exist.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.19"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Locked Tokens Used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_locked_tokens_used.cdc"},"stakingCollection/scripts/get_locked_tokens_used.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.20"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Unlocked Tokens Used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_unlocked_tokens_used.cdc"},"stakingCollection/scripts/get_unlocked_tokens_used.cdc"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"SCO.21"))),(0,r.kt)("td",{parentName:"tr",align:null},"Get Machine Accounts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/stakingCollection/scripts/get_machine_accounts.cdc"},"stakingCollection/scripts/get_machine_accounts.cdc"))))),(0,r.kt)("h2",{id:"setup-transaction"},"Setup Transaction"),(0,r.kt)("p",null,"To setup the Staking Collection for an account, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"SC.01")," transaction."),(0,r.kt)("p",null,"The setup process finds any node or delegator records already stored in the main account's storage,\nas well as any in the associated locked account if an associated locked account exists.\nIt connects these node and delegator records with the new Staking Collection, allowing them\nto be interacted with using the Staking Collection API."),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StakingCollection")," contract emits an event whenever an important action occurs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"    pub event NodeAddedToStakingCollection(nodeID: String, role: UInt8, amountCommitted: UFix64, address: Address?)\n    pub event DelegatorAddedToStakingCollection(nodeID: String, delegatorID: UInt32, amountCommitted: UFix64, address: Address?)\n\n    pub event NodeRemovedFromStakingCollection(nodeID: String, role: UInt8, address: Address?)\n    pub event DelegatorRemovedFromStakingCollection(nodeID: String, delegatorID: UInt32, address: Address?)\n\n    pub event MachineAccountCreated(nodeID: String, role: UInt8, address: Address)\n")))}p.isMDXComponent=!0}}]);