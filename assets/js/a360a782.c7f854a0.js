"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8409],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(o),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return o?r.createElement(f,a(a({ref:t},c),{},{components:o})):r.createElement(f,a({ref:t},c))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var u=2;u<l;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8354:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const l={title:"Flow Emulator",description:"A development tool that looks, acts and talks like Flow",sidebar_title:"Introduction",sidebar_position:2},a=void 0,i={unversionedId:"Tooling/emulator/index",id:"Tooling/emulator/index",title:"Flow Emulator",description:"A development tool that looks, acts and talks like Flow",source:"@site/docs/Tooling/emulator/index.md",sourceDirName:"Tooling/emulator",slug:"/Tooling/emulator/",permalink:"/docs/next/Tooling/emulator/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",sidebarPosition:2,frontMatter:{title:"Flow Emulator",description:"A development tool that looks, acts and talks like Flow",sidebar_title:"Introduction",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/Tooling/intro"},next:{title:"Flow Client Library (FCL)",permalink:"/docs/next/Tooling/fcl-js/"}},s={},u=[{value:"Running the emulator with the Flow CLI",id:"running-the-emulator-with-the-flow-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Flow Emulator is a lightweight tool that emulates the behaviour of the real Flow network."),(0,n.kt)("p",null,"The emulator exposes a gRPC server that implements the Flow Access API,\nwhich is designed to have near feature parity with the real network API."),(0,n.kt)("h2",{id:"running-the-emulator-with-the-flow-cli"},"Running the emulator with the Flow CLI"),(0,n.kt)("p",null,"The emulator is bundled with the ",(0,n.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli"},"Flow CLI"),", a command-line interface for working with Flow."),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("p",null,"Follow ",(0,n.kt)("a",{parentName:"p",href:"https://docs.onflow.org/flow-cli/install/"},"these steps")," to install the Flow CLI on macOS, Linux, and Windows."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To learn more about using the Emulator,\nhave a look at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-emulator/#starting-the-server"},"the README of the repository"),"."))}d.isMDXComponent=!0}}]);