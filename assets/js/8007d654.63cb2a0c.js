"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={},o="Contract ExampleNFT",c={unversionedId:"flow/flow-nft/ExampleNFT/ExampleNFT",id:"version-legacy/flow/flow-nft/ExampleNFT/ExampleNFT",title:"Contract ExampleNFT",description:"Implemented Interfaces:",source:"@site/versioned_docs/version-legacy/flow/flow-nft/ExampleNFT/ExampleNFT.md",sourceDirName:"flow/flow-nft/ExampleNFT",slug:"/flow/flow-nft/ExampleNFT/",permalink:"/docs/flow/flow-nft/ExampleNFT/",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fungible Token Standard",permalink:"/docs/flow/flow-ft/overview"},next:{title:"Resource Collection",permalink:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_Collection"}},i={},u=[{value:"Interfaces",id:"interfaces",level:2},{value:"resource interface <code>ExampleNFTCollectionPublic</code>",id:"resource-interface-examplenftcollectionpublic",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"resource <code>NFT</code>",id:"resource-nft",level:3},{value:"resource <code>Collection</code>",id:"resource-collection",level:3},{value:"resource <code>NFTMinter</code>",id:"resource-nftminter",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>createEmptyCollection()</code>",id:"fun-createemptycollection",level:3},{value:"Events",id:"events",level:2},{value:"event <code>ContractInitialized</code>",id:"event-contractinitialized",level:3},{value:"event <code>Withdraw</code>",id:"event-withdraw",level:3},{value:"event <code>Deposit</code>",id:"event-deposit",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-examplenft"},"Contract ",(0,r.kt)("inlineCode",{parentName:"h1"},"ExampleNFT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"contract ExampleNFT {\n\n    totalSupply:  UInt64\n\n    CollectionStoragePath:  StoragePath\n\n    CollectionPublicPath:  PublicPath\n\n    MinterStoragePath:  StoragePath\n}\n")),(0,r.kt)("p",null,"Implemented Interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NonFungibleToken"))),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("h3",{id:"resource-interface-examplenftcollectionpublic"},"resource interface ",(0,r.kt)("inlineCode",{parentName:"h3"},"ExampleNFTCollectionPublic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface ExampleNFTCollectionPublic {\n}\n")),(0,r.kt)("p",null,"Defines the methods that are particular to this NFT contract collection"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,r.kt)("h3",{id:"resource-nft"},"resource ",(0,r.kt)("inlineCode",{parentName:"h3"},"NFT")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource NFT {\n\n    id:  UInt64\n\n    name:  String\n\n    description:  String\n\n    thumbnail:  String\n\n    royalties:  [MetadataViews.Royalty]\n\n    metadata:  {String: AnyStruct}\n}\n")),(0,r.kt)("p",null,"The core resource that represents a Non Fungible Token.\nNew instances will be created using the NFTMinter resource\nand stored in the Collection resource"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_NFT"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resource-collection"},"resource ",(0,r.kt)("inlineCode",{parentName:"h3"},"Collection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Collection {\n\n    ownedNFTs:  {UInt64: NonFungibleToken.NFT}\n}\n")),(0,r.kt)("p",null,"The resource that will be holding the NFTs inside any account.\nIn order to be able to manage NFTs any account will need to create\nan empty collection first"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_Collection"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"resource-nftminter"},"resource ",(0,r.kt)("inlineCode",{parentName:"h3"},"NFTMinter")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource NFTMinter {\n}\n")),(0,r.kt)("p",null,"Resource that an admin or something similar would own to be\nable to mint new NFTs"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_NFTMinter"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"fun-createemptycollection"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"createEmptyCollection()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func createEmptyCollection(): NonFungibleToken.Collection\n")),(0,r.kt)("p",null,"Allows anyone to create a new empty collection"),(0,r.kt)("p",null,"Returns: The new Collection resource"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"event-contractinitialized"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"ContractInitialized")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event ContractInitialized()\n")),(0,r.kt)("p",null,"The event that is emitted when the contract is created"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"event-withdraw"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"Withdraw")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event Withdraw(id UInt64, from Address?)\n")),(0,r.kt)("p",null,"The event that is emitted when an NFT is withdrawn from a Collection"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"event-deposit"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"Deposit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event Deposit(id UInt64, to Address?)\n")),(0,r.kt)("p",null,"The event that is emitted when an NFT is deposited to a Collection"),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);