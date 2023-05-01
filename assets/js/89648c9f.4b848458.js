"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[20181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(o,".").concat(u)]||d[u]||y[u]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Type Inference"},i=void 0,s={unversionedId:"cadence/language/type-inference",id:"cadence/language/type-inference",title:"Type Inference",description:"If a variable or constant declaration is not annotated explicitly with a type,",source:"@site/docs/cadence/language/type-inference.md",sourceDirName:"cadence/language",slug:"/cadence/language/type-inference",permalink:"/docs/next/cadence/language/type-inference",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Type Inference"},sidebar:"tutorialSidebar",previous:{title:"Type Hierarchy",permalink:"/docs/next/cadence/language/type-hierarchy"},next:{title:"Type Safety",permalink:"/docs/next/cadence/language/type-safety"}},o={},p=[{value:"Basic Literals",id:"basic-literals",level:3},{value:"Array Literals",id:"array-literals",level:3},{value:"Dictionary Literals",id:"dictionary-literals",level:3},{value:"Ternary Expression",id:"ternary-expression",level:3},{value:"Functions",id:"functions",level:3},{value:"Ambiguities",id:"ambiguities",level:2}],c={toc:p},d="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If a variable or constant declaration is not annotated explicitly with a type,\nthe declaration's type is inferred from the initial value."),(0,r.kt)("h3",{id:"basic-literals"},"Basic Literals"),(0,r.kt)("p",null,"Decimal integer literals and hex literals are inferred to type ",(0,r.kt)("inlineCode",{parentName:"p"},"Int"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 1\n// `a` has type `Int`\n\nlet b = -45\n// `b` has type `Int`\n\nlet c = 0x02\n// `c` has type `Int`\n")),(0,r.kt)("p",null,"Unsigned fixed-point literals are inferred to type ",(0,r.kt)("inlineCode",{parentName:"p"},"UFix64"),".\nSigned fixed-point literals are inferred to type ",(0,r.kt)("inlineCode",{parentName:"p"},"Fix64"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 1.2\n// `a` has type `UFix64`\n\nlet b = -1.2\n// `b` has type `Fix64`\n")),(0,r.kt)("p",null,"Similarly, for other basic literals, the types are inferred in the following manner:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Literal Kind"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Example"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Inferred Type (x)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"String literal"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},'let x = "hello"')),(0,r.kt)("td",{parentName:"tr",align:"center"},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Boolean literal"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"let x = true")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Nil literal"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"let x = nil")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Never?")))),(0,r.kt)("h3",{id:"array-literals"},"Array Literals"),(0,r.kt)("p",null,"Array literals are inferred based on the elements of the literal, and to be variable-size.\nThe inferred element type is the ",(0,r.kt)("em",{parentName:"p"},"least common super-type")," of all elements."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let integers = [1, 2]\n// `integers` has type `[Int]`\n\nlet int8Array = [Int8(1), Int8(2)]\n// `int8Array` has type `[Int8]`\n\nlet mixedIntegers = [UInt(65), 6, 275, Int128(13423)]\n// `mixedIntegers` has type `[Integer]`\n\nlet nilableIntegers = [1, nil, 2, 3, nil]\n// `nilableIntegers` has type `[Int?]`\n\nlet mixed = [1, true, 2, false]\n// `mixed` has type `[AnyStruct]`\n")),(0,r.kt)("h3",{id:"dictionary-literals"},"Dictionary Literals"),(0,r.kt)("p",null,"Dictionary literals are inferred based on the keys and values of the literal.\nThe inferred type of keys and values is the ",(0,r.kt)("em",{parentName:"p"},"least common super-type")," of all keys and values, respectively."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let booleans = {\n    1: true,\n    2: false\n}\n// `booleans` has type `{Int: Bool}`\n\nlet mixed = {\n    Int8(1): true,\n    Int64(2): "hello"\n}\n// `mixed` has type `{Integer: AnyStruct}`\n\n// Invalid: mixed keys\n//\nlet invalidMixed = {\n    1: true,\n    false: 2\n}\n// The least common super-type of the keys is `AnyStruct`.\n// But it is not a valid type for dictionary keys.\n')),(0,r.kt)("h3",{id:"ternary-expression"},"Ternary Expression"),(0,r.kt)("p",null,"Ternary expression type is inferred  to be the least common super-type of the second and third operands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let a = true ? 1 : 2\n// `a` has type `Int`\n\nlet b = true ? 1 : nil\n// `b` has type `Int?`\n\nlet c = true ? 5 : (false ? "hello" : nil)\n// `c` has type `AnyStruct`\n')),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("p",null,"Functions are inferred based on the parameter types and the return type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let add = (a: Int8, b: Int8): Int {\n    return a + b\n}\n\n// `add` has type `((Int8, Int8): Int)`\n")),(0,r.kt)("p",null,"Type inference is performed for each expression / statement, and not across statements."),(0,r.kt)("h2",{id:"ambiguities"},"Ambiguities"),(0,r.kt)("p",null,"There are cases where types cannot be inferred.\nIn these cases explicit type annotations are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: not possible to infer type based on array literal's elements.\n//\nlet array = []\n\n// Instead, specify the array type and the concrete element type, e.g. `Int`.\n//\nlet array: [Int] = []\n\n// Or, use a simple-cast to annotate the expression with a type.\nlet array = [] as [Int]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Invalid: not possible to infer type based on dictionary literal's keys and values.\n//\nlet dictionary = {}\n\n// Instead, specify the dictionary type and the concrete key\n// and value types, e.g. `String` and `Int`.\n//\nlet dictionary: {String: Int} = {}\n\n// Or, use a simple-cast to annotate the expression with a type.\nlet dictionary = {} as {String: Int}\n")))}y.isMDXComponent=!0}}]);