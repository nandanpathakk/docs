"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74019],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>d});var n=l(67294);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,o=function(e,t){if(null==e)return{};var l,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(o[l]=e[l]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(o[l]=e[l])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var l=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(l),f=o,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return l?n.createElement(d,r(r({ref:t},u),{},{components:l})):n.createElement(d,r({ref:t},u))}));function d(e,t){var l=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=l.length,r=new Array(a);r[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,r[1]=i;for(var p=2;p<a;p++)r[p]=l[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}f.displayName="MDXCreateElement"},2929:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(87462),o=(l(67294),l(3905));const a={title:"Start Development Tools with the Flow CLI",sidebar_title:"Development Tools",description:"How to start development tools using the Flow CLI"},r=void 0,i={unversionedId:"tools/flow-cli/tools",id:"version-legacy/tools/flow-cli/tools",title:"Start Development Tools with the Flow CLI",description:"How to start development tools using the Flow CLI",source:"@site/versioned_docs/version-legacy/tools/flow-cli/tools.md",sourceDirName:"tools/flow-cli",slug:"/tools/flow-cli/tools",permalink:"/docs/tools/flow-cli/tools",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Start Development Tools with the Flow CLI",sidebar_title:"Development Tools",description:"How to start development tools using the Flow CLI"},sidebar:"tutorialSidebar",previous:{title:"Using Super Commands with the Flow CLI",permalink:"/docs/tools/flow-cli/super-commands"},next:{title:"index",permalink:"/docs/tools/flow-go-sdk/"}},s={},p=[{value:"FCL Development Wallet",id:"fcl-development-wallet",level:2},{value:"Flags",id:"flags",level:2},{value:"Port",id:"port",level:3},{value:"Emulator Host",id:"emulator-host",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...l}=e;return(0,o.kt)(c,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Flow CLI integrates different development tools, which can now be easily started\nand managed from a single place. "),(0,o.kt)("p",null,"Currently the CLI supports starting:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/fcl-dev-wallet"},"FCL Development Wallet"))),(0,o.kt)("h2",{id:"fcl-development-wallet"},"FCL Development Wallet"),(0,o.kt)("p",null,"The FCL dev wallet is a mock Flow wallet that simulates the protocols used by FCL to interact with the Flow blockchain on behalf of simulated user accounts."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Be sure you have the emulator running before starting this command"),"\n",(0,o.kt)("em",{parentName:"p"},"You can start it using the ",(0,o.kt)("inlineCode",{parentName:"em"},"flow emulator")," command"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"flow dev-wallet\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u26a0\ufe0f This project implements an FCL compatible\ninterface, but should ",(0,o.kt)("strong",{parentName:"em"},"not")," be used as a reference for\nbuilding a production grade wallet.")),(0,o.kt)("p",null,"After starting dev-wallet, you can set your fcl config to use it like below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as fcl from "@onflow/fcl"\n\nfcl.config()\n  // Point App at Emulator\n  .put("accessNode.api", "http://localhost:8080") \n  // Point FCL at dev-wallet (default port)\n  .put("discovery.wallet", "http://localhost:8701/fcl/authn") \n')),(0,o.kt)("p",null,"You can read more about setting up dev-wallet at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/fcl-dev-wallet"},"FCL Dev Wallet Project")),(0,o.kt)("h2",{id:"flags"},"Flags"),(0,o.kt)("h3",{id:"port"},"Port"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--port")),(0,o.kt)("li",{parentName:"ul"},"Valid inputs: Number"),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"8701"))),(0,o.kt)("p",null,"Port on which the dev wallet server will listen on."),(0,o.kt)("h3",{id:"emulator-host"},"Emulator Host"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--emulator-host")),(0,o.kt)("li",{parentName:"ul"},"Valid inputs: a hostname"),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8080"))),(0,o.kt)("p",null,"Specifies the host configuration for dev wallet"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,o.kt)("li",{parentName:"ul"},"Short Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"-f")),(0,o.kt)("li",{parentName:"ul"},"Valid inputs: valid filename")),(0,o.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,o.kt)("p",null,"Specify a filename for the configuration files, you can provide multiple configuration\nfiles by using ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times."),(0,o.kt)("h3",{id:"version-check"},"Version Check"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Flag: ",(0,o.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}m.isMDXComponent=!0}}]);