"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[56722],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},16846:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Contracts Management",sidebar_title:"Contracts",description:"How to manage contracts"},o=void 0,i={unversionedId:"Tooling/flow-js-testing/contracts",id:"Tooling/flow-js-testing/contracts",title:"Contracts Management",description:"How to manage contracts",source:"@site/docs/Tooling/flow-js-testing/contracts.md",sourceDirName:"Tooling/flow-js-testing",slug:"/Tooling/flow-js-testing/contracts",permalink:"/docs/next/Tooling/flow-js-testing/contracts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Contracts Management",sidebar_title:"Contracts",description:"How to manage contracts"},sidebar:"tutorialSidebar",previous:{title:"JS Testing API Reference",permalink:"/docs/next/Tooling/flow-js-testing/api"},next:{title:"Emulator",permalink:"/docs/next/Tooling/flow-js-testing/emulator"}},d={},s=[{value:"<code>deployContractByName(props)</code>",id:"deploycontractbynameprops",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>deployContract(props)</code>",id:"deploycontractprops",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"<code>getContractAddress(name)</code>",id:"getcontractaddressname",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Usage",id:"usage-2",level:4}],p={toc:s},c="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Required:")," Your project must follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/Tooling/flow-js-testing/structure"},"required structure")," and it must be ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/Tooling/flow-js-testing/init"},"initialized")," to use the following functions.")),(0,r.kt)("h2",{id:"deploycontractbynameprops"},(0,r.kt)("inlineCode",{parentName:"h2"},"deployContractByName(props)")),(0,r.kt)("p",null,"Deploys contract code located inside a Cadence file. Returns the transaction result."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"Props object accepts the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"name of the file in ",(0,r.kt)("inlineCode",{parentName:"td"},"contracts")," folder (with ",(0,r.kt)("inlineCode",{parentName:"td"},".cdc")," extension) and name of the contract (please note those should be the same)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) account address, where contract will be deployed. If this is not specified, framework will create new account with randomized alias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressMap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/contracts#addressmap"},"AddressMap")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) object to use for address mapping of existing deployed contracts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[Any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) arguments, which will be passed to contract initializer. (optional) if template does not expect any arguments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"(optional) whether to update deployed contract. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/api#cadencetransformer"},"CadenceTransformer"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of operators to modify the code, before submitting it to network")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the deploying transaction.")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path";\nimport { init, emulator, deployContractByName } from "@onflow/flow-js-testing";\n\nconst main = async () => {\n  const basePath = path.resolve(__dirname, "../cadence");\n\n  await init(basePath);\n  await emulator.start();\n\n  // We will deploy our contract to the address that corresponds to "Alice" alias\n  const to = await getAccountAddress("Alice");\n\n  // We assume there is a file on "../cadence/contracts/Wallet.cdc" path\n  const name = "Wallet";\n\n  // Arguments will be processed and type matched in the same order as they are specified\n  // inside of a contract template\n  const args = [1337, "Hello", { name: "Alice" }];\n\n  const [deploymentResult, err] = await deployContractByName({ to, name });\n  console.log({ deploymentResult }, { err });\n  }\n\n  await emulator.stop();\n};\n\nmain();\n')),(0,r.kt)("p",null,"In a bit more rare case you would want to deploy contract code not from existing template file, but rather\nfrom string representation of it. ",(0,r.kt)("inlineCode",{parentName:"p"},"deployContract")," method will help you achieve this."),(0,r.kt)("h2",{id:"deploycontractprops"},(0,r.kt)("inlineCode",{parentName:"h2"},"deployContract(props)")),(0,r.kt)("p",null,"Deploys contract code specified as string. Returns the transaction result."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("p",null,"Props object accepts the following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"contractCode")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string representation of contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"name of the contract to be deployed. Should be the same as the name of the contract provided in ",(0,r.kt)("inlineCode",{parentName:"td"},"contractCode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"to")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"account address, where contract will be deployed. If this is not specified, framework will create new account with randomized alias.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"addressMap")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/contracts#addressmap"},"AddressMap")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"object to use for import resolver. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[Any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"arguments, which will be passed to contract initializer. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"update")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to update deployed contract. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/api#cadencetransformer"},"CadenceTransformer"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of operators to modify the code, before submitting it to network")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the deploying transaction.")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {\n  init,\n  emulator,\n  getAccountAddress,\n  deployContract,\n  executeScript,\n} from "@onflow/flow-js-testing"\n;(async () => {\n  const basePath = path.resolve(__dirname, "../cadence")\n\n  await init(basePath)\n  await emulator.start()\n\n  // We can specify, which account will hold the contract\n  const to = await getAccountAddress("Alice")\n\n  const name = "Wallet"\n  const code = `\n        pub contract Wallet{\n            pub let balance: UInt\n            init(balance: UInt){\n              self.balance = balance\n            }\n        }\n    `\n  const args = [1337]\n\n  await deployContract({to, name, code, args})\n\n  const [balance, err] = await executeScript({\n    code: `\n      import Wallet from 0x01\n      pub fun main(): UInt{\n        return Wallet.balance\n      }\n    `,\n  })\n  console.log({balance}, {err})\n\n  await emulator.stop()\n})()\n')),(0,r.kt)("p",null,"While framework have automatic import resolver for Contracts you might want to know where it's currently deployed.\nWe provide a method ",(0,r.kt)("inlineCode",{parentName:"p"},"getContractAddress")," for this."),(0,r.kt)("h3",{id:"getcontractaddressname"},(0,r.kt)("inlineCode",{parentName:"h3"},"getContractAddress(name)")),(0,r.kt)("p",null,"Returns address of the account where the contract is currently deployed."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the contract")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x")," prefixed address")))),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {init, emulator, deployContractByName, getContractAddress} from "../src"\n;(async () => {\n  const basePath = path.resolve(__dirname, "./cadence")\n\n  await init(basePath)\n  await emulator.start()\n\n  // if we omit "to" it will be deployed to Service Account\n  // but let\'s pretend we don\'t know where it will be deployed :)\n  await deployContractByName({name: "Hello"})\n\n  const contractAddress = await getContractAddress("Hello")\n  console.log({contractAddress})\n\n  await emulator.stop()\n})()\n')),(0,r.kt)("p",null,"\ud83d\udce3 Framework does not support contracts with identical names deployed to different accounts. While you can deploy contract\nto a new address, the internal system, which tracks where contracts are deployed, will only store last address."))}m.isMDXComponent=!0}}]);