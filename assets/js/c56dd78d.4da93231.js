"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[4171],{3905:(e,l,t)=>{t.d(l,{Zo:()=>Z,kt:()=>c});var n=t(7294);function d(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function a(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?a(Object(t),!0).forEach((function(l){d(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function T(e,l){if(null==e)return{};var t,n,d=function(e,l){if(null==e)return{};var t,n,d={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||(d[t]=e[t]);return d}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var M=n.createContext({}),o=function(e){var l=n.useContext(M),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},Z=function(e){var l=o(e.components);return n.createElement(M.Provider,{value:l},e.children)},N={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},I=n.forwardRef((function(e,l){var t=e.components,d=e.mdxType,a=e.originalType,M=e.parentName,Z=T(e,["components","mdxType","originalType","parentName"]),I=o(t),c=d,p=I["".concat(M,".").concat(c)]||I[c]||N[c]||a;return t?n.createElement(p,i(i({ref:l},Z),{},{components:t})):n.createElement(p,i({ref:l},Z))}));function c(e,l){var t=arguments,d=l&&l.mdxType;if("string"==typeof e||d){var a=t.length,i=new Array(a);i[0]=I;var T={};for(var M in l)hasOwnProperty.call(l,M)&&(T[M]=l[M]);T.originalType=e,T.mdxType="string"==typeof e?e:d,i[1]=T;for(var o=2;o<a;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}I.displayName="MDXCreateElement"},3994:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>M,contentTitle:()=>i,default:()=>N,frontMatter:()=>a,metadata:()=>T,toc:()=>o});var n=t(7462),d=(t(7294),t(3905));const a={sidebar_position:0,sidebar_label:"Fungible tokens in Venom network"},i="Fungible tokens in Venom network",T={unversionedId:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",id:"build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",title:"Fungible tokens in Venom network",description:"Fungible token&x20;",source:"@site/docs/build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token/00-fungible-tokens-in-venom-network.md",sourceDirName:"build/00-development-guides/03-how-to-create-your-own-fungible-tip-3-token",slug:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/fungible-tokens-in-venom-network",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Fungible tokens in Venom network"},sidebar:"buildSidebar",previous:{title:"Setting Up The Venom Smart Contract Development Environment",permalink:"/build/development-guides/setting-up-the-venom-smart-contract-development-environment"},next:{title:"Quick start developing with TIP-3",permalink:"/build/development-guides/how-to-create-your-own-fungible-tip-3-token/quick-start-developing-with-tip-3"}},M={},o=[{value:"Fungible token ",id:"fungible-token-",level:2},{value:"What is TIP-3?",id:"what-is-tip-3",level:3},{value:"Some words about differences with ERC20",id:"some-words-about-differences-with-erc20",level:3}],Z={toc:o};function N(e){let{components:l,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},Z,a,{components:l,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"fungible-tokens-in-venom-network"},"Fungible tokens in Venom network"),(0,d.kt)("h2",{id:"fungible-token-"},"Fungible token"," "),(0,d.kt)("p",null,"First, let's make sure we've chosen the right type of token for our purposes. In this article, we will implement the fungible token type. This type of asset is divisible, non-unique, and interchangeable, i.e. one unit is equivalent to any other unit of this asset."," "),(0,d.kt)("admonition",{type:"info"},(0,d.kt)("p",{parentName:"admonition"},"If you need to implement a different one of the most popular token types is NFT (Non-fungible token), follow ",(0,d.kt)("a",{parentName:"p",href:"../how-to-create-your-own-non-fungible-tip-4-token/non-fungible-tokens-in-venom-network"},"this")," article")),(0,d.kt)("p",null,"Venom network uses the standard of fungible tokens ",(0,d.kt)("a",{parentName:"p",href:"/standards/TIP-3/core-description"},"TIP-3")),(0,d.kt)("h3",{id:"what-is-tip-3"},"What is TIP-3?"),(0,d.kt)("p",null,"Just as ERC-20 is the most popular standard in the Ethereum network, TIP-3 assumes the same role in the Venom network. TIP-3 was designed to match the distributed system design of the Venom network and is cost-effective for its fee-paying model."),(0,d.kt)("p",null,"TIP-3 provides the following functionalities"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"transfer tokens from one account to another"),(0,d.kt)("li",{parentName:"ul"},"get the current token balance of an account"),(0,d.kt)("li",{parentName:"ul"},"get the total supply of the token available on the network"),(0,d.kt)("li",{parentName:"ul"},"mint and burn tokens")),(0,d.kt)("h3",{id:"some-words-about-differences-with-erc20"},"Some words about differences with ERC20"),(0,d.kt)("p",null,(0,d.kt)("img",{alt:"ERC20 concept simple scheme",src:t(5979).Z,width:"467",height:"211"})),(0,d.kt)("p",null,"As you may know, ERC20 contract main value is a balances mapping. So users just have a records about their balances and works only with this contract. TIP-3 working flow is a different because of async nature of TVM."),(0,d.kt)("p",null,(0,d.kt)("img",{alt:"TIP-3 concept simple scheme",src:t(7326).Z,width:"936",height:"397"})),(0,d.kt)("p",null,"Safety of ",(0,d.kt)("inlineCode",{parentName:"p"},"TokenWallet - TokenWallet")," interaction is provided by address calculation mechanics. Each contract in Venom Blockchain can store some contract code and has a possibility to calculate an address by using some state variables. Next, this address can be compared with msg.sender address. And if it same - the call is safety and correct. We will look through this mechanic in details ",(0,d.kt)("a",{parentName:"p",href:"/build/development-guides/developing-of-simple-voting-system/venom-in-action/voting-system-contracts"},"later"),"."))}N.isMDXComponent=!0},5979:(e,l,t)=>{t.d(l,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSBEbyBub3QgZWRpdCB0aGlzIGZpbGUgd2l0aCBlZGl0b3JzIG90aGVyIHRoYW4gZGlhZ3JhbXMubmV0IC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ2N3B4IiBoZWlnaHQ9IjIxMXB4IiB2aWV3Qm94PSItMC41IC0wLjUgNDY3IDIxMSIgY29udGVudD0iJmx0O214ZmlsZSBob3N0PSZxdW90O2FwcC5kaWFncmFtcy5uZXQmcXVvdDsgbW9kaWZpZWQ9JnF1b3Q7MjAyMi0xMC0xOFQxMzo0NDoyOC43NzRaJnF1b3Q7IGFnZW50PSZxdW90OzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNV83KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTA2LjAuMC4wIFNhZmFyaS81MzcuMzYmcXVvdDsgdmVyc2lvbj0mcXVvdDsyMC40LjEmcXVvdDsgZXRhZz0mcXVvdDtod1RMQU5ZYWlTc2RIbzNsbFF3byZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtMMW9hVlpGci1xa2tDTkFWeXNpViZxdW90OyZndDszVmRiYjVzd0ZQNDFrYmFYaUd0SUg1ZEx0NGRPcXRaTjI1NnFFK3lBRjRPUk1VM1NYNzlqTUxkQW1rck5KbTE1U1BCbkcvQjNPWFltN2pJNWZKU1F4WjhGb1h6aVdPUXdjVmNUeDdFdGU0NC9HamxXaU84WklKS01tRUV0OE1DZWFUM1RvQVVqTk84TlZFSnd4YkkrR0lvMHBhSHFZU0NsMlBlSGJRWHZQeldEaUE2QWh4RDRFUDNPaUlvcmRPNEVMZjZKc2lpdW4yelBicXFlQk9yQlppVjVERVRzTzVDN25yaExLWVNxcnBMRGtuSk5YczFMTmUvMlRHL3pZcEttNmpVVG5HckNFL0RDck0yOGx6cldpNVdpU0FuVjQ2Mkp1OWpIVE5HSERFTGR1MGQ1RVl0VndyRmw0Mld1cE5qUnBlQkNsck5kZTBZSStOaXpaWnpYZUNwUzJneXVHWFFSTVc5RHBhS0hzeXV5RzU3UVlGUWtWTWtqRHFrbkJKWmZ6VEhtY2dORC9yNlZxbkZTM0pYSk15QVllMFROelZzRzhjS1FPRTZvZTVsUXlMUEtsRnQyMEx3dU1pb1pQb2hxYXZCdTZHSjYzMEpkZW9HektNWHJFTWtvK3hyL2FHMEk1SEVqMUZha3FxT0Q1d1RCWW9FNGh3M2xDd2gzVVNsc1o4aTIvSmlwSm5TMm94K0Njck0wK2lveUl4Tkx5b0RVdnl1V1JNZ0xaeHY4WnBzRXZ6ZGNoTHN3QnBaaUkwOUFxa2NNbzVJUXFtbitGTlZ6Mi9mb3VHSkhWUmliVlZTamhDUzA0NXRydUdRZTlGM2lqYmhrTm1LUzJSVTg0ZzA4c3Y2eWJDcENheFJjbm5vcFhvYU9rV1FOZktMSllsakFQcGlPaEJHaUh6T2E1MzdpenhobVRLMFR6N1haMTRZeTY3TDdCbk9zYThWK2J2VmpYN2N2Q09wZVFWQi9JR2dDV1lhUmVRZUVTSnJuRTcxTXhHZVFhSUlqVlM3YUtsaXFISC8yWHE5VXNpZFFGSzhlTjhBaERYRi8rK2Y5TUN6dzNkTGlYM0RNTFNTTWF6WHZpcEFSUUM2V0lzMEZ2MVlKQ0t5K1k3dzZtTjJOd2hteGpIOEZ5OHdHNmxLQ1p3elRGRkxGSWhJcDhIV0xudWpRanJrVFpXWFdodmhGbFRvYWdxRlFvbThYWkVZZWY1ajVaZU9uYmt3ZHYyNnZEdDNlMWJFVDdOZklkbjc3NzF2QmF5VFVxKzRKbUl0Q2hnWXk1eWtGTXFJMTk2K1dXVklPaWozMTcvNFd5WUxMVzNzZHF6dWRrWHVSTThXRWp0ZEdLQ1dTdmhpbkVWUmF4SkVkL2xMRWV5ekhrT2xYU1E2UlBubFA0Ym1RZEZyazVaMytTbkN2RVV3dk9DbmxON09wUDRqbWZDU1o5U2IrRnBubkE1bS9JWCs2aE1lZ3Y2SDBWb2huRXQzU0I1d1NNbFc3UE9TWHRmOS9MZDh2bGVYVGpmMVB1c1MzVDF6aURqZDh4N3BPK2NabSs1K3M3T3Y4czNYWHZ3RT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHJlY3QgeD0iMjM2IiB5PSI1MCIgd2lkdGg9IjIxMCIgaGVpZ2h0PSIxNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2ZGRhNSIgc3Ryb2tlLXdpZHRoPSIzIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGltYWdlIHg9IjQwNS41IiB5PSIxNDkuNSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiB4bGluazpocmVmPSJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSTFOU0lnYUdWcFoyaDBQU0kxTlNJK1BHTnBjbU5zWlNCamVEMGlNamN1TlNJZ1kzazlJakkzTGpVaUlISTlJakkzTGpVaUlHWnBiR3c5SWlObFpXTXhNV0lpTHo0OFp5Qm1hV3hzUFNJalptWm1JajQ4Y0dGMGFDQmtQU0pOTXprdU1pQTNMalpqTGpZdU1pQXhMak11TlNBeExqY3VPUzQxTGpVdU5pQXhMakV1TmlBeExqZFdNalpqTFM0ekxTNDFMUzQyTFM0NExTNDVMVEV1TXkwdU1pMHVNaTB1TlMwdU15MHVPQzB1TlhNdExqTXRMakl0TGpNdExqVldNVEF1TldNd0xTNDRMUzR6TFM0NUxTNDVMUzQ1U0RFNExqVmpMUzQ0SURBdE1TNHhMak10TVM0eExqbFdNemRqTUNBdU9DNHpMamt1T1M0NWFEVXVOR011TXlBd0lDNDJJREFnTGprdU15NHpMakl1Tmk0ekxqa3VOVXd5TkM0eUlEUXdhQzAyTGpOakxURXVOQ0F3TFRJdU5DMHVPUzB5TGpjdE1pNDBWamt1TjJNdU1pMHVOUzR6TFM0NUxqWXRNUzQwTGpNdExqWWdNUzR4TFM0NUlERXVOeTB4TGpFZ055NHpMalFnTVRRdU5pNDBJREl4TGpjdU5IcHRMUzQxSURNMFl5MHVOU0F3TFRFdU1TMHVNaTB4TGpZdExqTXRMalV0TGpJdExqZ2dNQzB4TGpFdU0yd3RNUzR4SURFdU1XTXRMall1TmkweExqRXVOaTB4TGpjZ01Hd3RNUzR4TFRFdU1XTXRMak10TGpNdExqWXRMalV0TVM0eExTNHpjeTB1T1M0eUxURXVOQzR6WXkwdU9TNHlMVEV1TkMwdU1pMHhMall0TVM0eElEQXRMalV0TGpJdExqa3RMakl0TVM0MGN5MHVNeTB1T0MwdU5pMHVPV010TGpVdExqSXRMamt0TGpVdE1TNDBMUzQyTFM0NExTNDFMUzQ1TFM0NUxTNDJMVEV1Tnk0eUxTNDFMalV0TGpndU5pMHhMak11TXkwdU5TNHlMUzQ0SURBdE1TNHpjeTB1TlMwdU9DMHVOaTB4TGpOakxTNDFMUzQ0TFM0ekxURXVOQzQyTFRFdU55NDFMUzR5TGpndExqVWdNUzR6TFM0MkxqVXRMakl1TmkwdU5TNDRMUzQ1SURBdExqVXVNaTB4TGpFdU1pMHhMall1TWkwdU5pNDJMVEV1TVNBeExqUXRMamt1TlM0eUxqa3VNaUF4TGpRdU15NDFJREFnTGprZ01DQXhMak10TGpNdU15MHVNeTQyTFM0NElERXVNUzB4TGpFdU5TMHVOU0F4TGpFdExqVWdNUzQzSURCc01TNHhJREV1TVdNdU15NHpMamd1TlNBeExqTXVNM011T1MwdU1pQXhMalF0TGpOakxqWXRMaklnTVM0ekxqTWdNUzQwTGprdU1pNDFMakl1T1M0eUlERXVOaUF3SUM0MUxqTXVPQzQ0TGprdU5TNHlMamt1TlNBeExqUXVOaTQyTGpNdU9DNDVMalVnTVM0MkxTNHlMalV0TGpVdU9TMHVOaUF4TGpSaE1TNDBPQ0F4TGpRNElEQWdNQ0F3SURBZ01TNHpZeTR6TGpVdU5TNDVMallnTVM0MExqTXVOaTR5SURFdU15MHVOU0F4TGpZdExqVXVNeTB1T1M0MUxURXVOQzQyTFM0MUxqSXRMall1TlMwdU5pNDVJREFnTGpVdExqSWdNUzR4TFM0eUlERXVOaTB1Tmk0MExURXVNUzQ1TFRFdU55NDVlazB6TkNBME1DNHlZek11TmlBd0lEWXVPQzB6SURZdU9DMDJMalp6TFRNdE5pNDRMVFl1TmkwMkxqaGpMVE11T0NBd0xUWXVPQ0F6TFRZdU9DQTJMall0TGpJZ015NDRJREl1T0NBMkxqZ2dOaTQySURZdU9IcHRMVFV1TmkweU5pNHhhRGN1TVdNdU1pQXdJQzQxSURBZ0xqWXVNaTQxTGpJdU5pNDJMallnTVM0eExTNHlMalV0TGpVdU9DMHhMakV1T0VneU1TNHhZeTB1TmlBd0xTNDVMUzQxTFM0NUxTNDVJREF0TGpVdU5TMHVPUzQ1TFM0NUlESXVOQzB1TXlBMExqZ3RMak1nTnk0ekxTNHplbTB3SURZdU9HZ3ROeTR6WXkwdU5pQXdMVEV1TVMwdU15MHhMakV0TGprZ01DMHVOUzR6TFM0NUxqa3RMamxvTVRWakxqVXVNaTQ0TGpZdU5pQXhMakVnTUNBdU5TMHVOUzQ0TFM0NUxqaHNMVGN1TWkwdU1Yb2lMejQ4Y0dGMGFDQmtQU0pOTkRBdU9TQXpPUzQzYkRNZ00yTXVNaTR5TGpNdU5TNHlMallnTUNBdU15MHVNeTQxTFM0MkxqVXRMalV1TWkweExqRXVNaTB4TGpZdU15MHVNaUF3TFM0ekxqSXRMak11TXlBd0lDNDFMUzR5SURFdU1TMHVNeUF4TGpZdExqSXVOaTB1Tmk0NExURXVNUzR6YkMwMExUUmpMakl0TGpNdU5TMHVOUzQ0TFM0ekxqVXVNaTQ1TGpJZ01TNDBMakl1T1M0eUlERXVPUzB1TlNBeUxqRXRNUzQyTGpJdExqRXVNaTB1Tmk0MExTNDVlbTB0TVRNdU9TQXdZekFnTGpNdU1pNDJMakl1T1M0eUlERXVNU0F4TGpFZ01TNDNJREl1TWlBeExqWXVOU0F3SUM0NUxTNHlJREV1TkMwdU1pNHpJREFnTGpZZ01DQXVPUzR6YkMwekxqZ2dNeTQ0WXkwdU1pNHlMUzQxTGpVdExqZ3VNM010TGpVdExqTXRMalV0TGpaakxTNHlMUzQxTFM0eUxTNDVMUzR6TFRFdU5DQXdMUzR5TFM0eUxTNHpMUzR6TFM0ekxTNDJMUzR5TFRFdU1TMHVNaTB4TGpjdExqTXRMalV0TGpJdExqZ3RMall0TGpNdExqa3VPUzB4TGpFZ01TNDVMVEl1TVNBekxUTXVNbm9pTHo0OEwyYytQQzl6ZG1jKyIvPjxyZWN0IHg9IjMxMSIgeT0iNTEiIHdpZHRoPSI2MCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogNjZweDsgbWFyZ2luLWxlZnQ6IDMxMnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMTZkZGE1OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMjIsIDIyMSwgMTY1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgZm9udC13ZWlnaHQ6IGJvbGQ7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkVSQzIwPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM0MSIgeT0iNzIiIGZpbGw9IiMxNmRkYTUiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMjBweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkVSQzIwPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyMzEiIHk9Ijk1IiB3aWR0aD0iMjIwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogMjE4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTIwcHg7IG1hcmdpbi1sZWZ0OiAyMzJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogIzE2ZGRhNTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxNXB4OyBmb250LWZhbWlseTogJnF1b3Q7THVjaWRhIENvbnNvbGUmcXVvdDs7IGNvbG9yOiByZ2IoMjIsIDIyMSwgMTY1KTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+bWFwcGluZyhhZGRyZXNzID0mZ3Q7IHVpbnQyNTYpIHByaXZhdGUgX2JhbGFuY2VzPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjM0MSIgeT0iMTI1IiBmaWxsPSIjMTZkZGE1IiBmb250LWZhbWlseT0iTHVjaWRhIENvbnNvbGUiIGZvbnQtc2l6ZT0iMTVweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+bWFwcGluZyhhZGRyZXNzID0mZ3Q7IHVpbnQyNTYpIHAuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gODEgMTA3IEwgMTU2IDEwNyBMIDIxOS4wMyAxMDcuNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2ZGRhNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDIyNi41MyAxMDcuNDcgTCAyMTYuNDkgMTEyLjQgTCAyMTkuMDMgMTA3LjQyIEwgMjE2LjU2IDEwMi40IFoiIGZpbGw9IiMxNmRkYTUiIHN0cm9rZT0iIzE2ZGRhNSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDIzLjg3IDkwLjIzIEMgMjMuNzUgODQuMjYgMjUuODkgNzguNDkgMjkuODEgNzQuMjIgQyAzMy43NCA2OS45NCAzOS4xMSA2Ny41MiA0NC43MyA2Ny41IEMgNTcuMjYgNjcuNjMgNjcuNDcgNzcuNzQgNjcuOTMgOTAuNDcgQyA2OC40IDk2LjMyIDY2LjUxIDEwMi4xMiA2Mi42OSAxMDYuNTEgQyA1OC44OCAxMTAuODkgNTMuNDcgMTEzLjQ4IDQ3Ljc0IDExMy42OCBDIDM1LjA2IDExMy45MyAyNC40OCAxMDMuNTQgMjMuODcgOTAuMjMgWiBNIDEgMTQ2LjUgQyAxLjUgMTM1LjM5IDUuOTEgMTI1LjA0IDEzLjE1IDExNy45NyBDIDE4Ljg5IDExMi42MyAyNi44OCAxMTIuMyAzMi45MiAxMTcuMTcgQyAzNi4zNiAxMTkuNTYgNDAuMTQgMTIxLjQ5IDQ0LjE0IDEyMi45IEMgNDguMjYgMTI0LjU4IDUyLjc2IDEyNC4yOSA1Ni43MSAxMjIuMSBDIDU4Ljg3IDEyMS4xMiA2MC43OCAxMTkuNzEgNjIuMzIgMTE3Ljk3IEMgNjMuODQgMTE2LjI2IDY2LjQ4IDExNS45MSA2OC40MyAxMTcuMTcgQyA3MS44OCAxMTkuMzQgNzQuOTcgMTIzLjE4IDc3LjQgMTI4LjMgQyA3OS43NCAxMzQuMTEgODAuOTYgMTQwLjI3IDgxIDE0Ni40OCBaIiBmaWxsPSIjMTZkZGE1IiBzdHJva2U9Im5vbmUiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSI0MSIgeT0iMSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDE5OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI2cHg7IG1hcmdpbi1sZWZ0OiA0MnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiAjMTZkZGE1OyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDIwcHg7IGZvbnQtZmFtaWx5OiAmcXVvdDtMdWNpZGEgQ29uc29sZSZxdW90OzsgY29sb3I6IHJnYigyMiwgMjIxLCAxNjUpOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5Vc2VycyBoYXMgYSByZWNvcmRzIGluIGEgYmFsYW5jZSBtYXBwaW5nPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE0MSIgeT0iMzIiIGZpbGw9IiMxNmRkYTUiIGZvbnQtZmFtaWx5PSJMdWNpZGEgQ29uc29sZSIgZm9udC1zaXplPSIyMHB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Vc2VycyBoYXMgYSByZWNvcmRzLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48L2c+PHN3aXRjaD48ZyByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiLz48YSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC01KSIgeGxpbms6aHJlZj0iaHR0cHM6Ly93d3cuZGlhZ3JhbXMubmV0L2RvYy9mYXEvc3ZnLWV4cG9ydC10ZXh0LXByb2JsZW1zIiB0YXJnZXQ9Il9ibGFuayI+PHRleHQgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMHB4IiB4PSI1MCUiIHk9IjEwMCUiPlRleHQgaXMgbm90IFNWRyAtIGNhbm5vdCBkaXNwbGF5PC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="},7326:(e,l,t)=>{t.d(l,{Z:()=>n});const n=t.p+"assets/images/tip3-6f27c66e9b2f0458b3ba6fd78ed9bfa3.svg"}}]);