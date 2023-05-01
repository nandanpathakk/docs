"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[76195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="Struct Display",s={unversionedId:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display",id:"Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display",title:"Struct Display",description:"Display is a basic view that includes the name, description and",source:"@site/docs/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display.md",sourceDirName:"Concepts/token-standards/flow-nft/MetdataViews",slug:"/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display",permalink:"/docs/next/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Display",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract MetadataViews",permalink:"/docs/next/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews"},next:{title:"Struct Edition",permalink:"/docs/next/Concepts/token-standards/flow-nft/MetdataViews/MetadataViews_Edition"}},l={},c=[{value:"Initializer",id:"initializer",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"struct-display"},"Struct ",(0,r.kt)("inlineCode",{parentName:"h1"},"Display")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct Display {\n\n    pub let name: String\n\n    pub let description: String\n\n    pub let thumbnail: AnyStruct{File}\n}\n")),(0,r.kt)("p",null,"Display is a basic view that includes the name, description and\nthumbnail for an object. Most objects should implement this view."),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"init(name: String, description: String, thumbnail: AnyStruct{File})\n")))}u.isMDXComponent=!0}}]);