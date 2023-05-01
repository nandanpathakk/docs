"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[52748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,c(c({ref:t},p),{},{components:n})):r.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Contract Upgrades with Incompatible Changes"},c=void 0,i={unversionedId:"cadence/contract-upgrades",id:"version-legacy/cadence/contract-upgrades",title:"Contract Upgrades with Incompatible Changes",description:"Problem",source:"@site/versioned_docs/version-legacy/cadence/contract-upgrades.mdx",sourceDirName:"cadence",slug:"/cadence/contract-upgrades",permalink:"/docs/cadence/contract-upgrades",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Contract Upgrades with Incompatible Changes"},sidebar:"tutorialSidebar",previous:{title:"Cadence Anti-Patterns",permalink:"/docs/cadence/anti-patterns"},next:{title:"Cadence Design Patterns",permalink:"/docs/cadence/design-patterns"}},s={},l=[{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"I have an incompatible upgrade for a contract. How can I deploy this?"),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Please don't perform incompatible upgrades between contract versions in the same account.\nThere is too much that can go wrong."),(0,a.kt)("p",null,"You can make ",(0,a.kt)("a",{parentName:"p",href:"language/contract-updatability"},"compatible upgrades")," and then run a post-upgrade function on the new contract code if needed."),(0,a.kt)("p",null,"If you must replace your contract rather than update it,\nthe simplest solution is to add or increase a suffix on any named paths in the contract code\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/MyProjectVault")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"/public/MyProjectVault002"),") in addition to making the incompatible changes,\nthen create a new account and deploy the updated contract there."),(0,a.kt)("p",null,"\u26a0\ufe0f Flow identifies types relative to addresses, so you will also need to provide ",(0,a.kt)("em",{parentName:"p"},"upgrade transactions")," to exchange the old contract's resources for the new contract's ones. Make sure to inform users as soon as possible when and how they will need to perform this task."),(0,a.kt)("p",null,"If you absolutely must keep the old address when making an incompatible upgrade, then you do so at your own risk. Make sure you perform the following actions in this exact order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Delete any resources used in the contract account, e.g. an Admin resource."),(0,a.kt)("li",{parentName:"ol"},"Delete the contract from the account."),(0,a.kt)("li",{parentName:"ol"},"Deploy the new contract to the account.")),(0,a.kt)("p",null,"\u26a0\ufe0f Note that if any user accounts contain ",(0,a.kt)("inlineCode",{parentName:"p"},"structs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," from the ",(0,a.kt)("em",{parentName:"p"},"old")," version of the contract that have been replaced with incompatible versions in the new one, ",(0,a.kt)("strong",{parentName:"p"},"they will not load and will cause transactions that attempt to access them to crash"),". For this reason, once any users have received ",(0,a.kt)("inlineCode",{parentName:"p"},"structs")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," from the contract, this method of making an incompatible upgrade should not be attempted!"))}d.isMDXComponent=!0}}]);