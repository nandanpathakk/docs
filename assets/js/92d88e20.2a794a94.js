"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[75217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={},l="Resource Administrator",c={unversionedId:"flow/flow-ft/ExampleToken/ExampleToken_Administrator",id:"version-legacy/flow/flow-ft/ExampleToken/ExampleToken_Administrator",title:"Resource Administrator",description:"Functions",source:"@site/versioned_docs/version-legacy/flow/flow-ft/ExampleToken/ExampleToken_Administrator.md",sourceDirName:"flow/flow-ft/ExampleToken",slug:"/flow/flow-ft/ExampleToken/ExampleToken_Administrator",permalink:"/docs/flow/flow-ft/ExampleToken/ExampleToken_Administrator",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract ExampleToken",permalink:"/docs/flow/flow-ft/ExampleToken/"},next:{title:"Resource Burner",permalink:"/docs/flow/flow-ft/ExampleToken/ExampleToken_Burner"}},i={},u=[{value:"Functions",id:"functions",level:2},{value:"fun <code>createNewMinter()</code>",id:"fun-createnewminter",level:3},{value:"fun <code>createNewBurner()</code>",id:"fun-createnewburner",level:3}],s={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-administrator"},"Resource ",(0,a.kt)("inlineCode",{parentName:"h1"},"Administrator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Administrator {\n}\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-createnewminter"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"createNewMinter()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func createNewMinter(allowedAmount UFix64): Minter\n")),(0,a.kt)("p",null,"Function that creates and returns a new minter resource"),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"allowedAmount : ",(0,a.kt)("em",{parentName:"li"},"The maximum quantity of tokens that the minter could create"))),(0,a.kt)("p",null,"Returns: The Minter resource that would allow to mint tokens"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fun-createnewburner"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"createNewBurner()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func createNewBurner(): Burner\n")),(0,a.kt)("p",null,"Function that creates and returns a new burner resource"),(0,a.kt)("p",null,"Returns: The Burner resource"),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);