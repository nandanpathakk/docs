"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46053],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(i),f=l,d=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return i?n.createElement(d,o(o({ref:t},c),{},{components:i})):n.createElement(d,o({ref:t},c))}));function d(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=i.length,o=new Array(a);o[0]=f;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<a;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},53229:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var n=i(87462),l=(i(67294),i(3905));const a={title:"Initialize Flow Configuration",sidebar_title:"Initialize Configuration",description:"How to initialize Flow configuration using CLI"},o=void 0,r={unversionedId:"tools/flow-cli/initialize-configuration",id:"version-legacy/tools/flow-cli/initialize-configuration",title:"Initialize Flow Configuration",description:"How to initialize Flow configuration using CLI",source:"@site/versioned_docs/version-legacy/tools/flow-cli/initialize-configuration.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/initialize-configuration",permalink:"/docs/tools/flow-cli/initialize-configuration",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Initialize Flow Configuration",sidebar_title:"Initialize Configuration",description:"How to initialize Flow configuration using CLI"},sidebar:"tutorialSidebar",previous:{title:"Flow CLI",permalink:"/docs/tools/flow-cli/"},next:{title:"Install the Flow CLI",permalink:"/docs/tools/flow-cli/install"}},u={},s=[{value:"Example Usage",id:"example-usage",level:2},{value:"Error Handling",id:"error-handling",level:3},{value:"Global Configuration",id:"global-configuration",level:2},{value:"Flags",id:"flags",level:2},{value:"Reset",id:"reset",level:3},{value:"Global",id:"global",level:3},{value:"Service Private Key",id:"service-private-key",level:3},{value:"Service Key Signature Algorithm",id:"service-key-signature-algorithm",level:3},{value:"Service Key Hash Algorithm",id:"service-key-hash-algorithm",level:3},{value:"Log",id:"log",level:3}],c={toc:s},p="wrapper";function g(e){let{components:t,...i}=e;return(0,l.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Flow CLI uses a state to operate which is called configuration (usually ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," file).\nBefore using commands that require this configuration we must initialize the project by\nusing the init command. Read more about ",(0,l.kt)("a",{parentName:"p",href:"/tools/flow-cli/configuration"},"state configuration here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"flow init\n")),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"> flow init\n\nConfiguration initialized\nService account: 0xf8d6e0586b0a20c7\n\nStart emulator by running: 'flow emulator' \nReset configuration using: 'flow init --reset'\n\n")),(0,l.kt)("h3",{id:"error-handling"},"Error Handling"),(0,l.kt)("p",null,"Existing configuration will cause the error below.\nYou should initialize in an empty folder or reset configuration using ",(0,l.kt)("inlineCode",{parentName:"p"},"--reset")," flag\nor by removing the configuration file first."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"\u274c Command Error: configuration already exists at: flow.json, if you want to reset configuration use the reset flag\n")),(0,l.kt)("h2",{id:"global-configuration"},"Global Configuration"),(0,l.kt)("p",null,"Flow supports global configuration which is a ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," file saved in your home\ndirectory and loaded as the first configuration file wherever you execute the CLI command. "),(0,l.kt)("p",null,"Please be aware that global configuration has the lowest priority and is overwritten\nby any other configuration file if they exist (if ",(0,l.kt)("inlineCode",{parentName:"p"},"flow.json")," exist in your current\ndirectory it will overwrite properties in global configuration, but only those which overlap)."),(0,l.kt)("p",null,"You can generate a global configuration using ",(0,l.kt)("inlineCode",{parentName:"p"},"--global")," flag. "),(0,l.kt)("p",null,"Command example: ",(0,l.kt)("inlineCode",{parentName:"p"},"flow init --global"),"."),(0,l.kt)("p",null,"Global flow configuration is saved as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MacOs: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/flow.json")),(0,l.kt)("li",{parentName:"ul"},"Linux: ",(0,l.kt)("inlineCode",{parentName:"li"},"~/flow.json")),(0,l.kt)("li",{parentName:"ul"},"Windows: ",(0,l.kt)("inlineCode",{parentName:"li"},"C:\\Users\\$USER\\flow.json"))),(0,l.kt)("h2",{id:"flags"},"Flags"),(0,l.kt)("h3",{id:"reset"},"Reset"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset"))),(0,l.kt)("p",null,"Using this flag will reset the existing configuration and create a new one."),(0,l.kt)("h3",{id:"global"},"Global"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--global"))),(0,l.kt)("p",null,"Using this flag will create a global Flow configuration."),(0,l.kt)("h3",{id:"service-private-key"},"Service Private Key"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--service-private-key")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: a hex-encoded private key in raw form.")),(0,l.kt)("p",null,"Private key used on the default service account."),(0,l.kt)("h3",{id:"service-key-signature-algorithm"},"Service Key Signature Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--service-sig-algo")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},'"ECDSA_P256", "ECDSA_secp256k1"')),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},'"ECDSA_P256"'))),(0,l.kt)("p",null,"Specify the ECDSA signature algorithm for the provided public key."),(0,l.kt)("p",null,"Flow supports the secp256k1 and P-256 curves."),(0,l.kt)("h3",{id:"service-key-hash-algorithm"},"Service Key Hash Algorithm"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--service-hash-algo")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},'"SHA2_256", "SHA3_256"')),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},'"SHA3_256"'))),(0,l.kt)("p",null,"Specify the hashing algorithm that will be paired with the public key\nupon account creation."),(0,l.kt)("h3",{id:"log"},"Log"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"--log")),(0,l.kt)("li",{parentName:"ul"},"Short Flag: ",(0,l.kt)("inlineCode",{parentName:"li"},"-l")),(0,l.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,l.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"debug")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("inlineCode",{parentName:"li"},"info"))),(0,l.kt)("p",null,"Specify the log level. Control how much output you want to see while command execution."))}g.isMDXComponent=!0}}]);