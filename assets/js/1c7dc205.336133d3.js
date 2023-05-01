"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[10756],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={title:"Cadence Design Patterns"},r=void 0,l={unversionedId:"cadence/design-patterns",id:"cadence/design-patterns",title:"Cadence Design Patterns",description:"This is a selection of software design patterns developed by core Flow developers",source:"@site/docs/cadence/design-patterns.mdx",sourceDirName:"cadence",slug:"/cadence/design-patterns",permalink:"/docs/next/cadence/design-patterns",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Cadence Design Patterns"},sidebar:"tutorialSidebar",previous:{title:"Flow Staking Contract Reference",permalink:"/docs/next/cadence/core-contracts/staking-contract-reference"},next:{title:"Development",permalink:"/docs/next/cadence/development"}},s={},c=[{value:"Use named value fields for constants instead of hard-coding",id:"use-named-value-fields-for-constants-instead-of-hard-coding",level:2},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Script-Accessible public field/function",id:"script-accessible-public-fieldfunction",level:2},{value:"Problem",id:"problem-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Script-Accessible report",id:"script-accessible-report",level:2},{value:"Problem",id:"problem-2",level:3},{value:"Solution",id:"solution-2",level:3},{value:"Example Code",id:"example-code",level:3},{value:"Init Singleton",id:"init-singleton",level:2},{value:"Problem",id:"problem-3",level:3},{value:"Solution",id:"solution-3",level:3},{value:"Use descriptive names for fields, paths, functions and variables",id:"use-descriptive-names-for-fields-paths-functions-and-variables",level:2},{value:"Problem",id:"problem-4",level:3},{value:"Solution",id:"solution-4",level:3},{value:"Example",id:"example",level:3},{value:"Include concrete types in type constraints, especially &quot;Any&quot; types",id:"include-concrete-types-in-type-constraints-especially-any-types",level:2},{value:"Problem",id:"problem-5",level:3},{value:"Solution",id:"solution-5",level:3},{value:"Plural names for arrays and maps are preferable",id:"plural-names-for-arrays-and-maps-are-preferable",level:2},{value:"Use transaction post-conditions when applicable",id:"use-transaction-post-conditions-when-applicable",level:2},{value:"Problem",id:"problem-6",level:3},{value:"Solution",id:"solution-6",level:3},{value:"Example",id:"example-1",level:3},{value:"Avoid excessive load and save storage operations (prefer in-place mutations)",id:"avoid-excessive-load-and-save-storage-operations-prefer-in-place-mutations",level:2},{value:"Problem",id:"problem-7",level:3},{value:"Solution",id:"solution-7",level:3},{value:"Example",id:"example-2",level:3},{value:"Capability Bootstrapping",id:"capability-bootstrapping",level:2},{value:"Problem",id:"problem-8",level:3},{value:"Solution",id:"solution-8",level:3},{value:"Capability Revocation",id:"capability-revocation",level:2},{value:"Problem",id:"problem-9",level:3},{value:"Solution",id:"solution-9",level:3},{value:"Check for existing links before creating new ones",id:"check-for-existing-links-before-creating-new-ones",level:2},{value:"Example",id:"example-3",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a selection of software design patterns developed by core Flow developers\nwhile writing Cadence code for deployment to Flow Mainnet."),(0,o.kt)("p",null,"Many of these design patters apply to most other programming languages, but some are specific to Cadence."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_design_pattern"},"Design patterns")," are building blocks for software development.\nThey may provide a solution to a problem that you encounter when writing smart contracts in Cadence.\nIf they do not clearly fit, these patterns may not be the right solution for a given situation or problem.\nThey are not meant to be rules to be followed strictly, especially where a better solution presents itself."),(0,o.kt)("h1",{id:"general"},"General"),(0,o.kt)("p",null,"These are general patterns to follow when writing smart contracts."),(0,o.kt)("h2",{id:"use-named-value-fields-for-constants-instead-of-hard-coding"},"Use named value fields for constants instead of hard-coding"),(0,o.kt)("h3",{id:"problem"},"Problem"),(0,o.kt)("p",null,"Your contracts, resources, and scripts all have to refer to the same value.\nA number, a string, a storage path, etc.\nEntering these values manually in transactions and scripts is a potential source of error.\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Magic_number_(programming)"},"Wikipedia's page on magic numbers")),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Add a public (",(0,o.kt)("inlineCode",{parentName:"p"},"pub"),"), constant (",(0,o.kt)("inlineCode",{parentName:"p"},"let"),") field, e.g. a ",(0,o.kt)("inlineCode",{parentName:"p"},"Path")," , to the contract responsible for the value,\nand set it in the contract's initializer.\nRefer to that value via this public field rather than specifying it manually."),(0,o.kt)("p",null,"Example Snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"\n// BAD Practice: Do not hard code storage paths\npub contract NamedFields {\n    pub resource Test {}\n\n    init() {\n        // BAD: Hard-coded storage path\n        self.account.save(<-create Test(), to: /storage/testStorage)\n    }\n}\n\n// GOOD practice: Instead, use a field\n//\npub contract NamedFields {\n    pub resource Test {}\n\n    // GOOD: field storage path\n    pub let TestStoragePath: StoragePath\n\n    init() {\n        // assign and access the field here and in transactions\n        self.TestStoragePath = /storage/testStorage\n        self.account.save(<-create Test(), to: self.TestStoragePath)\n    }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/LockedTokens.cdc#L718"},"Example Code")),(0,o.kt)("h2",{id:"script-accessible-public-fieldfunction"},"Script-Accessible public field/function"),(0,o.kt)("p",null,"Data availability is important in a blockchain environment.\nIt is useful to publicize information about your smart contract and the assets it controls\nso other smart contracts and apps can easily query it."),(0,o.kt)("h3",{id:"problem-1"},"Problem"),(0,o.kt)("p",null,"Your contract, resource or struct has a field or resource that will need to be read and used on or off-chain, often in bulk."),(0,o.kt)("h3",{id:"solution-1"},"Solution"),(0,o.kt)("p",null,"Make sure that the field can be accessed from a script (using a ",(0,o.kt)("inlineCode",{parentName:"p"},"PublicAccount"),")\nrather than requiring a transaction (using an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount"),").\nThis saves the time and fees required to read a property using a transaction.\nMaking the field or function ",(0,o.kt)("inlineCode",{parentName:"p"},"pub")," and exposing it via a ",(0,o.kt)("inlineCode",{parentName:"p"},"/public/")," capability will allow this."),(0,o.kt)("p",null,"Be careful not to expose any data or functionality that should be kept private when doing so."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// BAD: Field is private, so it cannot be read by the public\naccess(self) let totalSupply: UFix64\n\n// GOOD: Field is public, so it can be read and used by anyone\npub let totalSupply: UFix64\n")),(0,o.kt)("h2",{id:"script-accessible-report"},"Script-Accessible report"),(0,o.kt)("h3",{id:"problem-2"},"Problem"),(0,o.kt)("p",null,"Your contract has a resource that you wish to access fields of.\nResources are often stored in private places and are hard to access.\nAdditionally, scripts cannot return resources to the external context,\nso a struct must be used to hold the data."),(0,o.kt)("h3",{id:"solution-2"},"Solution"),(0,o.kt)("p",null,"Return a reference to a resource if the data from a single resource is all that is needed.\nOtherwise, declare a struct to hold the data that you wish to return from the script.\nWrite a function that fills out the fields of this struct with the data\nfrom the resource that you wish to access.\nThen call this on the resource that you wish to access the fields of in a script,\nand return the struct from the script."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#script-accessible-public-fieldfunction"},"Script-Accessible public field/function"),", above, for how best to expose this capability."),(0,o.kt)("h3",{id:"example-code"},"Example Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract AContract {\n    pub let BResourceStoragePath: StoragePath\n    pub let BResourcePublicPath: PublicPath\n    \n    init() {\n        self.BResourceStoragePath = /storage/BResource\n        self.BResourcePublicPath = /public/BResource\n    }\n\n    // Resource definition\n    pub resource BResource {\n        pub var c: UInt64\n        pub var d: String\n\n\n        // Generate a struct with the same fields\n        // to return when a script wants to see the fields of the resource\n        // without having to return the actual resource\n        pub fun generateReport(): BReportStruct {\n            return BReportStruct(c: self.c, d: self.d)\n        }\n\n        init(c: UInt64, d: String) {\n            self.c = c\n            self.d = d\n        }\n    }\n\n    // Define a struct with the same fields as the resource\n    pub struct BReportStruct {\n        pub var c: UInt64\n        pub var d: String\n\n        init(c: UInt64, d: String) {\n            self.c = c\n            self.d = d\n        }\n\n    }\n}\n...\n// Transaction\nimport AContract from 0xAContract\n\ntransaction {\n        prepare(acct: AuthAccount) {\n            //...\n            acct.link<&AContract.BResource>(AContract.BResourcePublicPath, target: AContract.BResourceStoragePath)\n        }\n}\n// Script\nimport AContract from 0xAContract\n\n// Return the struct with a script\npub fun main(account: Address): AContract.BReportStruct {\n    // borrow the resource\n    let b = getAccount(account)\n        .getCapability(AContract.BResourcePublicPath)\n        .borrow<&AContract.BResource>()\n    // return the struct\n    return b.generateReport()\n}\n")),(0,o.kt)("h2",{id:"init-singleton"},"Init Singleton"),(0,o.kt)("h3",{id:"problem-3"},"Problem"),(0,o.kt)("p",null,"An admin resource must be created and delivered to a specified account.\nThere should not be a function to do this, as that would allow anyone to create an admin resource."),(0,o.kt)("h3",{id:"solution-3"},"Solution"),(0,o.kt)("p",null,"Create any one-off resources in the contract's ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function\nand deliver them to an address or ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount")," specified as an argument."),(0,o.kt)("p",null,"See how this is done in the LockedTokens contract init function:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/LockedTokens.cdc#L718"},"LockedTokens.cdc")),(0,o.kt)("p",null,"and in the transaction that is used to deploy it:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/lockedTokens/admin/admin_deploy_contract.cdc"},"admin_deploy_contract.cdc")),(0,o.kt)("h2",{id:"use-descriptive-names-for-fields-paths-functions-and-variables"},"Use descriptive names for fields, paths, functions and variables"),(0,o.kt)("h3",{id:"problem-4"},"Problem"),(0,o.kt)("p",null,"Smart contracts often are vitally important pieces of a project and often have many other\nsmart contracts and applications that rely on them.\nTherefore, they need to be clearly written and easy to understand."),(0,o.kt)("h3",{id:"solution-4"},"Solution"),(0,o.kt)("p",null,"All fields, functions, types, variables, etc., need to have names that clearly describe what they are used for."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," is better than ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"element"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"providerAccount")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"tokenRecipientAccount")," is better than ",(0,o.kt)("inlineCode",{parentName:"p"},"acct1")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"acct2"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/storage/bestPracticesDocsCollectionPath")," is better than ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/collection")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// BAD: Unclear naming\n//\npub contract Tax {\n    // Do not use abbreviations unless absolutely necessary\n    pub var pcnt: UFix64\n\n    // Not clear what the function is calculating or what the parameter should be\n    pub fun calculate(num: UFix64): UFix64 {\n        // What total is this referring to?\n        let total = num + (num * self.pcnt)\n\n        return total\n    }\n}\n\n// GOOD: Clear naming\n//\npub contract TaxUtilities {\n    // Clearly states what the field is for\n    pub var taxPercentage: UFix64\n\n    // Clearly states that this function calculates the\n    // total cost after tax\n    pub fun calculateTotalCostPlusTax(preTaxCost: UFix64): UFix64 {\n        let postTaxCost = preTaxCost + (preTaxCost * self.taxPercentage)\n\n        return postTaxCost\n    }\n}\n")),(0,o.kt)("h2",{id:"include-concrete-types-in-type-constraints-especially-any-types"},'Include concrete types in type constraints, especially "Any" types'),(0,o.kt)("h3",{id:"problem-5"},"Problem"),(0,o.kt)("p",null,"When specifying type constraints for capabilities or borrows, concrete types often do not get specified,\nmaking it unclear if the developer actually intended it to be unspecified or not.\nPaths also use a shared namespace between contracts, so an account may have stored a different object\nin a path that you would expect to be used for something else.\nTherefore, it is important to be explicit when getting objects or references to resources."),(0,o.kt)("h3",{id:"solution-5"},"Solution"),(0,o.kt)("p",null,"A good example of when the code should specify the type being restricted is checking the FLOW balance:\nThe code must borrow ",(0,o.kt)("inlineCode",{parentName:"p"},"&FlowToken.Vault{FungibleToken.Balance}"),", in order to ensure that it gets a FLOW token balance,\nand not just ",(0,o.kt)("inlineCode",{parentName:"p"},"&{FungibleToken.Balance}"),", any balance \u2013 the user could store another object\nthat conforms to the balance interface and return whatever value as the amount."),(0,o.kt)("p",null,"When the developer does not care what the concrete type is, they should explicitly indicate that\nby using ",(0,o.kt)("inlineCode",{parentName:"p"},"&AnyResource{Receiver}")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"&{Receiver}"),".\nIn the latter case, ",(0,o.kt)("inlineCode",{parentName:"p"},"AnyResource")," is implicit, but not as clear as the former case."),(0,o.kt)("h2",{id:"plural-names-for-arrays-and-maps-are-preferable"},"Plural names for arrays and maps are preferable"),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," for an array of accounts."),(0,o.kt)("p",null,"This signals that the field or variable is not scalar.\nIt also makes it easier to use the singular form for a variable name during iteration."),(0,o.kt)("h2",{id:"use-transaction-post-conditions-when-applicable"},"Use transaction post-conditions when applicable"),(0,o.kt)("h3",{id:"problem-6"},"Problem"),(0,o.kt)("p",null,"Transactions can contain any amount of valid Cadence code and access many contracts and accounts.\nThe power of resources and capabilities means that there may be some behaviors of programs that are not expected."),(0,o.kt)("h3",{id:"solution-6"},"Solution"),(0,o.kt)("p",null,"It is usually safe to include post-conditions in transactions to verify the intended outcome."),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("p",null,"This could be used when purchasing an NFT to verify that the NFT was deposited in your account's collection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'// Psuedo-code\n\ntransaction {\n\n    pub let buyerCollectionRef: &NonFungibleToken.Collection\n\n    prepare(acct: AuthAccount) {\n\n        // Get tokens to buy and a collection to deposit the bought NFT to\n        let temporaryVault <- vaultRef.withdraw(amount: 10.0)\n        let self.buyerCollectionRef = acct.borrow(from: /storage/Collection)\n\n        // purchase, supplying the buyers collection reference\n        saleRef.purchase(tokenID: 1, recipient: self.buyerCollectionRef, buyTokens: <-temporaryVault)\n\n    }\n    post {\n        // verify that the buyer now owns the NFT\n        self.buyerCollectionRef.idExists(1) == true: "Bought NFT ID was not deposited into the buyers collection"\n    }\n}\n')),(0,o.kt)("h2",{id:"avoid-excessive-load-and-save-storage-operations-prefer-in-place-mutations"},"Avoid excessive load and save storage operations (prefer in-place mutations)"),(0,o.kt)("h3",{id:"problem-7"},"Problem"),(0,o.kt)("p",null,"When modifying data in account storage, ",(0,o.kt)("inlineCode",{parentName:"p"},"load()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"save()")," are costly operations.\nThis can quickly cause your transaction to reach the gas limit or slow down the network."),(0,o.kt)("p",null,"This also applies to contract objects and their fields (which are implicitly stored in storage, i.e. read from/written to),\nor nested resources. Loading them from their fields just to modify them and save them back\nis just as costly."),(0,o.kt)("p",null,"For example, a collection contains a dictionary of NFTs. There is no need to move the whole dictionary out of the field,\nupdate the dictionary on the stack (e.g. adding or removing an NFT),\nand then move the whole dictionary back to the field, it can be updated in-place.\nThe same goes for a more complex data structure like a dictionary of nested resources:\nEach resource can be updated in-place by taking a reference to the nested object instead of loading and saving."),(0,o.kt)("h3",{id:"solution-7"},"Solution"),(0,o.kt)("p",null,"For making modifications to values in storage or accessing stored objects,\n",(0,o.kt)("inlineCode",{parentName:"p"},"borrow()")," should always be used to access them instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"save")," unless absolutely necessary.\n",(0,o.kt)("inlineCode",{parentName:"p"},"borrow()")," returns a reference to the object at the storage path instead of having to load the entire object.\nThis reference can be assigned to or can be used to access fields or call methods on stored objects."),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// BAD: Loads and stores a resource to use it\n//\ntransaction {\n\n    prepare(acct: AuthAccount) {\n\n        // Removes the vault from storage, a costly operation\n        let vault <- acct.load<@ExampleToken.Vault>(from: /storage/exampleToken)\n\n        // Withdraws tokens\n        let burnVault <- vault.withdraw(amount: 10)\n\n        destroy burnVault\n\n        // Saves the used vault back to storage, another costly operation\n        acct.save(to: /storage/exampleToken)\n\n    }\n}\n\n// GOOD: Uses borrow instead to avoid costly operations\n//\ntransaction {\n\n    prepare(acct: AuthAccount) {\n\n        // Borrows a reference to the stored vault, much less costly operation\n        let vault <- acct.borrow<&ExampleToken.Vault>(from: /storage/exampleToken)\n\n        let burnVault <- vault.withdraw(amount: 10)\n\n        destroy burnVault\n\n        // No `save` required because we only used a reference\n    }\n}\n")),(0,o.kt)("h1",{id:"capabilities"},"Capabilities"),(0,o.kt)("h2",{id:"capability-bootstrapping"},"Capability Bootstrapping"),(0,o.kt)("h3",{id:"problem-8"},"Problem"),(0,o.kt)("p",null,"An account must be given a ",(0,o.kt)("a",{parentName:"p",href:"language/capability-based-access-control"},"capability"),"\nto a resource or contract in another account. To create, i.e. link the capability,\nthe transaction must be signed by a key which has access to the target account."),(0,o.kt)("p",null,"To transfer / deliver the capability to the other account, the transaction also needs write access to that one.\nIt is not as easy to produce a single transaction which is authorized by two accounts\nas it is to produce a typical transaction which is authorized by one account."),(0,o.kt)("p",null,"This prevents a single transaction from fetching the capability\nfrom one account and delivering it to the other."),(0,o.kt)("h3",{id:"solution-8"},"Solution"),(0,o.kt)("p",null,"The solution to the bootstrapping problem in Cadence is provided by the ",(0,o.kt)("a",{parentName:"p",href:"language/accounts#account-inbox"},"Inbox API")),(0,o.kt)("p",null,"Account A (which we will call the provider) creates the capability they wish to send to B (which we will call the recipient),\nand stores this capability on their account in a place where the recipient can access it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Inbox.publish")," function on their account.\nThey choose a name for the capability that the recipient can later use to identify it, and specify the recipient's address when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"publish"),".\nThis call to ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," will emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"InboxValuePublished")," event that the recipient can listen for off-chain to know that the Capability is ready for them to claim. "),(0,o.kt)("p",null,"The recipient then later can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Inbox.claim")," function to securely grab the capability from the provider's account.\nThey must provide the name and type with which the capability was published, as well as the address of the provider's account\n(all of this information is available in the ",(0,o.kt)("inlineCode",{parentName:"p"},"InboxValuePublished")," event emitted on ",(0,o.kt)("inlineCode",{parentName:"p"},"publish"),").\nThis will remove the capability from the provider's account and emit an ",(0,o.kt)("inlineCode",{parentName:"p"},"InboxValueClaimed")," event that the provider can listen for off-chain. "),(0,o.kt)("p",null,"One important caveat to this is that the published capability is stored on the provider's account until the recipient claims it,\nso the provider can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Inbox.unpublish")," function to remove the capability from their account if they no longer wish to pay for storage for it.\nThis also requires the name and type which the capability was published,\nand emits an ",(0,o.kt)("inlineCode",{parentName:"p"},"InboxValueUnpublished")," event that the recipient can listen for off-chain. "),(0,o.kt)("p",null,"It is also important to note that the recipient becomes the owner of the capability object once they have claimed it,\nand can thus store it or copy it anywhere they have access to.\nThis means providers should only publish capabilities to recipients they trust to use them properly,\nor limit the type with which the capability is restricted in order to only give recipients access to the functionality\nthat the provider is willing to allow them to copy. "),(0,o.kt)("h2",{id:"capability-revocation"},"Capability Revocation"),(0,o.kt)("h3",{id:"problem-9"},"Problem"),(0,o.kt)("p",null,"A capability provided by one account to a second account must able to be revoked\nby the first account without the co-operation of the second."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/pull/798"},"Capability Controller FLIP")," for a proposal to improve this in the future."),(0,o.kt)("h3",{id:"solution-9"},"Solution"),(0,o.kt)("p",null,"The first account should create the capability as a link to a capability in ",(0,o.kt)("inlineCode",{parentName:"p"},"/private/"),",\nwhich then links to a resource in ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/"),". That second-order link is then handed\nto the second account as the capability for them to use."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account 1:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/private/capability")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/resource")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"/private/revokableLink")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"/private/capability")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Account 2:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/storage/capability -> (Capability(\u2192Account 1: /private/revokableLink))")),(0,o.kt)("p",null,"If the first account wants to revoke access to the resource in storage,\nthey should delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"/private/")," link that the second account's capability refers to.\nCapabilities use paths rather than resource identifiers, so this will break the capability."),(0,o.kt)("p",null,"The first account should be careful not to create another link at the same location\nin its private storage once the capability has been revoked,\notherwise this will restore the second account's capability."),(0,o.kt)("h2",{id:"check-for-existing-links-before-creating-new-ones"},"Check for existing links before creating new ones"),(0,o.kt)("p",null,"When linking a capability, the link might be already present.\nIn that case, Cadence will not panic with a runtime error but the link function will return nil.\nThe documentation states that: The link function does not check if the target path is valid/exists\nat the time the capability is created and does not check if the target value conforms to the given type.\nIn that sense, it is a good practice to check if the link does already exist with ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount.getLinkTarget"),"\nbefore creating it with ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount.link()"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"AuthAccount.getLinkTarget")," will return nil if the link does not exist."),(0,o.kt)("h3",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"transaction {\n    prepare(signer: AuthAccount) {\n        // Create a public capability to the Vault that only exposes\n        // the deposit function through the Receiver interface\n        //\n        // Check to see if there is a link already and unlink it if there is\n\n        if signer.getLinkTarget(/public/exampleTokenReceiver) != nil {\n            signer.unlink(/public/exampleTokenReceiver)\n        }\n\n        signer.link<&ExampleToken.Vault{FungibleToken.Receiver}>(\n            /public/exampleTokenReceiver,\n            target: /storage/exampleTokenVault\n        )\n    }\n}\n")))}d.isMDXComponent=!0}}]);