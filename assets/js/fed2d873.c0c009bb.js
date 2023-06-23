"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[74446],{17478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});t(67294);var s=t(85893),i=t(11151);const o={title:"Fungible Token (FT) Standard",sidebar_position:5},a=void 0,r={unversionedId:"concepts/token-standards/flow-ft/index",id:"concepts/token-standards/flow-ft/index",title:"Fungible Token (FT) Standard",description:"This is a description of the Flow standard for fungible token contracts.  It is meant to contain the minimum requirements to implement a safe, secure, easy to understand, and easy to use fungible token contract. It also includes an example implementation to show how a concrete smart contract would actually implement the interface.",source:"@site/docs/concepts/token-standards/flow-ft/index.md",sourceDirName:"concepts/token-standards/flow-ft",slug:"/concepts/token-standards/flow-ft/",permalink:"/docs/next/concepts/token-standards/flow-ft/",draft:!1,editUrl:"https://github.com/onflow/flow-ft/tree/master/docs/index.md",tags:[],version:"current",lastUpdatedBy:"Jeff Doyle",lastUpdatedAt:1687541389,formattedLastUpdatedAt:"Jun 23, 2023",sidebarPosition:5,frontMatter:{title:"Fungible Token (FT) Standard",sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Token Standards",permalink:"/docs/next/concepts/token-standards/"},next:{title:"Contract ExampleToken",permalink:"/docs/next/concepts/token-standards/flow-ft/ExampleToken/"}},c={},d=[{value:"What is Flow?",id:"what-is-flow",level:2},{value:"What is Cadence?",id:"what-is-cadence",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Basics of the Standard:",id:"basics-of-the-standard",level:2},{value:"Core Features (All contained in the main FungibleToken interface)",id:"core-features-all-contained-in-the-main-fungibletoken-interface",level:2},{value:"Comparison to Similar Standards in Ethereum",id:"comparison-to-similar-standards-in-ethereum",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Bonus Features",id:"bonus-features",level:2},{value:"License",id:"license",level:2}];function l(e){const n=Object.assign({p:"p",h2:"h2",a:"a",ul:"ul",li:"li",code:"code",em:"em",h3:"h3",strong:"strong",h1:"h1",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This is a description of the Flow standard for fungible token contracts.  It is meant to contain the minimum requirements to implement a safe, secure, easy to understand, and easy to use fungible token contract. It also includes an example implementation to show how a concrete smart contract would actually implement the interface."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-flow",children:"What is Flow?"}),"\n",(0,s.jsxs)(n.p,{children:["Flow is a new blockchain for open worlds. Read more about it ",(0,s.jsx)(n.a,{href:"https://flow.com/",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"what-is-cadence",children:"What is Cadence?"}),"\n",(0,s.jsxs)(n.p,{children:["Cadence is a new Resource-oriented programming language\nfor developing smart contracts for the Flow Blockchain.\nRead more about it ",(0,s.jsx)(n.a,{href:"/docs/next/cadence/intro",children:"here"})," and see its implementation ",(0,s.jsx)(n.a,{href:"https://github.com/onflow/cadence",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["We recommend that anyone who is reading this should have already\ncompleted the ",(0,s.jsx)(n.a,{href:"/docs/next/cadence/tutorial/first-steps",children:"Cadence Tutorials"}),"\nso they can build a basic understanding of the programming language."]}),"\n",(0,s.jsxs)(n.p,{children:["Resource-oriented programming, and by extension Cadence,\nis the perfect programming environment for currencies, because users are able\nto store their tokens directly in their accounts and transact\npeer-to-peer. Please see the ",(0,s.jsx)(n.a,{href:"https://medium.com/dapperlabs/resource-oriented-programming-bee4d69c8f8e",children:"blog post about resources"}),"\nto understand why they are perfect for digital assets."]}),"\n",(0,s.jsx)(n.h2,{id:"feedback",children:"Feedback"}),"\n",(0,s.jsx)(n.p,{children:"Flow and Cadence are both still in development, so this standard will still\nbe going through a lot of changes as the protocol and language evolves,\nand as we receive feedback from the community about the standard."}),"\n",(0,s.jsx)(n.p,{children:"We'd love to hear from anyone who has feedback.\nMain feedback we are looking for is:"}),"\n",(0,s.jsx)(n.p,{children:"The feedback we are looking for is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Are there any features that are missing from the standard?"}),"\n",(0,s.jsx)(n.li,{children:"Are the features that we have included defined in the best way possible?"}),"\n",(0,s.jsx)(n.li,{children:"Are there any pre and post conditions for functions that are missing?"}),"\n",(0,s.jsx)(n.li,{children:"Are the pre and post conditions defined well enough? Error messages?"}),"\n",(0,s.jsx)(n.li,{children:"Are there any other actions that need an event defined for them?"}),"\n",(0,s.jsx)(n.li,{children:"Are the current event definitions clear enough and do they provide enough information for apps and other actors a clear look into what is happening?"}),"\n",(0,s.jsx)(n.li,{children:"Are the variable, function, and parameter names descriptive enough?"}),"\n",(0,s.jsx)(n.li,{children:"Are there any openings for bugs or vulnerabilities that we are not noticing?"}),"\n",(0,s.jsx)(n.li,{children:"Is the documentation/comments clear and concise and organized in a coherent manner?"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"basics-of-the-standard",children:"Basics of the Standard:"}),"\n",(0,s.jsxs)(n.p,{children:["The code for the standard is in ",(0,s.jsx)(n.code,{children:"contracts/FungibleToken.cdc"}),". An example implementation of the standard that simulates what a simple token would be like is in ",(0,s.jsx)(n.code,{children:"contracts/ExampleToken.cdc"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The exact smart contract that is used for the official Flow Network Token is in ",(0,s.jsx)(n.code,{children:"contracts/FlowToken.cdc"})]}),"\n",(0,s.jsxs)(n.p,{children:["Example transactions that users could use to interact with fungible tokens are located in the ",(0,s.jsx)(n.code,{children:"transactions/"})," directory. These templates are mostly generic and can be used with any fungible token implementation by providing the correct addresses, names, and values."]}),"\n",(0,s.jsxs)(n.p,{children:["The standard consists of a contract interface called ",(0,s.jsx)(n.code,{children:"FungibleToken"})," that requires implementing contracts to define a ",(0,s.jsx)(n.code,{children:"Vault"})," resource that represents the tokens that an account owns. Each account that owns tokens will have a ",(0,s.jsx)(n.code,{children:"Vault"})," stored in its account storage.  Users call functions on each other's ",(0,s.jsx)(n.code,{children:"Vault"}),"s to send and receive tokens."]}),"\n",(0,s.jsxs)(n.p,{children:["Right now we are using unsigned 64-bit fixed point numbers ",(0,s.jsx)(n.code,{children:"UFix64"})," as the type to represent token balance information. This type has 8 decimal places and cannot represent negative numbers."]}),"\n",(0,s.jsx)(n.h2,{id:"core-features-all-contained-in-the-main-fungibletoken-interface",children:"Core Features (All contained in the main FungibleToken interface)"}),"\n",(0,s.jsx)(n.p,{children:"1- Getting metadata for the token smart contract via the fields of the contract:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pub var totalSupply: UFix64"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The only required field of the contract.  It would be incremented when new tokens are minted and decremented when they are destroyed."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Event that gets emitted when the contract is initialized","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pub event TokensInitialized(initialSupply: UFix64)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["2- Retrieving the token fields of a ",(0,s.jsx)(n.code,{children:"Vault"})," in an account that owns tokens."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Balance interface","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pub var balance: UFix64"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The only required field of the ",(0,s.jsx)(n.code,{children:"Vault"})," type"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["3- Withdrawing a specific amount of tokens ",(0,s.jsx)(n.em,{children:"amount"})," using the ",(0,s.jsx)(n.em,{children:"withdraw"})," function of the owner's ",(0,s.jsx)(n.code,{children:"Vault"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Provider interface","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pub fun withdraw(amount: UFix64): @FungibleToken.Vault"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Conditions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the returned Vault's balance must equal the amount withdrawn"}),"\n",(0,s.jsx)(n.li,{children:"The amount withdrawn must be less than or equal to the balance"}),"\n",(0,s.jsx)(n.li,{children:"The resulting balance must equal the initial balance - amount"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Users can give other accounts a reference to their ",(0,s.jsx)(n.code,{children:"Vault"})," cast as a ",(0,s.jsx)(n.code,{children:"Provider"})," to allow them to withdraw and send tokens for them.  A contract can define any custom logic to govern the amount of tokens that can be withdrawn at a time with a ",(0,s.jsx)(n.code,{children:"Provider"}),".  This can mimic the ",(0,s.jsx)(n.code,{children:"approve"}),", ",(0,s.jsx)(n.code,{children:"transferFrom"})," functionality of ERC20."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["withdraw event","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Indicates how much was withdrawn and from what account the ",(0,s.jsx)(n.code,{children:"Vault"})," is stored in.\nIf the ",(0,s.jsx)(n.code,{children:"Vault"})," is not in account storage when the event is emitted,\n",(0,s.jsx)(n.code,{children:"from"})," will be ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pub event TokensWithdrawn(amount: UFix64, from: Address?)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4 - Depositing a specific amount of tokens ",(0,s.jsx)(n.em,{children:"from"})," using the ",(0,s.jsx)(n.em,{children:"deposit"})," function of the recipient's ",(0,s.jsx)(n.code,{children:"Vault"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Receiver"})," interface"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pub fun deposit(from: @FungibleToken.Vault)"})}),"\n",(0,s.jsxs)(n.li,{children:["Conditions","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"from"})," balance must be non-zero"]}),"\n",(0,s.jsxs)(n.li,{children:["The resulting balance must be equal to the initial balance + the balance of ",(0,s.jsx)(n.code,{children:"from"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"deposit event"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Indicates how much was deposited and to what account the ",(0,s.jsx)(n.code,{children:"Vault"})," is stored in.\nIf the ",(0,s.jsx)(n.code,{children:"Vault"})," is not in account storage when the event is emitted,\n",(0,s.jsx)(n.code,{children:"to"})," will be ",(0,s.jsx)(n.code,{children:"nil"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pub event TokensDeposited(amount: UFix64, to: Address?)"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Users could create custom ",(0,s.jsx)(n.code,{children:"Receiver"}),"s to trigger special code when transfers to them happen, like forwarding the tokens\nto another account, splitting them up, and much more."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["It is important that if you are making your own implementation of the fungible token interface that\nyou cast the input to ",(0,s.jsx)(n.code,{children:"deposit"})," as the type of your token.\n",(0,s.jsx)(n.code,{children:"let vault <- from as! @ExampleToken.Vault"}),"\nThe interface specifies the argument as ",(0,s.jsx)(n.code,{children:"@FungibleToken.Vault"}),", any resource that satisfies this can be sent to the deposit function. The interface checks that the concrete types match, but you'll still need to cast the ",(0,s.jsx)(n.code,{children:"Vault"})," before storing it."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"5 - Creating an empty Vault resource"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pub fun createEmptyVault(): @FungibleToken.Vault"})}),"\n",(0,s.jsxs)(n.li,{children:["Defined in the contract\nTo create an empty ",(0,s.jsx)(n.code,{children:"Vault"}),", the caller calls the function in the contract and stores the Vault in their storage."]}),"\n",(0,s.jsxs)(n.li,{children:["Conditions:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the balance of the returned Vault must be 0"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"6 - Destroying a Vault"}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"Vault"})," is explicitly destroyed using Cadence's ",(0,s.jsx)(n.code,{children:"destroy"})," keyword, the balance of the destroyed vault must be subracted from the total supply."]}),"\n",(0,s.jsx)(n.p,{children:"7 - Standard for Token Metadata"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"not sure what this should be yet"}),"\n",(0,s.jsx)(n.li,{children:"Could be a dictionary, could be an IPFS hash, could be json, etc."}),"\n",(0,s.jsx)(n.li,{children:"need suggestions!"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"comparison-to-similar-standards-in-ethereum",children:"Comparison to Similar Standards in Ethereum"}),"\n",(0,s.jsx)(n.p,{children:"This spec covers much of the same ground that a spec like ERC-20 covers, but without most of the downsides."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tokens cannot be sent to accounts or contracts that don't have owners or don't understand how to use them, because an account has to have a ",(0,s.jsx)(n.code,{children:"Vault"})," in its storage to receive tokens.  No ",(0,s.jsx)(n.code,{children:"safetransfer"})," is needed."]}),"\n",(0,s.jsxs)(n.li,{children:["If the recipient is a contract that has a stored ",(0,s.jsx)(n.code,{children:"Vault"}),", the tokens can just be deposited to that Vault without having to do a clunky ",(0,s.jsx)(n.code,{children:"approve"}),", ",(0,s.jsx)(n.code,{children:"transferFrom"})]}),"\n",(0,s.jsx)(n.li,{children:"Events are defined in the contract for withdrawing and depositing, so a recipient will always be notified that someone has sent them tokens with the deposit event."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"approve"}),", ",(0,s.jsx)(n.code,{children:"transferFrom"})," pattern is not included, so double spends are not permitted"]}),"\n",(0,s.jsxs)(n.li,{children:["Transfers can trigger actions because users can define custom ",(0,s.jsx)(n.code,{children:"Receivers"})," to execute certain code when a token is sent."]}),"\n",(0,s.jsxs)(n.li,{children:["Cadence integer types protect against overflow and underflow, so a ",(0,s.jsx)(n.code,{children:"SafeMath"}),"-equivalent library is not needed."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)(n.p,{children:"A standard for token metadata is still an unsolved problem in the general blockchain world and we are still thinking about ways to solve it in Cadence. We hope to be able to store all metadata on-chain and are open to any ideas or feedback on how this could be implemented."}),"\n",(0,s.jsx)(n.h2,{id:"bonus-features",children:"Bonus Features"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Minting and Burning are not included in the standard but are included in the FlowToken example contract to illustrate what minting and burning might look like for a token in Flow."})}),"\n",(0,s.jsx)(n.p,{children:"8 - Minting or Burning a specific amount of tokens using a specific minter resource that an owner can control"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"MintandBurn"})," Resource","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"function to mintTokens"}),"\n",(0,s.jsx)(n.li,{children:"tokens minted event"}),"\n",(0,s.jsx)(n.li,{children:"Each minter has a set amount of tokens that they are allowed to mint. This cannot be changed and a new minter needs to be created to add more allowance."}),"\n",(0,s.jsx)(n.li,{children:"function to burnTokens"}),"\n",(0,s.jsx)(n.li,{children:"tokens Burnt event"}),"\n",(0,s.jsx)(n.li,{children:"Each time tokens are minted or burnt, that value is added or subtracted to or from the total supply."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"The following features could each be defined as a separate interface. It would be good to make standards for these, but not necessary to include in the main standard interface and are not currently defined in this example."})}),"\n",(0,s.jsxs)(n.p,{children:["9 - Withdrawing a specific amount of tokens from someone else's ",(0,s.jsx)(n.code,{children:"Vault"})," by using their ",(0,s.jsx)(n.code,{children:"provider"})," reference."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"approved withdraw event"}),"\n",(0,s.jsx)(n.li,{children:"Providing a resource that only approves an account to send a specific amount per transaction or per day/month/etc."}),"\n",(0,s.jsx)(n.li,{children:"Returning the amount of tokens that an account can send for another account."}),"\n",(0,s.jsx)(n.li,{children:"Reading the balance of the account that you have permission to send tokens for"}),"\n",(0,s.jsxs)(n.li,{children:["Owner is able to increase and decrease the approval at will, or revoke it completely","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This is much harder than anticipated"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"11 - Pausing Token transfers (maybe a way to prevent the contract from being imported)"}),"\n",(0,s.jsx)(n.p,{children:"12 - Cloning the token to create a new token with the same distribution"}),"\n",(0,s.jsx)(n.p,{children:"13 - Restricted ownership (For accredited investors and such)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"allowlisting"}),"\n",(0,s.jsx)(n.li,{children:"denylisting"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"how-to-use-the-fungible-token-contract",children:"How to use the Fungible Token contract"}),"\n",(0,s.jsx)(n.p,{children:"To use the Flow Token contract as is, you need to follow these steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are using the Playground, you need to deploy the ",(0,s.jsx)(n.code,{children:"FungibleToken"})," definition to account 1 yourself and import it in ",(0,s.jsx)(n.code,{children:"ExampleToken"}),". It is a predeployed interface in the emulator, testnet, and mainnet and you can import definition from those accounts:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0xee82856bf20e2aa6"})," on emulator"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x9a0766d93b6608b7"})," on testnet"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0xf233dcee88fe0abe"})," on mainnet"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Deploy the ",(0,s.jsx)(n.code,{children:"ExampleToken"})," definition"]}),"\n",(0,s.jsxs)(n.li,{children:["You can use the ",(0,s.jsx)(n.code,{children:"get_balance.cdc"})," or ",(0,s.jsx)(n.code,{children:"get_supply.cdc"})," scripts to read the\nbalance of a user's ",(0,s.jsx)(n.code,{children:"Vault"})," or the total supply of all tokens, respectively."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"setupAccount.cdc"})," on any account to set up the account to be able to\nuse ",(0,s.jsx)(n.code,{children:"FlowTokens"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"transfer_tokens.cdc"})," transaction file to send tokens from one user with\na ",(0,s.jsx)(n.code,{children:"Vault"})," in their account storage to another user with a ",(0,s.jsx)(n.code,{children:"Vault"})," in their account storage."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"mint_tokens.cdc"})," transaction with the admin account to mint new tokens."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"burn_tokens.cdc"})," transaction with the admin account to burn tokens."]}),"\n",(0,s.jsxs)(n.li,{children:["Use the ",(0,s.jsx)(n.code,{children:"create_minter.cdc"})," transaction to create a new MintandBurn resource\nand store it in a new Admin's account."]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"running-automated-tests",children:"Running Automated Tests"}),"\n",(0,s.jsxs)(n.p,{children:["You can find automated tests in the ",(0,s.jsx)(n.code,{children:"lib/go/test/token_test.go"})," file. It uses the transaction templates that are contained in the ",(0,s.jsx)(n.code,{children:"lib/go/templates/transaction_templates.go"})," file. Currently, these rely on a dependency from a private dapper labs repository to run, so external users will not be able to run them. We are working on making all of this public so anyone can run tests, but haven't completed this work yet."]}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsxs)(n.p,{children:["The works in these folders are under the ",(0,s.jsx)(n.a,{href:"https://github.com/onflow/flow-ft/blob/master/LICENSE",children:"Unlicense"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/onflow/flow-ft/blob/master/contracts/",children:"/contracts"})}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);