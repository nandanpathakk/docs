"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[79408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),s=c(n),k=l,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=k;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[s]="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},27084:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const i={title:"Create an Account with the Flow CLI",sidebar_title:"Create an Account",description:"How to create a Flow account from the command line"},o=void 0,r={unversionedId:"tools/flow-cli/create-accounts",id:"version-legacy/tools/flow-cli/create-accounts",title:"Create an Account with the Flow CLI",description:"How to create a Flow account from the command line",source:"@site/versioned_docs/version-legacy/tools/flow-cli/create-accounts.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/create-accounts",permalink:"/docs/tools/flow-cli/create-accounts",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Create an Account with the Flow CLI",sidebar_title:"Create an Account",description:"How to create a Flow account from the command line"},sidebar:"tutorialSidebar",previous:{title:"Flow CLI Configuration",permalink:"/docs/tools/flow-cli/configuration"},next:{title:"Data Collection",permalink:"/docs/tools/flow-cli/data-collection"}},u={},c=[{value:"Interactive Mode",id:"interactive-mode",level:2},{value:"Manual Mode",id:"manual-mode",level:2},{value:"Flags",id:"flags",level:2},{value:"Public Key",id:"public-key",level:3},{value:"Key Weight",id:"key-weight",level:3},{value:"Public Key Signature Algorithm",id:"public-key-signature-algorithm",level:3},{value:"Public Key Hash Algorithm",id:"public-key-hash-algorithm",level:3},{value:"Signer",id:"signer",level:3},{value:"Contract",id:"contract",level:3},{value:"Include Fields",id:"include-fields",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Flow CLI provides a command to submit an account creation\ntransaction to any Flow Access API. There are two options how to create an account, you can use the\ninteractive mode which guides you through the process and creates the account for you or by using\nthe manual process which requires a pre-existing account on the network you chose."),(0,l.kt)("h2",{id:"interactive-mode"},"Interactive Mode"),(0,l.kt)("p",null,"Creating the account in interactive mode prompts you for an account name and network selection.\nAfter you enter the required information the account will be created for you and saved to ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json"),".\nIf account creation is done on testnet or mainnet the account key will be saved to a separate key file,\nwhich will also be put in ",(0,l.kt)("inlineCode",{parentName:"p"},".gitignore"),". You can ",(0,l.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/security"},"read more about key security here"),"."),(0,l.kt)("p",null,"\ud83d\udca1 ",(0,l.kt)("em",{parentName:"p"},"Please note that the account creation process can take up to a minute so please be patient.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flow accounts create\n\nEnter an account name: mike\n\u2714 Testnet\n\n\ud83c\udf89 New account created with address 0x77e6ae4c8c2f1dd6 and name mike on Testnet network.\n\nHere\u2019s a summary of all the actions that were taken:\n - Added the new account to flow.json.\n - Saved the private key to mike.pkey.\n - Added mike.pkey to .gitignore.\n")),(0,l.kt)("h2",{id:"manual-mode"},"Manual Mode"),(0,l.kt)("p",null,"Manual mode requires you to have a pre-existing account on the network which you will have to provide as a signer.\nThat account must be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," for the command to work. You also have to generate a key pair, we\nsuggest using the ",(0,l.kt)("inlineCode",{parentName:"p"},"flow keys generate")," command, ",(0,l.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/generate-keys"},"which you can read more about here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# Create an account on Flow Testnet\n> flow accounts create \\\n    --key a69c6986e846ba6d0....1397f5904cd319c3e01e96375d5777f1a47010 \\\n    --signer my-testnet-account \n\nAddress  0x01cf0e2f2f715450\nBalance  10000000\nKeys     1\n\nKey 0   Public Key       a69c6986e846ba6d0....1397f5904cd319c3e01e96375d5777f1a47010\n    Weight           1000\n    Signature Algorithm  ECDSA_P256\n    Hash Algorithm       SHA3_256\n\nContracts Deployed: 0\n")),(0,l.kt)("p",null,"In the above example, the ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," file would look something like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accounts": {\n    "my-testnet-account": {\n      "address": "a2c4941b5f3c7151",\n      "key": "12c5dfde...bb2e542f1af710bd1d40b2"\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"flags"},"Flags"),(0,l.kt)("h3",{id:"public-key"},"Public Key"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--key")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: a hex-encoded public key in raw form.")),(0,l.kt)("p",null,"Specify the public key that will be added to the new account\nupon creation."),(0,l.kt)("h3",{id:"key-weight"},"Key Weight"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--key-weight")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: number between 0 and 1000"),(0,l.kt)("li",{parentName:"ul"},"Default: 1000")),(0,l.kt)("p",null,"Specify the weight of the public key being added to the new account. "),(0,l.kt)("p",null,"When opting to use this flag, you must specify a ",(0,l.kt)("inlineCode",{parentName:"p"},"--key-weight")," flag for each public ",(0,l.kt)("inlineCode",{parentName:"p"},"--key")," flag provided."),(0,l.kt)("h3",{id:"public-key-signature-algorithm"},"Public Key Signature Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--sig-algo")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},'"ECDSA_P256", "ECDSA_secp256k1"')),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},'"ECDSA_P256"'))),(0,l.kt)("p",null,"Specify the ECDSA signature algorithm for the provided public key.\nThis option can only be used together with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--key")," flag."),(0,l.kt)("p",null,"Flow supports the secp256k1 and P-256 curves."),(0,l.kt)("h3",{id:"public-key-hash-algorithm"},"Public Key Hash Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--hash-algo")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},'"SHA2_256", "SHA3_256"')),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},'"SHA3_256"'))),(0,l.kt)("p",null,"Specify the hash algorithm that will be paired with the public key\nupon account creation."),(0,l.kt)("h3",{id:"signer"},"Signer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--signer")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: the name of an account defined in ",(0,l.kt)("inlineCode",{parentName:"li"},"flow.json"),".")),(0,l.kt)("p",null,"Specify the name of the account that will be used to sign the transaction\nand pay the account creation fee."),(0,l.kt)("h3",{id:"contract"},"Contract"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--contract")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: String with format ",(0,l.kt)("inlineCode",{parentName:"li"},"name:filename"),", where ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," is\nname of the contract as it is defined in the contract source code\nand ",(0,l.kt)("inlineCode",{parentName:"li"},"filename")," is the filename of the contract source code.")),(0,l.kt)("p",null,"Specify one or more contracts to be deployed during account creation."),(0,l.kt)("h3",{id:"include-fields"},"Include Fields"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--include")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"contracts"))),(0,l.kt)("p",null,"Specify fields to include in the result output. Applies only to the text output."),(0,l.kt)("h3",{id:"host"},"Host"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--host")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,l.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,l.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,l.kt)("h3",{id:"network-key"},"Network Key"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,l.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,l.kt)("h3",{id:"network"},"Network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--network")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-n")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,l.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,l.kt)("p",null,"Specify which network you want the command to use for execution."),(0,l.kt)("h3",{id:"filter"},"Filter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--filter")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-x")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,l.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,l.kt)("h3",{id:"output"},"Output"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--output")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-o")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"inline"))),(0,l.kt)("p",null,"Specify the format of the command results."),(0,l.kt)("h3",{id:"save"},"Save"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--save")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-s")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,l.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,l.kt)("h3",{id:"log"},"Log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--log")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-l")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"debug")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"info"))),(0,l.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,l.kt)("h3",{id:"configuration"},"Configuration"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-f")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,l.kt)("p",null,"Specify the path to the ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,l.kt)("h3",{id:"version-check"},"Version Check"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}d.isMDXComponent=!0}}]);