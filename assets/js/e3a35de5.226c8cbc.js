"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7560],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,u=f["".concat(i,".").concat(p)]||f[p]||b[p]||o;return t?a.createElement(u,c(c({ref:n},l),{},{components:t})):a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[f]="string"==typeof e?e:r,c[1]=d;for(var s=2;s<o;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"Staking and Delegation rewards",sidebar_title:"Staking rewards",description:"How to check the staking and delegation rewards"},c=void 0,d={unversionedId:"nodes/staking/staking-rewards",id:"version-legacy/nodes/staking/staking-rewards",title:"Staking and Delegation rewards",description:"How to check the staking and delegation rewards",source:"@site/versioned_docs/version-legacy/nodes/staking/staking-rewards.mdx",sourceDirName:"nodes/staking",slug:"/nodes/staking/staking-rewards",permalink:"/docs/nodes/staking/staking-rewards",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Staking and Delegation rewards",sidebar_title:"Staking rewards",description:"How to check the staking and delegation rewards"},sidebar:"tutorialSidebar",previous:{title:"Options for Building Staking Integrations",permalink:"/docs/nodes/staking/staking-options"},next:{title:"Query Staking Info with Scripts or Events",permalink:"/docs/nodes/staking/staking-scripts-events"}},i={},s=[{value:"Current method to check staking rewards",id:"current-method-to-check-staking-rewards",level:2},{value:"New method to check staking rewards",id:"new-method-to-check-staking-rewards",level:2}],l={toc:s},f="wrapper";function b(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"current-method-to-check-staking-rewards"},"Current method to check staking rewards"),(0,r.kt)("p",null,"Every week, the Flow governance committee executes the reward payout transaction.\nWhen the transaction executes, it generates events for the rewards paid to each node and delegator.\nTo check the staking and delegation rewards, that transaction should be queried."),(0,r.kt)("p",null,"Example using ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli"},"Flow cli")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ flow transactions get 84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84 -n mainnet\n\nStatus      \u2705 SEALED\nID      84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\nPayer       e467b9dd11fa00df\nAuthorizers [e467b9dd11fa00df]\n\nProposal Key:\n    Address e467b9dd11fa00df\n    Index   11\n    Sequence    118\n\nNo Payload Signatures\n\nEnvelope Signature 0: e467b9dd11fa00df\nEnvelope Signature 1: e467b9dd11fa00df\nEnvelope Signature 2: e467b9dd11fa00df\nEnvelope Signature 3: e467b9dd11fa00df\nEnvelope Signature 4: e467b9dd11fa00df\nSignatures (minimized, use --include signatures)\n\nEvents:\n    Index   0\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 64.59694884\n        - from (Address?): 0xf919ee77447b7497\n\n    Index   1\n    Type    A.f919ee77447b7497.FlowFees.TokensWithdrawn\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 64.59694884\n\n    Index   2\n    Type    A.1654653399040a61.FlowToken.TokensMinted\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 1326397.40305116\n\n    Index   3\n    Type    A.1654653399040a61.FlowToken.TokensDeposited\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 1326397.40305116\n        - to (Never?): nil\n\n    Index   4\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 1004.16460872\n        - from (Never?): nil\n\n    Index   5\n    Type    A.1654653399040a61.FlowToken.TokensDeposited\n    Tx ID   84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84\n    Values\n        - amount (UFix64): 1004.16460872\n        - to (Address?): 0x8624b52f9ddcd04a\n   ...\n   ...\n   <clipped for brevity>\n")),(0,r.kt)("p",null,"Example using ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-go-sdk"},"Flow Go SDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/onflow/flow-go-sdk"\n    client "github.com/onflow/flow-go-sdk/access/grpc"\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials/insecure"\n)\n\nfunc main() {\n\n    // the Flow mainnet community Access node API endpoint\n    accessNodeAddress := "access.mainnet.nodes.onflow.org:9000"\n\n    maxGRPCMessageSize := 1024 * 1024 * 20 // to accommodate for the large transaction payload\n\n    // create a gRPC client for the Access node\n    accessNodeClient, err := client.NewClient(accessNodeAddress,\n        grpc.WithTransportCredentials(insecure.NewCredentials()),\n        grpc.WithDefaultCallOptions(grpc.MaxCallRecvMsgSize(maxGRPCMessageSize)))\n    if err != nil {\n        fmt.Println("err:", err.Error())\n        panic(err)\n    }\n\n    ctx := context.Background()\n\n    txID := flow.HexToID("84eca4ff612ef70047d60510710cca872c8a17c1bd9f63686e74852b6382cc84")\n\n    rewardsTxResult, err := accessNodeClient.GetTransactionResult(ctx, txID)\n    if err != nil {\n        panic(err)\n    }\n\n    for _, event := range rewardsTxResult.Events {\n        fmt.Println("Event type: " + event.Type)\n        fmt.Println("Event: " + event.Value.String())\n        fmt.Println("Event payload: " + string(event.Payload))\n    }\n}\n')),(0,r.kt)("h2",{id:"new-method-to-check-staking-rewards"},"New method to check staking rewards"),(0,r.kt)("p",null,"As part of the new method, rewards payout will happen automatically after the end of the epoch and without the need of an explicit transaction being submitted by the service account.\nInstead of a separate reward payout transaction, the reward payout events will be recorded in the system chunk in the block that is produced at the time of the epoch transition without creating a regular transaction ID."),(0,r.kt)("p",null,"The rewards payout can be queried by querying the block which contains the system chunk that contains the reward payout events."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flow events get A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid --start <block Height> --end <block height> -n mainnet\n\nwhere block height is the height of the block containing the rewards payout events\n")),(0,r.kt)("p",null,"Example (using testnet instead of mainnet)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ flow --host=access.devnet.nodes.onflow.org:9000 events get A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid --start 96961750 --end 96961750\n\nEvents Block #96961750:\n    Index   48\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "4261737469616e204d756c6c65720055a00e2aa117a9a908f57867833819b3c9"\n        - amount (UFix64): 7.43750000\n\n    Index   51\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "546172616b2042656e20596f7573736566006237a53e71d7caca97655e05690b"\n        - amount (UFix64): 7.43751951\n\n    Index   60\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "cbefb4fa84e843a45abb351c4d1041fda5fdc9517a37c0bed4881ee073681a4d"\n        - amount (UFix64): 0.80325094\n\n    Index   69\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "5f6c73a22445d7d958c6a37c1f3be99c72cacd39894a3e46d6647a9adb007b4d"\n        - amount (UFix64): 7.43750000\n\n    Index   72\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "416e647265772042757269616e00a2c4cd7d1b78bb62d3f005bb968b52ff0d0e"\n        - amount (UFix64): 7.43750052\n\n    Index   78\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "79f039c41539dd93e4ab82688ce7bd0ee37519a069a92e50d4a27f530ff213f6"\n        - amount (UFix64): 2.97500000\n\n    Index   81\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "4a616d65732048756e746572000e00bbde823f31b3c9728bdacc767e469cd6cb"\n        - amount (UFix64): 7.43750000\n\n    Index   84\n    Type    A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid\n    Tx ID   b302ae591011d2bca9679ee2d7271bc827f86f921f03c2696927d57480b315e3\n    Values\n        - nodeID (String): "f0d7e1f46f1a8bd04984bd4842133b44cb9b0c217f037d3ccc80a1596b3eadeb"\n        - amount (UFix64): 0.80325000\n\n    ...\n    ...\n   <clipped for brevity>\n')),(0,r.kt)("p",null,"Example using ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-go-sdk"},"Flow Go SDK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'package main\n\nimport (\n    "context"\n    "fmt"\n    client "github.com/onflow/flow-go-sdk/access/grpc"\n)\n\nfunc main() {\n\n    // the Flow testnet community Access node API endpoint\n    accessNodeAddress := "access.testnet.nodes.onflow.org:9000"\n\n    // create a gRPC client for the Access node\n    accessNodeClient, err := client.NewClient(accessNodeAddress)\n    if err != nil {\n        fmt.Println("err:", err.Error())\n        panic(err)\n    }\n\n    ctx := context.Background()\n\n    blockEvents, err := accessNodeClient.GetEventsForHeightRange(ctx,\n        "A.9eca2b38b18b5dfe.FlowIDTableStaking.RewardsPaid",\n        96961750,\n        96961750)\n    if err != nil {\n        panic(err)\n    }\n\n    for _, blockEvent := range blockEvents {\n        fmt.Println("Block: " + blockEvent.BlockID.String())\n        for _, event := range blockEvent.Events {\n            fmt.Println("\\tEvent type: " + event.Type)\n            fmt.Println("\\tEvent: " + event.Value.String())\n            fmt.Println("\\tEvent payload: " + string(event.Payload))\n        }\n    }\n}\n')))}b.isMDXComponent=!0}}]);