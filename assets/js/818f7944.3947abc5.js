"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},69837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={},l="NPM Module",i={unversionedId:"Tooling/nft-catalog/npm",id:"Tooling/nft-catalog/npm",title:"NPM Module",description:"We exposed an interface to the catalog via a consumable NPM module. This library will expose a number of methods that can be called to interact with the catalog.",source:"@site/docs/Tooling/nft-catalog/npm.mdx",sourceDirName:"Tooling/nft-catalog",slug:"/Tooling/nft-catalog/npm",permalink:"/docs/next/Tooling/nft-catalog/npm",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composability Chronicles #1: How to build your Flow NFT for composability",permalink:"/docs/next/Tooling/nft-catalog/composability-nft-guide"},next:{title:"NFT Catalog",permalink:"/docs/next/Tooling/nft-catalog/overview"}},c={},s=[{value:"Methods",id:"methods",level:2},{value:"Scripts",id:"scripts",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npm-module"},"NPM Module"),(0,a.kt)("p",null,"We exposed an interface to the catalog via a consumable NPM module. This library will expose a number of methods that can be called to interact with the catalog."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("p",null,"Method signatures and their associating parameters/responses can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cadence/")," folder of this repo."),(0,a.kt)("h3",{id:"scripts"},"Scripts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"checkForRecommendedV1Views\ngenTx\ngetAllNftsInAccount\ngetExamplenftCollectionLength\ngetExamplenftType\ngetNftCatalog\ngetNftCatalogProposals\ngetNftCollectionsForNftType\ngetNftIdsInAccount\ngetNftInAccount\ngetNftInAccountFromPath\ngetNftMetadataForCollectionIdentifier\ngetNftProposalForId\ngetNftsCountInAccount\ngetNftsInAccount\ngetNftsInAccountFromIds\ngetNftsInAccountFromPath\ngetSupportedGeneratedTransactions\nhasAdminProxy\nisCatalogAdmin\n")),(0,a.kt)("h3",{id:"transactions"},"Transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"addToNftCatalog\naddToNftCatalogAdmin\napproveNftCatalogProposal\nmintExampleNft\nmintNonstandardNft\nproposeNftToCatalog\nrejectNftCatalogProposal\nremoveFromNftCatalog\nremoveNftCatalogProposal\nsendAdminCapabilityToProxy\nsetupExamplenftCollection\nsetupNftCatalogAdminProxy\nsetupNonstandardnftCollection\nsetupStorefront\ntransferExamplenft\nupdateNftCatalogEntry\nwithdrawNftProposalFromCatalog\n")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install flow-catalog\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add flow-catalog\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Methods can be imported as follows, all nested methods live under the ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transactions")," variable."),(0,a.kt)("p",null,"NOTE: In order to properly bootstrap the method, you will need to run and ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAddressMaps()")," method, passing it into all of the methods as shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { getAddressMaps, scripts } from "flow-catalog";\n\nconst main = async () => {\n    const addressMap = await getAddressMaps();\n    console.log(await scripts.getNftCatalog(addressMap));\n};\n\nmain();\n')),(0,a.kt)("p",null,"The response of any method is a tuple-array, with the first element being the result, and the second being the error (if applicable)."),(0,a.kt)("p",null,"For example, the result of the method above would look like -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[\n  {\n    BILPlayerCollection: {\n      contractName: 'Player',\n      contractAddress: '0x9e6cdb88e34fa1f3',\n      nftType: [Object],\n      collectionData: [Object],\n      collectionDisplay: [Object]\n    },\n    ...\n    SoulMadeComponent: {\n      contractName: 'SoulMadeComponent',\n      contractAddress: '0x421c19b7dc122357',\n      nftType: [Object],\n      collectionData: [Object],\n      collectionDisplay: [Object]\n    }\n  },\n  null\n]\n")))}u.isMDXComponent=!0}}]);