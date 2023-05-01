"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70951],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(o),b=r,y=l["".concat(p,".").concat(b)]||l[b]||u[b]||a;return o?n.createElement(y,i(i({ref:t},c),{},{components:o})):n.createElement(y,i({ref:t},c))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=b;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}b.displayName="MDXCreateElement"},59617:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const a={title:"Database Encryption for Existing Node Operators",sidebar_title:"Database Encryption for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes."},i=void 0,s={unversionedId:"nodes/node-operation/db-encryption-existing-operator",id:"version-legacy/nodes/node-operation/db-encryption-existing-operator",title:"Database Encryption for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes.",source:"@site/versioned_docs/version-legacy/nodes/node-operation/db-encryption-existing-operator.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/db-encryption-existing-operator",permalink:"/docs/nodes/node-operation/db-encryption-existing-operator",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Database Encryption for Existing Node Operators",sidebar_title:"Database Encryption for Existing Node Operators",description:"Instructions for existing Node Operators to follow to create a machine account for their collection or consensus nodes."},sidebar:"tutorialSidebar",previous:{title:"Byzantine node attack response",permalink:"/docs/nodes/node-operation/byzantine-node-attack-response"},next:{title:"Operator FAQ",permalink:"/docs/nodes/node-operation/faq"}},p={},d=[{value:"Downloading Bootstrap Utility",id:"downloading-bootstrap-utility",level:2},{value:"Generate Database Encryption Key",id:"generate-database-encryption-key",level:2}],c=(l="Callout",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var l;const u={toc:d},b="wrapper";function y(e){let{components:t,...o}=e;return(0,r.kt)(b,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Mainnet14, the DKG (distributed key generation) is turned on, requiring storage of\ndynamically generated confidential data (random beacon keys). These are stored in a\nseparate database which is new with the Mainnet14 release."),(0,r.kt)("p",null,"All node operators joining after Mainnet14 will generate encryption keys for this database\nthrough the node bootstrapping and staking process. We strongly recommend all node operators\n(especially consensus node operators) generate an encryption key for this database. This\nguide demonstrates how to enable encryption for this database for existing operators."),(0,r.kt)("h2",{id:"downloading-bootstrap-utility"},"Downloading Bootstrap Utility"),(0,r.kt)(c,{type:"warning",mdxType:"Callout"},"If you have downloaded the bootstrapping kit previously, ensure that you do this step again to get the latest copy of the bootstrapping kit since there have been significant changes to it."),(0,r.kt)("p",null,"Follow the instructions ",(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap/#download-the-bootstrapping-kit"},"here"),"\nto download the latest version of the bootstrapping kit, then return to this page."),(0,r.kt)("h2",{id:"generate-database-encryption-key"},"Generate Database Encryption Key"),(0,r.kt)("p",null,"You will need to generate an encryption key for the database using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap")," utility."),(0,r.kt)(c,{type:"warning",mdxType:"Callout"},(0,r.kt)("p",null,"  Ensure you run the following commands on the machine you use to run your node software.\nThe bootstrap directory passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," flag must be the same bootstrap directory used by your node.\nThe default location is ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/flow/bootstrap"),", but double-check your setup before continuing.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell:title=GenerateEncryptionKey"},"$./boot-tools/bootstrap db-encryption-key -o ./bootstrap\n<nil> INF generated db encryption key\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9secretsdb-key\n\n$tree ./bootstrap/\n./bootstrap\n\u251c\u2500\u2500 private-root-information\n\u2502   \u2514\u2500\u2500 private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9\n\u2502       \u251c\u2500\u2500 node-info.priv.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 secretsdb-key\n\u2514\u2500\u2500 public-root-information\n    \u251c\u2500\u2500 node-id\n    \u2514\u2500\u2500 node-info.pub.ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9.json\n\n3 directories, 4 files\n")))}y.isMDXComponent=!0}}]);