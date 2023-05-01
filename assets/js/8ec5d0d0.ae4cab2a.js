"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[33605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Events"},o=void 0,i={unversionedId:"cadence/language/events",id:"cadence/language/events",title:"Events",description:"Events are special values that can be emitted during the execution of a program.",source:"@site/docs/cadence/language/events.md",sourceDirName:"cadence/language",slug:"/cadence/language/events",permalink:"/docs/next/cadence/language/events",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Events"},sidebar:"tutorialSidebar",previous:{title:"Environment Information",permalink:"/docs/next/cadence/language/environment-information"},next:{title:"Functions",permalink:"/docs/next/cadence/language/functions"}},c={},s=[{value:"Emitting events",id:"emitting-events",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Events are special values that can be emitted during the execution of a program."),(0,r.kt)("p",null,"An event type can be declared with the ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," keyword."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event FooEvent(x: Int, y: Int)\n")),(0,r.kt)("p",null,"The syntax of an event declaration is similar to that of\na ",(0,r.kt)("a",{parentName:"p",href:"functions#function-declarations"},"function declaration"),";\nevents contain named parameters, each of which has an optional argument label."),(0,r.kt)("p",null,"Event parameters may only have a valid event parameter type.\nValid types are boolean, string, integer, arrays and dictionaries of these types,\nand structures where all fields have a valid event parameter type.\nResource types are not allowed, because when a resource is used as an argument, it is moved."),(0,r.kt)("p",null,"Events can only be declared within a ",(0,r.kt)("a",{parentName:"p",href:"contracts"},"contract")," body.\nEvents cannot be declared globally or within resource or struct types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: An event cannot be declared globally\n//\nevent GlobalEvent(field: Int)\n\npub contract Events {\n    // Event with explicit argument labels\n    //\n    event BarEvent(labelA fieldA: Int, labelB fieldB: Int)\n\n    // Invalid: A resource type is not allowed to be used\n    // because it would be moved and lost\n    //\n    event ResourceEvent(resourceField: @Vault)\n}\n\n")),(0,r.kt)("h3",{id:"emitting-events"},"Emitting events"),(0,r.kt)("p",null,"To emit an event from a program, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," statement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"pub contract Events {\n    event FooEvent(x: Int, y: Int)\n\n    // Event with argument labels\n    event BarEvent(labelA fieldA: Int, labelB fieldB: Int)\n\n    fun events() {\n        emit FooEvent(x: 1, y: 2)\n\n        // Emit event with explicit argument labels\n        // Note that the emitted event will only contain the field names,\n        // not the argument labels used at the invocation site.\n        emit BarEvent(labelA: 1, labelB: 2)\n    }\n}\n")),(0,r.kt)("p",null,"Emitting events has the following restrictions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Events can only be invoked in an ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," statement."),(0,r.kt)("p",{parentName:"li"},"This means events cannot be assigned to variables or used as function parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Events can only be emitted from the location in which they are declared."))))}d.isMDXComponent=!0}}]);