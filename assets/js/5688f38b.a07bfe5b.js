"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),k=l,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const r={},i="Contract MetadataViews",o={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews",id:"version-legacy/flow/flow-nft/MetdataViews/MetadataViews",title:"Contract MetadataViews",description:"This contract implements the metadata standard proposed",source:"@site/versioned_docs/version-legacy/flow/flow-nft/MetdataViews/MetadataViews.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource NFTMinter",permalink:"/docs/flow/flow-nft/ExampleNFT/ExampleNFT_NFTMinter"},next:{title:"Struct Display",permalink:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Display"}},s={},p=[{value:"Interfaces",id:"interfaces",level:2},{value:"<code>Resolver</code>",id:"resolver",level:3},{value:"<code>ResolverCollection</code>",id:"resolvercollection",level:3},{value:"<code>File</code>",id:"file",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"<code>NFTView</code>",id:"nftview",level:3},{value:"<code>Display</code>",id:"display",level:3},{value:"<code>HTTPFile</code>",id:"httpfile",level:3},{value:"<code>IPFSFile</code>",id:"ipfsfile",level:3},{value:"<code>Edition</code>",id:"edition",level:3},{value:"<code>Editions</code>",id:"editions",level:3},{value:"<code>Serial</code>",id:"serial",level:3},{value:"<code>Royalty</code>",id:"royalty",level:3},{value:"<code>Royalties</code>",id:"royalties",level:3},{value:"<code>Media</code>",id:"media",level:3},{value:"<code>Medias</code>",id:"medias",level:3},{value:"<code>License</code>",id:"license",level:3},{value:"<code>ExternalURL</code>",id:"externalurl",level:3},{value:"<code>NFTCollectionData</code>",id:"nftcollectiondata",level:3},{value:"<code>NFTCollectionDisplay</code>",id:"nftcollectiondisplay",level:3},{value:"<code>Rarity</code>",id:"rarity",level:3},{value:"<code>Trait</code>",id:"trait",level:3},{value:"<code>Traits</code>",id:"traits",level:3},{value:"Functions",id:"functions",level:2},{value:"<code>getNFTView()</code>",id:"getnftview",level:3},{value:"<code>getDisplay()</code>",id:"getdisplay",level:3},{value:"<code>getEditions()</code>",id:"geteditions",level:3},{value:"<code>getSerial()</code>",id:"getserial",level:3},{value:"<code>getRoyalties()</code>",id:"getroyalties",level:3},{value:"<code>getRoyaltyReceiverPublicPath()</code>",id:"getroyaltyreceiverpublicpath",level:3},{value:"<code>getMedias()</code>",id:"getmedias",level:3},{value:"<code>getLicense()</code>",id:"getlicense",level:3},{value:"<code>getExternalURL()</code>",id:"getexternalurl",level:3},{value:"<code>getNFTCollectionData()</code>",id:"getnftcollectiondata",level:3},{value:"<code>getNFTCollectionDisplay()</code>",id:"getnftcollectiondisplay",level:3},{value:"<code>getRarity()</code>",id:"getrarity",level:3},{value:"<code>getTraits()</code>",id:"gettraits",level:3},{value:"<code>dictToTraits()</code>",id:"dicttotraits",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"contract-metadataviews"},"Contract ",(0,l.kt)("inlineCode",{parentName:"h1"},"MetadataViews")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract MetadataViews {\n}\n")),(0,l.kt)("p",null,"This contract implements the metadata standard proposed\nin FLIP-0636."),(0,l.kt)("p",null,"Ref: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/flips/20210916-nft-metadata.md"},"https://github.com/onflow/flow/blob/master/flips/20210916-nft-metadata.md")),(0,l.kt)("p",null,"Structs and resources can implement one or more\nmetadata types, called views. Each view type represents\na different kind of metadata, such as a creator biography\nor a JPEG image file."),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("h3",{id:"resolver"},(0,l.kt)("inlineCode",{parentName:"h3"},"Resolver")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Resolver {\n}\n")),(0,l.kt)("p",null,"Provides access to a set of metadata views. A struct or\nresource (e.g. an NFT) can implement this interface to provide access to\nthe views that it supports."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Resolver"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resolvercollection"},(0,l.kt)("inlineCode",{parentName:"h3"},"ResolverCollection")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface ResolverCollection {\n}\n")),(0,l.kt)("p",null,"A group of view resolvers indexed by ID."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_ResolverCollection"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"file"},(0,l.kt)("inlineCode",{parentName:"h3"},"File")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct interface File {\n}\n")),(0,l.kt)("p",null,"Generic interface that represents a file stored on or off chain. Files\ncan be used to references images, videos and other media."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_File"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,l.kt)("h3",{id:"nftview"},(0,l.kt)("inlineCode",{parentName:"h3"},"NFTView")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct NFTView {\n\n    pub let id: UInt64\n\n    pub let uuid: UInt64\n\n    pub let display: Display?\n\n    pub let externalURL: ExternalURL?\n\n    pub let collectionData: NFTCollectionData?\n\n    pub let collectionDisplay: NFTCollectionDisplay?\n\n    pub let royalties: Royalties?\n\n    pub let traits: Traits?\n}\n")),(0,l.kt)("p",null,"NFTView wraps all Core views along ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"uuid")," fields, and is used\nto give a complete picture of an NFT. Most NFTs should implement this\nview."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_NFTView"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"display"},(0,l.kt)("inlineCode",{parentName:"h3"},"Display")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Display {\n\n    pub let name: String\n\n    pub let description: String\n\n    pub let thumbnail: AnyStruct{File}\n}\n")),(0,l.kt)("p",null,"Display is a basic view that includes the name, description and\nthumbnail for an object. Most objects should implement this view."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Display"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"httpfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"HTTPFile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct HTTPFile {\n\n    pub let url: String\n}\n")),(0,l.kt)("p",null,"View to expose a file that is accessible at an HTTP (or HTTPS) URL."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_HTTPFile"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ipfsfile"},(0,l.kt)("inlineCode",{parentName:"h3"},"IPFSFile")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct IPFSFile {\n\n    pub let cid: String\n\n    pub let path: String?\n}\n")),(0,l.kt)("p",null,"View to expose a file stored on IPFS.\nIPFS images are referenced by their content identifier (CID)\nrather than a direct URI. A client application can use this CID\nto find and load the image via an IPFS gateway."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_IPFSFile"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"edition"},(0,l.kt)("inlineCode",{parentName:"h3"},"Edition")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Edition {\n\n    pub let name: String?\n\n    pub let number: UInt64\n\n    pub let max: UInt64?\n}\n")),(0,l.kt)("p",null,"Optional view for collections that issue multiple objects\nwith the same or similar metadata, for example an X of 100 set. This\ninformation is useful for wallets and marketplaces.\nAn NFT might be part of multiple editions, which is why the edition\ninformation is returned as an arbitrary sized array"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Edition"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"editions"},(0,l.kt)("inlineCode",{parentName:"h3"},"Editions")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Editions {\n\n    pub let infoList: [Edition]\n}\n")),(0,l.kt)("p",null,"Wrapper view for multiple Edition views"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Editions"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"serial"},(0,l.kt)("inlineCode",{parentName:"h3"},"Serial")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Serial {\n\n    pub let number: UInt64\n}\n")),(0,l.kt)("p",null,"View representing a project-defined serial number for a specific NFT\nProjects have different definitions for what a serial number should be\nSome may use the NFTs regular ID and some may use a different\nclassification system. The serial number is expected to be unique among\nother NFTs within that project"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Serial"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"royalty"},(0,l.kt)("inlineCode",{parentName:"h3"},"Royalty")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Royalty {\n\n    pub let receiver: Capability<&AnyResource{FungibleToken.Receiver}>\n\n    pub let cut: UFix64\n\n    pub let description: String\n}\n")),(0,l.kt)("p",null,"View that defines the composable royalty standard that gives marketplaces a\nunified interface to support NFT royalties."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Royalty"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"royalties"},(0,l.kt)("inlineCode",{parentName:"h3"},"Royalties")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Royalties {\n\n    priv let cutInfos: [Royalty]\n}\n")),(0,l.kt)("p",null,"Wrapper view for multiple Royalty views.\nMarketplaces can query this ",(0,l.kt)("inlineCode",{parentName:"p"},"Royalties")," struct from NFTs\nand are expected to pay royalties based on these specifications."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Royalties"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"media"},(0,l.kt)("inlineCode",{parentName:"h3"},"Media")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Media {\n\n    pub let file: AnyStruct{File}\n\n    pub let mediaType: String\n}\n")),(0,l.kt)("p",null,"View to represent, a file with an correspoiding mediaType."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Media"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"medias"},(0,l.kt)("inlineCode",{parentName:"h3"},"Medias")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Medias {\n\n    pub let items: [Media]\n}\n")),(0,l.kt)("p",null,"Wrapper view for multiple media views"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Medias"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"license"},(0,l.kt)("inlineCode",{parentName:"h3"},"License")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct License {\n\n    pub let spdxIdentifier: String\n}\n")),(0,l.kt)("p",null,"View to represent a license according to ",(0,l.kt)("a",{parentName:"p",href:"https://spdx.org/licenses/"},"https://spdx.org/licenses/"),"\nThis view can be used if the content of an NFT is licensed."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_License"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"externalurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"ExternalURL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct ExternalURL {\n\n    pub let url: String\n}\n")),(0,l.kt)("p",null,"View to expose a URL to this item on an external site.\nThis can be used by applications like .find and Blocto to direct users\nto the original link for an NFT."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_ExternalURL"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nftcollectiondata"},(0,l.kt)("inlineCode",{parentName:"h3"},"NFTCollectionData")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct NFTCollectionData {\n\n    pub let storagePath: StoragePath\n\n    pub let publicPath: PublicPath\n\n    pub let providerPath: PrivatePath\n\n    pub let publicCollection: Type\n\n    pub let publicLinkedType: Type\n\n    pub let providerLinkedType: Type\n\n    pub let createEmptyCollection: ((): @NonFungibleToken.Collection)\n}\n")),(0,l.kt)("p",null,"View to expose the information needed store and retrieve an NFT.\nThis can be used by applications to setup a NFT collection with proper\nstorage and public capabilities."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionData"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"nftcollectiondisplay"},(0,l.kt)("inlineCode",{parentName:"h3"},"NFTCollectionDisplay")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct NFTCollectionDisplay {\n\n    pub let name: String\n\n    pub let description: String\n\n    pub let externalURL: ExternalURL\n\n    pub let squareImage: Media\n\n    pub let bannerImage: Media\n\n    pub let socials: {String: ExternalURL}\n}\n")),(0,l.kt)("p",null,"View to expose the information needed to showcase this NFT's\ncollection. This can be used by applications to give an overview and\ngraphics of the NFT collection this NFT belongs to."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"rarity"},(0,l.kt)("inlineCode",{parentName:"h3"},"Rarity")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Rarity {\n\n    pub let score: UFix64?\n\n    pub let max: UFix64?\n\n    pub let description: String?\n}\n")),(0,l.kt)("p",null,"View to expose rarity information for a single rarity\nNote that a rarity needs to have either score or description but it can\nhave both"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Rarity"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"trait"},(0,l.kt)("inlineCode",{parentName:"h3"},"Trait")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Trait {\n\n    pub let name: String\n\n    pub let value: AnyStruct\n\n    pub let displayType: String?\n\n    pub let rarity: Rarity?\n}\n")),(0,l.kt)("p",null,"View to represent a single field of metadata on an NFT.\nThis is used to get traits of individual key/value pairs along with some\ncontextualized data about the trait"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Trait"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"traits"},(0,l.kt)("inlineCode",{parentName:"h3"},"Traits")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Traits {\n\n    pub let traits: [Trait]\n}\n")),(0,l.kt)("p",null,"Wrapper view to return all the traits on an NFT.\nThis is used to return traits as individual key/value pairs along with\nsome contextualized data about each trait."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/flow/flow-nft/MetdataViews/MetadataViews_Traits"},"More...")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"getnftview"},(0,l.kt)("inlineCode",{parentName:"h3"},"getNFTView()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getNFTView(id: UInt64, viewResolver: &{Resolver}): NFTView\n")),(0,l.kt)("p",null,"Helper to get an NFT view"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id : ",(0,l.kt)("em",{parentName:"li"},"The NFT id")),(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A NFTView struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getdisplay"},(0,l.kt)("inlineCode",{parentName:"h3"},"getDisplay()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getDisplay(_: &{Resolver}): Display?\n")),(0,l.kt)("p",null,"Helper to get Display in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: An optional Display struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"geteditions"},(0,l.kt)("inlineCode",{parentName:"h3"},"getEditions()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getEditions(_: &{Resolver}): Editions?\n")),(0,l.kt)("p",null,"Helper to get Editions in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: An optional Editions struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getserial"},(0,l.kt)("inlineCode",{parentName:"h3"},"getSerial()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getSerial(_: &{Resolver}): Serial?\n")),(0,l.kt)("p",null,"Helper to get Serial in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: An optional Serial struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getroyalties"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRoyalties()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getRoyalties(_: &{Resolver}): Royalties?\n")),(0,l.kt)("p",null,"Helper to get Royalties in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional Royalties struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getroyaltyreceiverpublicpath"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRoyaltyReceiverPublicPath()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getRoyaltyReceiverPublicPath(): PublicPath\n")),(0,l.kt)("p",null,"Get the path that should be used for receiving royalties\nThis is a path that will eventually be used for a generic switchboard receiver,\nhence the name but will only be used for royalties for now."),(0,l.kt)("p",null,"Returns: The PublicPath for the generic FT receiver"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getmedias"},(0,l.kt)("inlineCode",{parentName:"h3"},"getMedias()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getMedias(_: &{Resolver}): Medias?\n")),(0,l.kt)("p",null,"Helper to get Medias in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional Medias struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getlicense"},(0,l.kt)("inlineCode",{parentName:"h3"},"getLicense()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getLicense(_: &{Resolver}): License?\n")),(0,l.kt)("p",null,"Helper to get License in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional License struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getexternalurl"},(0,l.kt)("inlineCode",{parentName:"h3"},"getExternalURL()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getExternalURL(_: &{Resolver}): ExternalURL?\n")),(0,l.kt)("p",null,"Helper to get ExternalURL in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional ExternalURL struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getnftcollectiondata"},(0,l.kt)("inlineCode",{parentName:"h3"},"getNFTCollectionData()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getNFTCollectionData(_: &{Resolver}): NFTCollectionData?\n")),(0,l.kt)("p",null,"Helper to get NFTCollectionData in a way that will return an typed Optional"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional NFTCollectionData struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getnftcollectiondisplay"},(0,l.kt)("inlineCode",{parentName:"h3"},"getNFTCollectionDisplay()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getNFTCollectionDisplay(_: &{Resolver}): NFTCollectionDisplay?\n")),(0,l.kt)("p",null,"Helper to get NFTCollectionDisplay in a way that will return a typed\nOptional"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional NFTCollection struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getrarity"},(0,l.kt)("inlineCode",{parentName:"h3"},"getRarity()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getRarity(_: &{Resolver}): Rarity?\n")),(0,l.kt)("p",null,"Helper to get Rarity view in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional Rarity struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gettraits"},(0,l.kt)("inlineCode",{parentName:"h3"},"getTraits()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getTraits(_: &{Resolver}): Traits?\n")),(0,l.kt)("p",null,"Helper to get Traits view in a typesafe way"),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"viewResolver : ",(0,l.kt)("em",{parentName:"li"},"A reference to the resolver resource"))),(0,l.kt)("p",null,"Returns: A optional Traits struct"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dicttotraits"},(0,l.kt)("inlineCode",{parentName:"h3"},"dictToTraits()")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cadence"},"fun dictToTraits(dict: {String: AnyStruct}, excludedNames: [String]?): Traits\n")),(0,l.kt)("p",null,"Helper function to easily convert a dictionary to traits. For NFT\ncollections that do not need either of the optional values of a Trait,\nthis method should suffice to give them an array of valid traits."),(0,l.kt)("p",null,"keys that are not wanted to become ",(0,l.kt)("inlineCode",{parentName:"p"},"Traits")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"dict : ",(0,l.kt)("em",{parentName:"li"},"The dictionary to be converted to Traits")),(0,l.kt)("li",{parentName:"ul"},"excludedNames : ",(0,l.kt)("em",{parentName:"li"},"An optional String array specifying the ",(0,l.kt)("inlineCode",{parentName:"em"},"dict")))),(0,l.kt)("p",null,"Returns: The generated Traits view"),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);