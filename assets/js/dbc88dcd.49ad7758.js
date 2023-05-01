"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2714],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={title:"Accounts, Keys & Signing"},i=void 0,o={unversionedId:"Learn/Concepts/accounts-and-keys",id:"version-legacy/Learn/Concepts/accounts-and-keys",title:"Accounts, Keys & Signing",description:"Flow introduces new features to give applications and end users more safety and flexibility when managing keys, accounts and the assets inside them.",source:"@site/versioned_docs/version-legacy/1.Learn/Concepts/accounts-and-keys.md",sourceDirName:"1.Learn/Concepts",slug:"/Learn/Concepts/accounts-and-keys",permalink:"/docs/Learn/Concepts/accounts-and-keys",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Accounts, Keys & Signing"},sidebar:"tutorialSidebar",previous:{title:"Flow Testnet",permalink:"/docs/Learn/Concepts/accessing-testnet"},next:{title:"Delegation",permalink:"/docs/Learn/Concepts/delegation"}},s={},u=[{value:"Accounts",id:"accounts",level:2},{value:"Account Creation",id:"account-creation",level:3},{value:"Account Addresses",id:"account-addresses",level:3},{value:"Keys",id:"keys",level:2},{value:"Adding a Key to an Account",id:"adding-a-key-to-an-account",level:3},{value:"Revoking a Key From an Account",id:"revoking-a-key-from-an-account",level:3},{value:"Supported Signature &amp; Hash Algorithms",id:"supported-signature--hash-algorithms",level:3},{value:"Weighted Keys",id:"weighted-keys",level:3},{value:"Signing a Transaction",id:"signing-a-transaction",level:2},{value:"Signer Roles",id:"signer-roles",level:3},{value:"Proposal Key",id:"proposal-key",level:3},{value:"Sequence Numbers",id:"sequence-numbers",level:3},{value:"Anatomy of a Transaction",id:"anatomy-of-a-transaction",level:3},{value:"Payload",id:"payload",level:4},{value:"Authorization Envelope",id:"authorization-envelope",level:4},{value:"Payment Envelope",id:"payment-envelope",level:4},{value:"Payer Signs Last",id:"payer-signs-last",level:4},{value:"Signature Structure",id:"signature-structure",level:4},{value:"Common Signing Scenarios",id:"common-signing-scenarios",level:3},{value:"Single party, single signature",id:"single-party-single-signature",level:4},{value:"Single party, multiple signatures",id:"single-party-multiple-signatures",level:4},{value:"Multiple parties",id:"multiple-parties",level:4},{value:"Multiple parties, multiple signatures",id:"multiple-parties-multiple-signatures",level:4}],p={toc:u},c="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Flow introduces new features to give applications and end users more safety and flexibility when managing keys, accounts and the assets inside them."),(0,r.kt)("h2",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"An account on Flow is a record in the chain state that holds the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Address")," - unique identifier for the account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Balance")," - default token balance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Public Keys")," - public keys authorized on the account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Code")," - Cadence contracts deployed to the account"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage")," - area of the account used to store resource assets")),(0,r.kt)("h3",{id:"account-creation"},"Account Creation"),(0,r.kt)("p",null,"Unlike Bitcoin and Ethereum, Flow addresses are not derived from cryptographic\npublic keys. Instead, each Flow address is assigned by an on-chain function\nthat follows a deterministic addressing sequence."),(0,r.kt)("p",null,"This decoupling allows for multiple public keys to be associated with one account,\nor for a single public key to be used across several accounts."),(0,r.kt)("p",null,"Users must submit an ",(0,r.kt)("em",{parentName:"p"},"account creation transaction")," to create a new account. These transactions behave like any other transaction, and therefore must have a payer."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Who will pay to create my account?")),(0,r.kt)("p",null,"Account creation fees are relatively low, and we expect that wallet providers and exchanges will cover the cost when a user converts fiat to crypto for the first time."),(0,r.kt)("p",null,"Conceptually, this isn't much different than other chains. On Bitcoin and Ethereum, it's possible to reserve an account address offline, but the account isn't visible to the network until somebody submits (and pays for) a transaction to that address."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What does an account creation transaction look like?")),(0,r.kt)("p",null,"Here's an example of how to submit an account creation transaction with the Go SDK: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk/blob/master/examples/create_account/main.go"},"Account Creation Example"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"What about smart contracts?")),(0,r.kt)("p",null,"Ethereum draws a distinction between accounts and contracts, both of which are addressable. Ethereum contracts are immutable and cannot be upgraded after deployment."),(0,r.kt)("p",null,"To achieve the same in Flow, create an account with deployed code and an empty list of authorized keys. This renders the account immutable by making it impossible to authorize a transaction that would mutate the account code."),(0,r.kt)("h3",{id:"account-addresses"},"Account Addresses"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Documentation coming soon...")),(0,r.kt)("h2",{id:"keys"},"Keys"),(0,r.kt)("p",null,"Flow accounts can be configured with multiple public keys that are used to control access. Owners of the associated private keys can sign transactions to mutate the account's state."),(0,r.kt)("h3",{id:"adding-a-key-to-an-account"},"Adding a Key to an Account"),(0,r.kt)("p",null,"When adding a public key to an account, you must specify the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ID (used to identify key within an account)"),(0,r.kt)("li",{parentName:"ul"},"Raw public key (encoded as bytes)"),(0,r.kt)("li",{parentName:"ul"},"Signature algorithm (see codes below)"),(0,r.kt)("li",{parentName:"ul"},"Hash algorithm (see codes below)"),(0,r.kt)("li",{parentName:"ul"},"Weight (integer between 1-1000)")),(0,r.kt)("p",null,"The signature algorithm is included because Flow has the potential to support a variety of signatures schemes with different parameters. The included hashing algorithm specifies the hashing function used to verify signatures."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How are keys added to an account?")),(0,r.kt)("p",null,"To add keys to an account, you can submit a transaction that is authorized to access that account."),(0,r.kt)("p",null,"Here's an example of how to add an account key with the Go SDK: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go-sdk/blob/master/examples/add_account_key/main.go"},"Add Account Key Example"),"."),(0,r.kt)("h3",{id:"revoking-a-key-from-an-account"},"Revoking a Key From an Account"),(0,r.kt)("p",null,"Feature and documentation coming soon..."),(0,r.kt)("h3",{id:"supported-signature--hash-algorithms"},"Supported Signature & Hash Algorithms"),(0,r.kt)("p",null,"Flow will have initial support for a predefined set of signature and hash pairings, but more curves and algorithms will be added in the future."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature Algorithms")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("th",{parentName:"tr",align:null},"Curve"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA"),(0,r.kt)("td",{parentName:"tr",align:null},"P-256"),(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA_P256"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA"),(0,r.kt)("td",{parentName:"tr",align:null},"secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA_secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Please note that the codes listed here are for the signature algorithms as used by the node API, and they are different from the ones ",(0,r.kt)("a",{parentName:"em",href:"https://docs.onflow.org/cadence/language/crypto/#signing-algorithms"},"defined in Cadence"))),(0,r.kt)("p",null,"There are two curves commonly used with the ECDSA algorithm, secp256r1 (",(0,r.kt)("a",{parentName:"p",href:"http://oid-info.com/get/1.2.840.10045.3.1.7"},"OID 1.2.840.10045.3.1.7"),', also called the "NIST P-256." curve), and secp256k1 (',(0,r.kt)("a",{parentName:"p",href:"http://oid-info.com/get/1.3.132.0.10"},"OID 1.3.132.0.10"),', the curve used by "Bitcoin"). Please be sure to double-check which parameters you are using before registering a key, as presenting a key using one of the curves under the code and format of the other will generate an error.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hash Algorithms")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("th",{parentName:"tr",align:null},"Output Size"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Code"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA-2"),(0,r.kt)("td",{parentName:"tr",align:null},"256"),(0,r.kt)("td",{parentName:"tr",align:null},"SHA2_256"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHA-3"),(0,r.kt)("td",{parentName:"tr",align:null},"256"),(0,r.kt)("td",{parentName:"tr",align:null},"SHA3_256"),(0,r.kt)("td",{parentName:"tr",align:null},"3")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Compatibility Table")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"SHA2_256"),(0,r.kt)("th",{parentName:"tr",align:null},"SHA3_256"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA_P256"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA_secp256k1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h3",{id:"weighted-keys"},"Weighted Keys"),(0,r.kt)("p",null,"Each account key has a weight that determines the signing power it holds. A transaction is not authorized to access an account unless it has a total signature weight greater than or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),", the weight threshold."),(0,r.kt)("p",null,"For example, an account might contain the following keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Key ID: 1, Weight: 500"),(0,r.kt)("li",{parentName:"ul"},"Key ID: 2, Weight: 500"),(0,r.kt)("li",{parentName:"ul"},"Key ID: 3, Weight: 500")),(0,r.kt)("p",null,"This represents a 2-of-3 multisig quorum, in which a transaction is authorized to access the account if it receives signatures from ",(0,r.kt)("em",{parentName:"p"},"at least")," 2 out of 3 keys."),(0,r.kt)("h2",{id:"signing-a-transaction"},"Signing a Transaction"),(0,r.kt)("p",null,"Signing a transaction for Flow is a multi-step process that can involve one or more accounts, each of which signs for a different purpose."),(0,r.kt)("h3",{id:"signer-roles"},"Signer Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Proposer:")," the account that specifies a ",(0,r.kt)("a",{parentName:"li",href:"#proposal-key"},"proposal key"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Payer:")," the account paying for the transaction fees."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Authorizers:")," zero or more accounts authorizing the transaction to mutate their state.")),(0,r.kt)("h3",{id:"proposal-key"},"Proposal Key"),(0,r.kt)("p",null,"Each transaction must declare a proposal key, which can be an account key from any Flow account. The account that owns the proposal key is referred to as the proposer."),(0,r.kt)("p",null,"A proposal key definition declares the address, key ID, and up-to-date sequence number for the account key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // other transaction fields\n  // ...\n  "proposalKey": {\n    "address": "0x01",\n    "keyId": 7,\n    "sequenceNumber": 42\n  }\n}\n')),(0,r.kt)("h3",{id:"sequence-numbers"},"Sequence Numbers"),(0,r.kt)("p",null,"Flow uses sequence numbers to ensure that each transaction runs at most once. This prevents many unwanted situations such as ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Replay_attack"},"transaction replay attacks"),"."),(0,r.kt)("p",null,"Sequence numbers work similarly to transaction nonces in Ethereum, but with several key differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Each key in an account has a dedicated sequence number")," associated with it. Unlike Ethereum, there is no sequence number for the entire account."),(0,r.kt)("li",{parentName:"ul"},"When creating a transaction, only the ",(0,r.kt)("strong",{parentName:"li"},"proposer must specify a sequence number"),". Payers and authorizers are not required to.")),(0,r.kt)("p",null,"The transaction proposer is only required to specify a sequence number for a single account key, even it if signs with multiple keys. This key is referred to as the ",(0,r.kt)("em",{parentName:"p"},"proposal key"),"."),(0,r.kt)("p",null,"Each time an account key is used as a proposal key, its sequence number is incremented by 1. The sequence number is updated after execution, even if the transaction fails (reverts) during execution."),(0,r.kt)("p",null,"A transaction is rejected if its proposal key does not specify a sequence number equal to the sequence number stored on the account ",(0,r.kt)("em",{parentName:"p"},"at execution time.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"After the below transaction is executed, the sequence number for ",(0,r.kt)("inlineCode",{parentName:"p"},"Key 7")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"Account 0x01")," will increase to 43."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  // other transaction fields\n  // ...\n  "proposalKey": {\n    "address": "0x01",\n    "keyId": 7,\n    "sequenceNumber": 42\n  },\n  "payer": "0x02",\n  "authorizers": [ "0x01" ],\n}\n')),(0,r.kt)("h3",{id:"anatomy-of-a-transaction"},"Anatomy of a Transaction"),(0,r.kt)("p",null,"Due to the existence of weighted keys and split signing roles, Flow transactions sometimes need to be signed multiple times by one or more parties. That is, multiple unique signatures may be needed to authorize a single transaction."),(0,r.kt)("p",null,"A transaction can contain two types of signatures: payload signatures and envelope signatures."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transaction Anatomy",src:a(38943).Z,width:"800",height:"574"})),(0,r.kt)("h4",{id:"payload"},"Payload"),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"payload")," is the innermost portion of a transaction and contains the data that uniquely identifies the operations applied by the transaction. In Flow, two transactions with the same payload will never be executed more than once."),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"proposer")," and ",(0,r.kt)("em",{parentName:"p"},"authorizer")," are only required to sign the transaction payload. These signatures are the ",(0,r.kt)("strong",{parentName:"p"},"payload signatures"),"."),(0,r.kt)("h4",{id:"authorization-envelope"},"Authorization Envelope"),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"authorization envelope")," contains both the transaction payload and the payload signatures."),(0,r.kt)("p",null,"The transaction ",(0,r.kt)("em",{parentName:"p"},"payer")," is required to sign the authorization envelope. These signatures are the ",(0,r.kt)("strong",{parentName:"p"},"envelope signatures"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757 Special case: if an account is both the ",(0,r.kt)("em",{parentName:"p"},"payer")," and either a ",(0,r.kt)("em",{parentName:"p"},"proposer")," or ",(0,r.kt)("em",{parentName:"p"},"authorizer"),", it is only required to sign the envelope.")),(0,r.kt)("h4",{id:"payment-envelope"},"Payment Envelope"),(0,r.kt)("p",null,"The outermost portion of the transaction, which contains the payload and envelope signatures, is referred to as the ",(0,r.kt)("em",{parentName:"p"},"payment envelope"),"."),(0,r.kt)("h4",{id:"payer-signs-last"},"Payer Signs Last"),(0,r.kt)("p",null,"The payer must sign the portion of the transaction that contains the payload signatures, which means that the payer must always sign last. This allows the payer to ensure that they are signing a valid transaction with all of the required payload signatures."),(0,r.kt)("h4",{id:"signature-structure"},"Signature Structure"),(0,r.kt)("p",null,"A transaction signature is a composite structure containing three fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Address"),(0,r.kt)("li",{parentName:"ul"},"Key ID"),(0,r.kt)("li",{parentName:"ul"},"Signature Data")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"address")," and ",(0,r.kt)("em",{parentName:"p"},"key ID")," fields declare the account key that generated the signature, which is required in order to verify the signature against the correct public key."),(0,r.kt)("h3",{id:"common-signing-scenarios"},"Common Signing Scenarios"),(0,r.kt)("p",null,"Below are several scenarios in which different signature combinations are required to authorize a transaction."),(0,r.kt)("h4",{id:"single-party-single-signature"},"Single party, single signature"),(0,r.kt)("p",null,"The simplest Flow transaction declares a single account as the proposer, payer and authorizer. In this case, the account can sign the transaction with a single signature."),(0,r.kt)("p",null,"Since the proposal key must always have a valid signature, this scenario is only possible if the proposal key has full signing weight."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x01",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope\n  "envelopeSignatures": [\n    {\n      "address": "0x01",\n      "keyId": 1,\n      "sig": "0xabc123"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"single-party-multiple-signatures"},"Single party, multiple signatures"),(0,r.kt)("p",null,"A transaction that declares a single account as the proposer, payer and authorizer may still specify multiple signatures if the account uses weighted keys to achieve multi-sig functionality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x01",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [], // 0x01 is the payer, so only needs to sign envelope\n  "envelopeSignatures": [\n    {\n      "address": "0x01",\n      "keyId": 1,\n      "sig": "0xabc123"\n    },\n    {\n      "address": "0x01",\n      "keyId": 2,\n      "sig": "0xdef456"\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"multiple-parties"},"Multiple parties"),(0,r.kt)("p",null,"A transaction that declares different accounts for each signing role will require at least one signature from each account."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x02",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [\n    {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 1,\n      "sig": "0xabc123"\n    }\n  ],\n  "envelopeSignatures": [\n    {\n      "address": "0x02",\n      "keyId": 1,\n      "sig": "0xdef456"\n    },\n  ]\n}\n')),(0,r.kt)("h4",{id:"multiple-parties-multiple-signatures"},"Multiple parties, multiple signatures"),(0,r.kt)("p",null,"A transaction that declares different accounts for each signing role may require more than one signature per account if those accounts use weighted keys to achieve multi-sig functionality."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Account"),(0,r.kt)("th",{parentName:"tr",align:null},"Key ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x01")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x02")),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"500")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "payload": {\n    "proposalKey": {\n      "address": "0x01",\n      "keyId": 1,\n      "sequenceNumber": 42\n    },\n    "payer": "0x02",\n    "authorizers": [ "0x01" ]\n  },\n  "payloadSignatures": [\n    {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 1,\n      "sig": "0xabc123"\n    },\n        {\n      "address": "0x01", // 0x01 is not payer, so only signs payload\n      "keyId": 2,\n      "sig": "0x123abc"\n    }\n  ],\n  "envelopeSignatures": [\n    {\n      "address": "0x02",\n      "keyId": 1,\n      "sig": "0xdef456"\n    },\n    {\n      "address": "0x02",\n      "keyId": 2,\n      "sig": "0x456def"\n    },\n  ]\n}\n')))}d.isMDXComponent=!0},38943:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transaction-anatomy-13cf2f476897221c02d4d7c1a727c854.png"}}]);