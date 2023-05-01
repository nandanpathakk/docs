"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[96946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,w=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(w,s(s({ref:t},p),{},{components:n})):r.createElement(w,s({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58809:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Flow networks"},s=void 0,c={unversionedId:"Learn/Concepts/networks",id:"version-legacy/Learn/Concepts/networks",title:"Flow networks",description:"Other than the Flow mainnet network, there are two other independent Flow networks - testnet and sandboxnet, that can be used to test applications and contracts before deployment to mainnet.",source:"@site/versioned_docs/version-legacy/1.Learn/Concepts/networks.md",sourceDirName:"1.Learn/Concepts",slug:"/Learn/Concepts/networks",permalink:"/docs/Learn/Concepts/networks",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Flow networks"},sidebar:"tutorialSidebar",previous:{title:"Governance",permalink:"/docs/Learn/Concepts/governance"},next:{title:"Flow Service Account",permalink:"/docs/Learn/Concepts/service-account"}},i={},l=[{value:"How to access these networks?",id:"how-to-access-these-networks",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Other than the Flow mainnet network, there are two other independent Flow networks - testnet and sandboxnet, that can be used to test applications and contracts before deployment to mainnet."),(0,o.kt)("p",null,"During a round of network upgrade, Flow testnet is updated first. Hence, testnet can be used to test against the latest node software, Cadence and core contract changes which will eventually be available to mainnet.\nSandboxnet is upgraded roughly at the same time the Flow mainnet is upgraded and always closely resembles the Flow mainnet. Sandboxnet can be used as a testbed before deploying your changes to mainnet."),(0,o.kt)("h2",{id:"how-to-access-these-networks"},"How to access these networks?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/concepts/accessing-testnet"},"Flow Testnet"),"\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/accessing-sandboxnet"},"Flow Sandboxnet"),"\n",(0,o.kt)("a",{parentName:"p",href:"/concepts/accessing-mainnet"},"Flow Mainnet")))}u.isMDXComponent=!0}}]);