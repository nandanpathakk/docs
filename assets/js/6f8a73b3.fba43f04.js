"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[46140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Restricted Types"},o=void 0,s={unversionedId:"cadence/language/restricted-types",id:"cadence/language/restricted-types",title:"Restricted Types",description:"Structure and resource types can be restricted. Restrictions are interfaces.",source:"@site/docs/cadence/language/restricted-types.md",sourceDirName:"cadence/language",slug:"/cadence/language/restricted-types",permalink:"/docs/next/cadence/language/restricted-types",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Restricted Types"},sidebar:"tutorialSidebar",previous:{title:"Resources",permalink:"/docs/next/cadence/language/resources"},next:{title:"Run-time Types",permalink:"/docs/next/cadence/language/run-time-types"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Structure and resource types can be ",(0,a.kt)("strong",{parentName:"p"},"restricted"),". Restrictions are interfaces.\nRestricted types only allow access to a subset of the members and functions\nof the type that is restricted, indicated by the restrictions."),(0,a.kt)("p",null,"The syntax of a restricted type is ",(0,a.kt)("inlineCode",{parentName:"p"},"T{U1, U2, ... Un}"),",\nwhere ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," is the restricted type, a concrete resource or structure type,\nand the types ",(0,a.kt)("inlineCode",{parentName:"p"},"U1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Un")," are the restrictions, interfaces that ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," conforms to."),(0,a.kt)("p",null,"Only the members and functions of the union of the set of restrictions are available."),(0,a.kt)("p",null,"Restricted types are useful for increasing the safety in functions\nthat are supposed to only work on a subset of the type.\nFor example, by using a restricted type for a parameter's type,\nthe function may only access the functionality of the restriction:\nIf the function accidentally attempts to access other functionality,\nthis is prevented by the static checker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a resource interface named `HasCount`,\n// which has a read-only `count` field\n//\nresource interface HasCount {\n    pub let count: Int\n}\n\n// Declare a resource named `Counter`, which has a writeable `count` field,\n// and conforms to the resource interface `HasCount`\n//\npub resource Counter: HasCount {\n    pub var count: Int\n\n    init(count: Int) {\n        self.count = count\n    }\n\n    pub fun increment() {\n        self.count = self.count + 1\n    }\n}\n\n// Create an instance of the resource `Counter`\nlet counter: @Counter <- create Counter(count: 42)\n\ncounter.count  // is `42`\n\ncounter.increment()\n\ncounter.count  // is `43`\n\n// Move the resource in variable `counter` to a new variable `restrictedCounter`,\n// but typed with the restricted type `Counter{HasCount}`:\n// The variable may hold any `Counter`, but only the functionality\n// defined in the given restriction, the interface `HasCount`, may be accessed\n//\nlet restrictedCounter: @Counter{HasCount} <- counter\n\n// Invalid: Only functionality of restriction `Count` is available,\n// i.e. the read-only field `count`, but not the function `increment` of `Counter`\n//\nrestrictedCounter.increment()\n\n// Move the resource in variable `restrictedCounter` to a new variable `unrestrictedCounter`,\n// again typed as `Counter`, i.e. all functionality of the counter is available\n//\nlet unrestrictedCounter: @Counter <- restrictedCounter\n\n// Valid: The variable `unrestrictedCounter` has type `Counter`,\n// so all its functionality is available, including the function `increment`\n//\nunrestrictedCounter.increment()\n\n// Declare another resource type named `Strings`\n// which implements the resource interface `HasCount`\n//\npub resource Strings: HasCount {\n    pub var count: Int\n    access(self) var strings: [String]\n\n    init() {\n        self.count = 0\n        self.strings = []\n    }\n\n    pub fun append(_ string: String) {\n        self.strings.append(string)\n        self.count = self.count + 1\n    }\n}\n\n// Invalid: The resource type `Strings` is not compatible\n// with the restricted type `Counter{HasCount}`.\n// Even though the resource `Strings` implements the resource interface `HasCount`,\n// it is not compatible with `Counter`\n//\nlet counter2: @Counter{HasCount} <- create Strings()\n")),(0,a.kt)("p",null,"In addition to restricting concrete types is also possible\nto restrict the built-in types ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyStruct"),", the supertype of all structures,\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyResource"),", the supertype of all resources.\nFor example, restricted type ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyResource{HasCount}")," is any resource type\nfor which only the functionality of the ",(0,a.kt)("inlineCode",{parentName:"p"},"HasCount")," resource interface can be used."),(0,a.kt)("p",null,"The restricted types ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyStruct")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AnyResource")," can be omitted.\nFor example, the type ",(0,a.kt)("inlineCode",{parentName:"p"},"{HasCount}")," is any resource that implements\nthe resource interface ",(0,a.kt)("inlineCode",{parentName:"p"},"HasCount"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},'pub struct interface HasID {\n    pub let id: String\n}\n\npub struct A: HasID {\n    pub let id: String\n\n    init(id: String) {\n        self.id = id\n    }\n}\n\npub struct B: HasID {\n    pub let id: String\n\n    init(id: String) {\n        self.id = id\n    }\n}\n\n// Create two instances, one of type `A`, and one of type `B`.\n// Both types conform to interface `HasID`, so the structs can be assigned\n// to variables with type `AnyResource{HasID}`: Some resource type which only allows\n// access to the functionality of resource interface `HasID`\n\nlet hasID1: {HasID} = A(id: "1")\nlet hasID2: {HasID} = B(id: "2")\n\n// Declare a function named `getID` which has one parameter with type `{HasID}`.\n// The type `{HasID}` is a short-hand for `AnyStruct{HasID}`:\n// Some structure which only allows access to the functionality of interface `HasID`.\n//\npub fun getID(_ value: {HasID}): String {\n    return value.id\n}\n\nlet id1 = getID(hasID1)\n// `id1` is "1"\n\nlet id2 = getID(hasID2)\n// `id2` is "2"\n')),(0,a.kt)("p",null,"Only concrete types may be restricted, e.g., the restricted type may not be an array,\nthe type ",(0,a.kt)("inlineCode",{parentName:"p"},"[T]{U}")," is invalid."),(0,a.kt)("p",null,"Restricted types are also useful when giving access to resources and structures\nto potentially untrusted third-party programs through ",(0,a.kt)("a",{parentName:"p",href:"references"},"references"),",\nwhich are discussed in the next section."))}d.isMDXComponent=!0}}]);