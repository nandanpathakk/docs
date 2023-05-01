"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98758:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Account Management",sidebar_title:"Accounts",description:"How to manage accounts addresses"},l=void 0,s={unversionedId:"tools/flow-js-testing/accounts",id:"version-legacy/tools/flow-js-testing/accounts",title:"Account Management",description:"How to manage accounts addresses",source:"@site/versioned_docs/version-legacy/tools/flow-js-testing/accounts.md",sourceDirName:"tools/flow-js-testing",slug:"/tools/flow-js-testing/accounts",permalink:"/docs/tools/flow-js-testing/accounts",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Account Management",sidebar_title:"Accounts",description:"How to manage accounts addresses"},sidebar:"tutorialSidebar",previous:{title:"Flow Javascript Testing Framework Documentation",permalink:"/docs/tools/flow-js-testing/"},next:{title:"JS Testing API Reference",permalink:"/docs/tools/flow-js-testing/api"}},i={},c=[{value:"Overview",id:"overview",level:2},{value:"Private Key Management",id:"private-key-management",level:2},{value:"Universal private key",id:"universal-private-key",level:4},{value:"Custom private keys",id:"custom-private-keys",level:4},{value:"<code>getAccountAddress</code>",id:"getaccountaddress",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>createAccount({name, keys})</code>",id:"createaccountname-keys",level:2},{value:"Options",id:"options",level:4},{value:"Returns",id:"returns-1",level:4}],d={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Flow accounts are not derived from a private key. This creates an issues for testing, since\nyou need to create actors in a specific order to use their addresses properly."),(0,r.kt)("p",null,"To reduce this friction, ",(0,r.kt)("inlineCode",{parentName:"p"},"getAccountAddress"),", allows you to access a specific address using an alias. This way you can think about actual actors -- for example ",(0,r.kt)("inlineCode",{parentName:"p"},"Alice")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Bob")," -- without needing to know their Flow addresses."),(0,r.kt)("p",null,"It also helps you to write tests in a sequential or non-sequential way. Calling this method for the first time will create a new account and return the address. Calling it a second time with the same alias again will return the Flow address for that account, without creating new account."),(0,r.kt)("h2",{id:"private-key-management"},"Private Key Management"),(0,r.kt)("h4",{id:"universal-private-key"},"Universal private key"),(0,r.kt)("p",null,"By default, accounts created and consumed by the Flow JS Testing library will use a universal private key for signing transactions. Generally, this alleviates the burden of any low-level key management and streamlines the process of testing cadence code."),(0,r.kt)("h4",{id:"custom-private-keys"},"Custom private keys"),(0,r.kt)("p",null,"However, under some circumstances the user may wish to create accounts (see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/accounts#createaccountname-keys"},(0,r.kt)("inlineCode",{parentName:"a"},"createAccount")),") or sign for accounts (see: ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/send-transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"sendTransaction")),") using custom private keys (i.e. private key value, ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/api#hashalgorithm"},"hashing algorithm"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/send-transactions#signaturealgorithm"},"signing algorithm"),", etc.) - this functionality is facilitated by the aforementioned methods."),(0,r.kt)("h2",{id:"getaccountaddress"},(0,r.kt)("inlineCode",{parentName:"h2"},"getAccountAddress")),(0,r.kt)("p",null,"Resolves name alias to a Flow address (",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefixed) under the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If an account with a specific name has not been previously accessed, the framework will create a new one and then store it under the provided alias."),(0,r.kt)("li",{parentName:"ul"},"Next time when you call this method, it will grab exactly the same account. This allows you to create several accounts up-front and then use them throughout your code, without worrying that accounts match or trying to store and manage specific addresses.")),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The alias to reference or create.")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x")," prefixed address of aliased account")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {getAccountAddress} from "@onflow/flow-js-testing"\n\nconst main = async () => {\n  const Alice = await getAccountAddress("Alice")\n  console.log({Alice})\n}\n\nmain()\n')),(0,r.kt)("h2",{id:"createaccountname-keys"},(0,r.kt)("inlineCode",{parentName:"h2"},"createAccount({name, keys})")),(0,r.kt)("p",null,"In some cases, you may wish to manually create an account with a particular set of private keys"),(0,r.kt)("h4",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pass in the following as a single object with the following keys.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"human-readable name to be associated with created account (will be used for address lookup within ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/accounts#getaccountaddress"},"getAccountAddress"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keys")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#keyobject"},"KeyObject")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#publickey"},"PublicKey"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of ",(0,r.kt)("a",{parentName:"td",href:"#./api.md#keyobject"},"KeyObjects")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/flow-js-testing/api#publickey"},"PublicKeys")," to be added to the account upon creation (defaults to the ",(0,r.kt)("a",{parentName:"td",href:"./accounts#universal-private-key"},"universal private key"),")")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udce3 if ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field not provided, the account address will not be cached and you will be unable to look it up using ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/flow-js-testing/accounts#getaccountaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"getAccountAddress")),".")),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#address"},"Address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x")," prefixed address of created account")))))}p.isMDXComponent=!0}}]);