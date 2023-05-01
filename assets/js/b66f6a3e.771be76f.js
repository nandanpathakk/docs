"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[22885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||a;return n?o.createElement(g,i(i({ref:t},h),{},{components:n})):o.createElement(g,i({ref:t},h))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={title:"Node Migration",description:"How to migrate a Flow node from one machine to another"},i=void 0,d={unversionedId:"nodes/node-operation/node-migration",id:"version-legacy/nodes/node-operation/node-migration",title:"Node Migration",description:"How to migrate a Flow node from one machine to another",source:"@site/versioned_docs/version-legacy/nodes/node-operation/node-migration.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/node-migration",permalink:"/docs/nodes/node-operation/node-migration",draft:!1,tags:[],version:"legacy",lastUpdatedBy:"Alex",lastUpdatedAt:1682971554,formattedLastUpdatedAt:"May 1, 2023",frontMatter:{title:"Node Migration",description:"How to migrate a Flow node from one machine to another"},sidebar:"tutorialSidebar",previous:{title:"Node Bootstrap",permalink:"/docs/nodes/node-operation/node-bootstrap"},next:{title:"Provisioning a Flow node",permalink:"/docs/nodes/node-operation/node-provisioning"}},s={},l=[{value:"Method 1 - No change to the node staking data",id:"method-1---no-change-to-the-node-staking-data",level:3},{value:"Method 2 - Network address change",id:"method-2---network-address-change",level:3},{value:"Method 3 - Staking or networking key change",id:"method-3---staking-or-networking-key-change",level:3}],h=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const c={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are a few different methods to migrate a running Flow node from one machine to the other."),(0,r.kt)("p",null,"Choose the method depending upon what part of the staking data of the node is changing."),(0,r.kt)("h3",{id:"method-1---no-change-to-the-node-staking-data"},"Method 1 - No change to the node staking data"),(0,r.kt)("p",null,"If there is no change to the network address or the staking and networking keys and only the hardware the node is running needs to be changed then do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the Flow node."),(0,r.kt)("li",{parentName:"ol"},"Copy over the bootstrap data (typically under ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/flow/bootstrap"),") which contains the node private key to the new machine."),(0,r.kt)("li",{parentName:"ol"},"Copy over the data folder (typically under ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/flow/data"),") which contains the state data."),(0,r.kt)("li",{parentName:"ol"},"Start the new node on the same network address as the old one.")),(0,r.kt)(h,{type:"warning",mdxType:"Callout"},"Please ensure that there is minimal downtime during this migration."),(0,r.kt)(h,{type:"warning",mdxType:"Callout"},"The network address is currently part of the staking data that was submitted for the node. It is how other nodes in the network discover this node. Hence, the network address of the node must stay the same between epochs otherwise the node will become unreachable for the other nodes and stop functioning."),(0,r.kt)("h3",{id:"method-2---network-address-change"},"Method 2 - Network address change"),(0,r.kt)("p",null,"A change to the node network address (IP or a hostname) can only be done during the spork process."),(0,r.kt)("p",null,"To change the networking address:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A day before the ",(0,r.kt)("a",{parentName:"li",href:"/nodes/node-operation/upcoming-sporks"},"upcoming mainnet spork"),", change the network address for the nodes in Flow Port (using the update network address feature).\nThe change will not take effect till an epoch transition happens."),(0,r.kt)("li",{parentName:"ol"},"Change the addresses in the ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/flow/bootstrap/private-root-information/private-node-info_<nodeid>/node-info.priv.json")," json file on the node."),(0,r.kt)("li",{parentName:"ol"},"A spork also causes an epoch transition, and the new addresses will take effect after the spork immediately.")),(0,r.kt)("h3",{id:"method-3---staking-or-networking-key-change"},"Method 3 - Staking or networking key change"),(0,r.kt)("p",null,"If the node after migration will be using new staking or networking keys then it needs to be unstaked and then re-staked with the new keys."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unstake the node via Flow Port."),(0,r.kt)("li",{parentName:"ol"},"Register the new node via Flow Port with the new staking information."),(0,r.kt)("li",{parentName:"ol"},"Run the new node with the new keys and network address. It should be able to join the network at the next epoch (see ",(0,r.kt)("a",{parentName:"li",href:"/nodes/node-operation/node-bootstrap#timing"},"timing"),")")),(0,r.kt)(h,{type:"warning",mdxType:"Callout"},"Unstaking a node will result in the node [not earning rewards](staking/technical-overview/#staking-operations-available-to-all-stakers) for the next epoch. Delegators to the old node will have their tokens unstaked automatically. They will also stop earning rewards unless they withdraw their unstaked tokens and delegate them to a different node."))}g.isMDXComponent=!0}}]);