"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Signing a Transaction"},l=void 0,s={unversionedId:"Learn/Concepts/transaction-signing",id:"version-legacy/Learn/Concepts/transaction-signing",title:"Signing a Transaction",description:"Signing a transaction for Flow is a multi-step process that can involve one or more accounts, each of which signs for a different purpose.",source:"@site/versioned_docs/version-legacy/1.Learn/Concepts/transaction-signing.md",sourceDirName:"1.Learn/Concepts",slug:"/Learn/Concepts/transaction-signing",permalink:"/docs/Learn/Concepts/transaction-signing",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Signing a Transaction"},sidebar:"tutorialSidebar",previous:{title:"Transaction Lifecycle",permalink:"/docs/Learn/Concepts/transaction-lifecycle"},next:{title:"Transactions",permalink:"/docs/Learn/Concepts/transactions"}},o={},p=[{value:"Signer Roles",id:"signer-roles",level:2},{value:"Proposal Key",id:"proposal-key",level:2},{value:"Sequence Numbers",id:"sequence-numbers",level:2},{value:"Anatomy of a Transaction",id:"anatomy-of-a-transaction",level:2},{value:"Payload",id:"payload",level:3},{value:"Authorization Envelope",id:"authorization-envelope",level:3},{value:"Payment Envelope",id:"payment-envelope",level:3},{value:"Payer Signs Last",id:"payer-signs-last",level:3},{value:"Signature Structure",id:"signature-structure",level:3},{value:"Common Signing Scenarios",id:"common-signing-scenarios",level:2},{value:"Single party, single signature",id:"single-party-single-signature",level:3},{value:"Single party, multiple signatures",id:"single-party-multiple-signatures",level:3},{value:"Multiple parties",id:"multiple-parties",level:3},{value:"Multiple parties, multiple signatures",id:"multiple-parties-multiple-signatures",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Signing a transaction for Flow is a multi-step process that can involve one or more accounts, each of which signs for a different purpose."),(0,r.kt)("h2",{id:"signer-roles"},"Signer Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Proposer:")," the account that specifies a ",(0,r.kt)("a",{parentName:"li",href:"#proposal-key"},"proposal key"),".\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payer:")," the account paying for the transaction fees.\t"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Authorizers:")," zero or more accounts authorizing the transaction to mutate their state.\t")),(0,r.kt)("h2",{id:"proposal-key"},"Proposal Key"),(0,r.kt)("p",null,"Each transaction must declare a proposal key, which can be an account key from any Flow account. The account that owns the proposal key is referred to as the ",(0,r.kt)("em",{parentName:"p"},"proposer"),"."),(0,r.kt)("p",null,"A proposal key definition declares the address, key ID, and up-to-date sequence number for the account key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  // other transaction fields\n  // ...\n  "proposalKey": {\n    "address": "0x01",\n    "keyId": 7,\n    "sequenceNumber": 42\n  }\n}   \n')),(0,r.kt)("h2",{id:"sequence-numbers"},"Sequence Numbers"),(0,r.kt)("p",null,"Flow uses sequence numbers to ensure that each transaction executes at most once.\nThis prevents many unwanted situations such as\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"transaction replay attacks"),".\t"),(0,r.kt)("p",null,"Sequence numbers work similarly to transaction nonces in Ethereum,\nbut with several key differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Each key in an account has a dedicated sequence number")," associated with it.\nUnlike Ethereum, there is no sequence number for the entire account.\t"),(0,r.kt)("li",{parentName:"ul"},"When creating a transaction, only the ",(0,r.kt)("strong",{parentName:"li"},"proposer must specify a sequence number"),".\nPayers and authorizers are not required to.\t")),(0,r.kt)("p",null,"The transaction proposer is only required to specify a sequence number for a\nsingle account key, even if it signs with multiple keys.\nThis key is referred to as the ",(0,r.kt)("em",{parentName:"p"},"proposal key"),".\t"),(0,r.kt)("p",null,"Each time an account key is used as a proposal key, its sequence number is incremented by 1.\nThe sequence number is updated after execution,\neven if the transaction fails (reverts) during execution."),(0,r.kt)("p",null,"A transaction is failed if its proposal key does not specify a sequence number\nequal to the sequence number stored on the account ",(0,r.kt)("em",{parentName:"p"},"at execution time."),"\t"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"\t"),(0,r.kt)("p",null,"After the below transaction is executed,\nthe sequence number for ",(0,r.kt)("inlineCode",{parentName:"p"},"Key 7")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"Account 0x01")," will increase to 43."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  // other transaction fields   \n  // ...    \n  "proposalKey": {\n    "address": "0x01",\n    "keyId": 7,\n    "sequenceNumber": 42\n  },\n  "payer": "0x02",\n  "authorizers": [ "0x01" ],\n}\n')),(0,r.kt)("h2",{id:"anatomy-of-a-transaction"},"Anatomy of a Transaction"),(0,r.kt)("p",null,"Due to the existence of weighted keys and split signing roles,\nFlow transactions sometimes need to be signed multiple times by one or more parties.\nThat is, multiple unique signatures may be needed to authorize a single transaction."),(0,r.kt)("p",null,"A transaction can contain two types of signatures: payload signatures and envelope signatures."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transaction Anatomy",src:n(38943).Z,width:"800",height:"574"})),(0,r.kt)("h3",{id:"payload"},"Payload"),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"payload")," is the innermost portion of a transaction and\ncontains the data that uniquely identifies the operations applied by the transaction.\nIn Flow, two transactions with the same payload will never be executed more than once."),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"proposer")," and ",(0,r.kt)("em",{parentName:"p"},"authorizer")," are only required to sign the transaction payload.\nThese signatures are the ",(0,r.kt)("strong",{parentName:"p"},"payload signatures"),"."),(0,r.kt)("h3",{id:"authorization-envelope"},"Authorization Envelope"),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"authorization envelope")," contains both the transaction payload and\nthe payload signatures."),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"payer")," is required to sign the authorization envelope.\nThese signatures are the ",(0,r.kt)("strong",{parentName:"p"},"envelope signatures"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757 Special case: if an account is both the ",(0,r.kt)("em",{parentName:"p"},"payer")," and either a ",(0,r.kt)("em",{parentName:"p"},"proposer")," or ",(0,r.kt)("em",{parentName:"p"},"authorizer"),", it is required only to sign the envelope. ")),(0,r.kt)("h3",{id:"payment-envelope"},"Payment Envelope"),(0,r.kt)("p",null,"The outermost portion of the transaction, which contains the payload and envelope signatures,\nis referred to as the ",(0,r.kt)("em",{parentName:"p"},"payment envelope"),"."),(0,r.kt)("h3",{id:"payer-signs-last"},"Payer Signs Last"),(0,r.kt)("p",null,"The payer must sign the portion of the transaction that contains the payload signatures,\nwhich means that the payer must always sign last. This allows the payer to ensure that\nthey are signing a valid transaction with all of the required payload signatures."),(0,r.kt)("h3",{id:"signature-structure"},"Signature Structure"),(0,r.kt)("p",null,"A transaction signature is a composite structure containing three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address"),(0,r.kt)("li",{parentName:"ul"},"Key ID"),(0,r.kt)("li",{parentName:"ul"},"Signature Data")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"address")," and ",(0,r.kt)("em",{parentName:"p"},"key ID")," fields declare the account key that generated the signature,\nwhich is required in order to verify the signature against the correct public key."),(0,r.kt)("h2",{id:"common-signing-scenarios"},"Common Signing Scenarios"),(0,r.kt)("p",null,"Below are several scenarios in which different signature combinations are\nrequired to authorize a transaction."),(0,r.kt)("h3",{id:"single-party-single-signature"},"Single party, single signature"),(0,r.kt)("p",null,"The simplest Flow transaction declares a single account as the proposer,\npayer and authorizer. In this case, the account can sign the transaction\nwith a single signature."),(0,r.kt)("p",null,"This scenario is only possible if the signature is generated by a key\nwith full signing weight."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x01",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope\n  "envelopeSignatures": [\n    {\n      "address": "0x01",\n      "keyId": 1,\n      "sig": "0xabc123"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"single-party-multiple-signatures"},"Single party, multiple signatures"),(0,r.kt)("p",null,"A transaction that declares a single account as the proposer,\npayer and authorizer may still specify multiple signatures if the account\nuses weighted keys to achieve multi-sig functionality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x01",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope\n  "envelopeSignatures": [\n    {\n      "address": "0x01",\n      "keyId": 1,\n      "sig": "0xabc123"\n    },\n    {\n      "address": "0x01",\n      "keyId": 2,\n      "sig": "0xdef456"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"multiple-parties"},"Multiple parties"),(0,r.kt)("p",null,"A transaction that declares different accounts for each signing role will\nrequire at least one signature from each account."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x02",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [\n    {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 1,\n      "sig": "0xabc123"\n    }\n  ],\n  "envelopeSignatures": [\n    {\n      "address": "0x02",\n      "keyId": 1,\n      "sig": "0xdef456"\n    },\n  ]\n}\n')),(0,r.kt)("h3",{id:"multiple-parties-multiple-signatures"},"Multiple parties, multiple signatures"),(0,r.kt)("p",null,"A transaction that declares different accounts for each signing role\nmay require more than one signature per account if those accounts\nuse weighted keys to achieve multi-sig functionality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{   \n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x02",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [\n    {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 1,\n      "sig": "0xabc123"\n    },\n        {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 2,\n      "sig": "0x123abc"\n    }\n  ],\n  "envelopeSignatures": [\n    {\n      "address": "0x02",\n      "keyId": 1,\n      "sig": "0xdef456"\n    },\n    {\n      "address": "0x02",\n      "keyId": 2,\n      "sig": "0x456def"\n    },\n  ]\n}\n')),(0,r.kt)("p",null,"Thanks for reading and happy hacking! \ud83d\ude80"))}d.isMDXComponent=!0},38943:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transaction-anatomy-13cf2f476897221c02d4d7c1a727c854.png"}}]);