"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[13302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o="Contract ExampleNFT",c={unversionedId:"Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT",id:"Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT",title:"Contract ExampleNFT",description:"Implemented Interfaces:",source:"@site/docs/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT.md",sourceDirName:"Concepts/token-standards/flow-nft/ExampleNFT",slug:"/Concepts/token-standards/flow-nft/ExampleNFT/",permalink:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Non-Fungible Token (NFT) Standard",permalink:"/docs/next/Concepts/token-standards/flow-nft/"},next:{title:"Resource Collection",permalink:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_Collection"}},i={},s=[{value:"Interfaces",id:"interfaces",level:2},{value:"resource interface <code>ExampleNFTCollectionPublic</code>",id:"resource-interface-examplenftcollectionpublic",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"resource <code>NFT</code>",id:"resource-nft",level:3},{value:"resource <code>Collection</code>",id:"resource-collection",level:3},{value:"resource <code>NFTMinter</code>",id:"resource-nftminter",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>createEmptyCollection()</code>",id:"fun-createemptycollection",level:3},{value:"Events",id:"events",level:2},{value:"event <code>ContractInitialized</code>",id:"event-contractinitialized",level:3},{value:"event <code>Withdraw</code>",id:"event-withdraw",level:3},{value:"event <code>Deposit</code>",id:"event-deposit",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-examplenft"},"Contract ",(0,a.kt)("inlineCode",{parentName:"h1"},"ExampleNFT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"contract ExampleNFT {\n\n    totalSupply:  UInt64\n\n    CollectionStoragePath:  StoragePath\n\n    CollectionPublicPath:  PublicPath\n\n    MinterStoragePath:  StoragePath\n}\n")),(0,a.kt)("p",null,"Implemented Interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NonFungibleToken"))),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("h3",{id:"resource-interface-examplenftcollectionpublic"},"resource interface ",(0,a.kt)("inlineCode",{parentName:"h3"},"ExampleNFTCollectionPublic")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface ExampleNFTCollectionPublic {\n}\n")),(0,a.kt)("p",null,"Defines the methods that are particular to this NFT contract collection"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,a.kt)("h3",{id:"resource-nft"},"resource ",(0,a.kt)("inlineCode",{parentName:"h3"},"NFT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource NFT {\n\n    id:  UInt64\n\n    name:  String\n\n    description:  String\n\n    thumbnail:  String\n\n    royalties:  [MetadataViews.Royalty]\n\n    metadata:  {String: AnyStruct}\n}\n")),(0,a.kt)("p",null,"The core resource that represents a Non Fungible Token.\nNew instances will be created using the NFTMinter resource\nand stored in the Collection resource"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_NFT"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resource-collection"},"resource ",(0,a.kt)("inlineCode",{parentName:"h3"},"Collection")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Collection {\n\n    ownedNFTs:  {UInt64: NonFungibleToken.NFT}\n}\n")),(0,a.kt)("p",null,"The resource that will be holding the NFTs inside any account.\nIn order to be able to manage NFTs any account will need to create\nan empty collection first"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_Collection"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"resource-nftminter"},"resource ",(0,a.kt)("inlineCode",{parentName:"h3"},"NFTMinter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource NFTMinter {\n}\n")),(0,a.kt)("p",null,"Resource that an admin or something similar would own to be\nable to mint new NFTs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/Concepts/token-standards/flow-nft/ExampleNFT/ExampleNFT_NFTMinter"},"More...")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-createemptycollection"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"createEmptyCollection()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func createEmptyCollection(): NonFungibleToken.Collection\n")),(0,a.kt)("p",null,"Allows anyone to create a new empty collection"),(0,a.kt)("p",null,"Returns: The new Collection resource"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h3",{id:"event-contractinitialized"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"ContractInitialized")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event ContractInitialized()\n")),(0,a.kt)("p",null,"The event that is emitted when the contract is created"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"event-withdraw"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"Withdraw")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event Withdraw(id UInt64, from Address?)\n")),(0,a.kt)("p",null,"The event that is emitted when an NFT is withdrawn from a Collection"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"event-deposit"},"event ",(0,a.kt)("inlineCode",{parentName:"h3"},"Deposit")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"event Deposit(id UInt64, to Address?)\n")),(0,a.kt)("p",null,"The event that is emitted when an NFT is deposited to a Collection"),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);