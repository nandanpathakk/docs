"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[38128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Jest Helpers",sidebar_title:"Jest Helpers",description:"Helper methods for Jest"},s=void 0,i={unversionedId:"Tooling/flow-js-testing/jest-helpers",id:"Tooling/flow-js-testing/jest-helpers",title:"Jest Helpers",description:"Helper methods for Jest",source:"@site/docs/Tooling/flow-js-testing/jest-helpers.md",sourceDirName:"Tooling/flow-js-testing",slug:"/Tooling/flow-js-testing/jest-helpers",permalink:"/docs/next/Tooling/flow-js-testing/jest-helpers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Jest Helpers",sidebar_title:"Jest Helpers",description:"Helper methods for Jest"},sidebar:"tutorialSidebar",previous:{title:"Install Flow Javascript Testing Framework",permalink:"/docs/next/Tooling/flow-js-testing/install"},next:{title:"Send Transactions",permalink:"/docs/next/Tooling/flow-js-testing/send-transactions"}},o={},p=[{value:"<code>shallPass(ix)</code>",id:"shallpassix",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"shallRevert(ix, message)",id:"shallrevertix-message",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"shallResolve(ix)",id:"shallresolveix",level:2},{value:"Arguments",id:"arguments-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"shallHavePath(account, path)",id:"shallhavepathaccount-path",level:2},{value:"Arguments",id:"arguments-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Usage",id:"usage-3",level:4},{value:"shallHaveStorageValue(account, params)",id:"shallhavestoragevalueaccount-params",level:2},{value:"Arguments",id:"arguments-4",level:4},{value:"Returns",id:"returns-4",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to simplify the process even further we've created several Jest-based methods, which will help you to catch\nthrown errors and ensure your code works as intended."),(0,r.kt)("h2",{id:"shallpassix"},(0,r.kt)("inlineCode",{parentName:"h2"},"shallPass(ix)")),(0,r.kt)("p",null,"Ensure transaction did not throw and was sealed."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/api#interaction"},"Interaction")),(0,r.kt)("td",{parentName:"tr",align:null},"interaction, either in form of a Promise or function")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction result")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {\n  init,\n  emulator,\n  shallPass,\n  sendTransaction,\n  getAccountAddress,\n} from "@onflow/flow-js-testing"\n\n// We need to set timeout for a higher number, because some transactions might take up some time\njest.setTimeout(10000)\n\ndescribe("interactions - sendTransaction", () => {\n  // Instantiate emulator and path to Cadence files\n  beforeEach(async () => {\n    const basePath = path.resolve(__dirname, "./cadence")\n    await init(basePath)\n    return emulator.start()\n  })\n\n  // Stop emulator, so it could be restarted\n  afterEach(async () => {\n    return emulator.stop()\n  })\n\n  test("basic transaction", async () => {\n    const code = `\n      transaction(message: String){\n        prepare(singer: AuthAccount){\n          log(message)\n        }\n      }\n    `\n    const Alice = await getAccountAddress("Alice")\n    const signers = [Alice]\n    const args = ["Hello, Cadence"]\n\n    const [txResult, error] = await shallPass(\n      sendTransaction({\n        code,\n        signers,\n        args,\n      })\n    )\n\n    // Transaction result will hold status, events and error message\n    console.log(txResult, error)\n  })\n})\n')),(0,r.kt)("h2",{id:"shallrevertix-message"},"shallRevert(ix, message)"),(0,r.kt)("p",null,"Ensure interaction throws an error. Can test for specific error messages or catch any error message if ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is not provided.\nReturns Promise, which contains result, when resolved."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/api#interaction"},"Interaction")),(0,r.kt)("td",{parentName:"tr",align:null},"transaction, either in form of a Promise or function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"message")," ",(0,r.kt)("strong",{parentName:"td"},"(optional)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"RegExp")),(0,r.kt)("td",{parentName:"tr",align:null},"expected error message provided as either a string equality or regular expression to match, matches any error by default")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction result")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {\n  init,\n  emulator,\n  shallPass,\n  sendTransaction,\n  getAccountAddress,\n} from "js-testing-framework"\n\n// We need to set timeout for a higher number, cause some interactions might need more time\njest.setTimeout(10000)\n\ndescribe("interactions - sendTransaction", () => {\n  // Instantiate emulator and path to Cadence files\n  beforeEach(async () => {\n    const basePath = path.resolve(__dirname, "./cadence")\n    await init(basePath)\n    return emulator.start()\n  })\n\n  // Stop emulator, so it could be restarted\n  afterEach(async () => {\n    return emulator.stop()\n  })\n\n  test("basic transaction", async () => {\n    const code = `\n      transaction(message: String){\n        prepare(singer: AuthAccount){\n          panic("You shall not pass!")\n        }\n      }\n    `\n    const Alice = await getAccountAddress("Alice")\n    const signers = [Alice]\n    const args = ["Hello, Cadence"]\n\n    const [txResult, error] = await shallRevert(\n      sendTransaction({\n        code,\n        signers,\n        args,\n      })\n    )\n\n    // Transaction result will hold status, events and error message\n    console.log(txResult, error)\n  })\n})\n')),(0,r.kt)("h2",{id:"shallresolveix"},"shallResolve(ix)"),(0,r.kt)("p",null,"Ensure interaction resolves without throwing errors."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/Tooling/flow-js-testing/api#interaction"},"Interaction")),(0,r.kt)("td",{parentName:"tr",align:null},"interaction, either in form of a Promise or function")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction result")))),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {init, emulator, shallPass, executeScript} from "js-testing-framework"\n\n// We need to set timeout for a higher number, cause some interactions might need more time\njest.setTimeout(10000)\n\ndescribe("interactions - sendTransaction", () => {\n  // Instantiate emulator and path to Cadence files\n  beforeEach(async () => {\n    const basePath = path.resolve(__dirname, "./cadence")\n    await init(basePath)\n    return emulator.start()\n  })\n\n  // Stop emulator, so it could be restarted\n  afterEach(async () => {\n    return emulator.stop()\n  })\n\n  test("basic script", async () => {\n    const code = `\n      pub fun main():Int{\n        return 42\n      }\n    `\n\n    const [result, error] = await shallResolve(\n      executeScript({\n        code,\n      })\n    )\n\n    expect(result).toBe(42)\n    expect(error).toBe(null)\n  })\n})\n')),(0,r.kt)("h2",{id:"shallhavepathaccount-path"},"shallHavePath(account, path)"),(0,r.kt)("p",null,"Asserts that the given account has the given path enabled."),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The address or name of the account to check for the path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The path to check for.")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<void>")),(0,r.kt)("td",{parentName:"tr",align:null},"A Promise that resolves when the assertion is complete, or rejects with an error if it fails.")))),(0,r.kt)("h4",{id:"usage-3"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {init, emulator, shallPass, executeScript} from "js-testing-framework"\n\n// We need to set timeout for a higher number, cause some interactions might need more time\njest.setTimeout(10000)\n\ndescribe("interactions - sendTransaction", () => {\n  // Instantiate emulator and path to Cadence files\n  beforeEach(async () => {\n    const basePath = path.resolve(__dirname, "./cadence")\n    await init(basePath)\n    return emulator.start()\n  })\n\n  // Stop emulator, so it could be restarted\n  afterEach(async () => {\n    return emulator.stop()\n  })\n\n  describe("check path with Jest helper", () => {\n    test("pass account address", async () => {\n      const Alice = await getAccountAddress("Alice")\n      await shallHavePath(Alice, "/storage/flowTokenVault")\n    })\n\n    test("pass account name", async () => {\n      await shallHavePath("Alice", "/storage/flowTokenVault")\n    })\n  })\n})\n')),(0,r.kt)("h2",{id:"shallhavestoragevalueaccount-params"},"shallHaveStorageValue(account, params)"),(0,r.kt)("p",null,"Asserts that the given account has the expected storage value at the given path."),(0,r.kt)("h4",{id:"arguments-4"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"account")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The address or name of the account to check for the storage value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{pathName: string, key?: string, expect: any}")),(0,r.kt)("td",{parentName:"tr",align:null},"An object containing the path name, optional key, and expected value of the storage at the given path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.pathName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the storage value to retrieve.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params.key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," (optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The key of the value to retrieve from the storage at the given path, if applicable.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expect")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The expected value of the storage at the given path and key (if applicable).")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Promise<void>")),(0,r.kt)("td",{parentName:"tr",align:null},"A Promise that resolves when the assertion is complete, or rejects with an error if it fails.")))))}c.isMDXComponent=!0}}]);