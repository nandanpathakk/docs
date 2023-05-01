"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47592],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=d(l),f=a,k=s["".concat(c,".").concat(f)]||s[f]||p[f]||i;return l?n.createElement(k,o(o({ref:t},u),{},{components:l})):n.createElement(k,o({ref:t},u))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,o=new Array(i);o[0]=f;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[s]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},54061:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=l(87462),a=(l(67294),l(3905));const i={title:"Get Block with the Flow CLI",sidebar_title:"Get Block",description:"How to get a block from the command line"},o=void 0,r={unversionedId:"tools/flow-cli/get-blocks",id:"version-legacy/tools/flow-cli/get-blocks",title:"Get Block with the Flow CLI",description:"How to get a block from the command line",source:"@site/versioned_docs/version-legacy/tools/flow-cli/get-blocks.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/get-blocks",permalink:"/docs/tools/flow-cli/get-blocks",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Get Block with the Flow CLI",sidebar_title:"Get Block",description:"How to get a block from the command line"},sidebar:"tutorialSidebar",previous:{title:"Get an Account with the Flow CLI",permalink:"/docs/tools/flow-cli/get-accounts"},next:{title:"Get Collection with the Flow CLI",permalink:"/docs/tools/flow-cli/get-collections"}},c={},d=[{value:"Example Usage",id:"example-usage",level:2},{value:"Example response",id:"example-response",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Query",id:"query",level:3},{value:"Arguments",id:"arguments-1",level:2},{value:"Address",id:"address",level:3},{value:"Flags",id:"flags",level:2},{value:"Events",id:"events",level:3},{value:"Include",id:"include",level:3},{value:"Signer",id:"signer",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],u={toc:d},s="wrapper";function p(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to fetch any block from the Flow network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow blocks get <block_id|latest|block_height>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow blocks get 12884163 --host access.mainnet.nodes.onflow.org:9000 --include transactions\n")),(0,a.kt)("h3",{id:"example-response"},"Example response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"Block ID        2fb7571a6ccf02f3ac42f27c14ce0a4cb119060e4fbd7af36fd51894465e7002\nPrent ID        1c5a6267ba9512e141e4e90630cb326cecfbf6113818487449efeb37fc98ca18\nTimestamp       2021-03-19 17:46:15.973305066 +0000 UTC\nHeight          12884163\nStatus              Sealed\nTotal Seals     2\nTotal Collections   8\n    Collection 0:   3e694588e789a72489667a36dd73104dea4579bcd400959d47aedccd7f930eeb\n         Transaction 0: acc2ae1ff6deb2f4d7663d24af6ab1baf797ec264fd76a745a30792f6882093b\n         Transaction 1: ae8bfbc85ce994899a3f942072bfd3455823b1f7652106ac102d161c17fcb55c\n         Transaction 2: 70c4d39d34e654173c5c2746e7bb3a6cdf1f5e6963538d62bad2156fc02ea1b2\n         Transaction 3: 2466237b5eafb469c01e2e5f929a05866de459df3bd768cde748e068c81c57bf\n    Collection 1:   e93f2bd988d66288c7e1ad991dec227c6c74b8039a430e43896ad94cf8feccce\n         Transaction 0: 4d790300722b646e7ed3e2c52675430d7ccf2efd1d93f106b53bc348df601af6\n    Collection 2:   c7d93b80ae55809b1328c686f6a8332e8e15083ab32f8b3105c4d910646f54bf\n         Transaction 0: 95c4efbb30f86029574d6acd7df04afe6108f6fd610d823dfd398c80cfa5e842\n    Collection 3:   1a4f563b48aaa38f3a7e867c89422e0bd84887de125e8f48ba147f4ee58ddf0d\n         Transaction 0: fbcc99326336d4dbb4cbc01a3b9b85cfcdcdc071b3d0e01ee88ecd144444600b\n    Collection 4:   01000c7773cc3c22cba6d8917a2486dc7a1a1842dd7fb7c0e87e63c22bb14abe\n         Transaction 0: a75097639b434044de0122d3a28620e093f277fa715001e80a035568e118c59f\n    Collection 5:   6f2b08f9673545a2e61e954feb8d55d2a3ef2b3cef7a8d2f8de527bc42d92c28\n         Transaction 0: 8ea63d397bd07a25db3f06fb9785dbf09bc652159f68a84c55ea2be606ada1e9\n    Collection 6:   13b5c48252930824a8c6e846470763582cacdacb772c1e9c584adefced6724b2\n         Transaction 0: 8ba57a92311367189a89a59bcb3c32192387fefca9bde493e087bc0d479186a8\n         Transaction 1: 8ab1d99702ccf31b6f4b3acd2580dddd440f08bc07acab4884337c0c593a8f69\n    Collection 7:   bf90fdd2761b8f37565af60fc38165dd09edf0671fdd35b37f718a7eb45e804f\n         Transaction 0: b92a14c0802183719efed00363d31076d7e50f41a6207781cf34d39c822bbacb\n\n\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"<block_id|latest|block_height>")),(0,a.kt)("li",{parentName:"ul"},"Valid Input: Block ID, ",(0,a.kt)("inlineCode",{parentName:"li"},"latest")," or block height")),(0,a.kt)("p",null,"Specify the block to retrieve by block ID or block height."),(0,a.kt)("h2",{id:"arguments-1"},"Arguments"),(0,a.kt)("h3",{id:"address"},"Address"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"address")),(0,a.kt)("li",{parentName:"ul"},"Valid Input: Flow account address")),(0,a.kt)("p",null,"Flow ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/concepts/accounts-and-keys/"},"account address")," (prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"0x")," or not)."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--events")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: Valid event name")),(0,a.kt)("p",null,"List events of this type for the block."),(0,a.kt)("h3",{id:"include"},"Include"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--include")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"transactions"))),(0,a.kt)("p",null,"Include additional values in the response."),(0,a.kt)("h3",{id:"signer"},"Signer"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--signer")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of an account defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")")),(0,a.kt)("p",null,"Specify the name of the account that will be used to sign the transaction."),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,a.kt)("p",null,"Specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}p.isMDXComponent=!0}}]);