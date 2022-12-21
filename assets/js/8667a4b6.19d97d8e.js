"use strict";(self.webpackChunkve_ps=self.webpackChunkve_ps||[]).push([[9911],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const o={},i="How to run a Venom validator node",l={unversionedId:"start/maintain/how-to-become-a-validator",id:"start/maintain/how-to-become-a-validator",title:"How to run a Venom validator node",description:"Precautions",source:"@site/docs/start/maintain/01-how-to-become-a-validator.md",sourceDirName:"start/maintain",slug:"/start/maintain/how-to-become-a-validator",permalink:"/start/maintain/how-to-become-a-validator",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Network Maintainers",permalink:"/maintain/network-maintainers"}},s={},u=[{value:"Precautions",id:"precautions",level:2},{value:"Caution",id:"caution",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Stake",id:"stake",level:3},{value:"Node hardware minimums",id:"node-hardware-minimums",level:3},{value:"Cloud providers",id:"cloud-providers",level:3},{value:"Node setup",id:"node-setup",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-run-a-venom-validator-node"},"How to run a Venom validator node"),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD",\n"SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be\ninterpreted as described in RFC 2119.')),(0,r.kt)("h2",{id:"caution"},"Caution"),(0,r.kt)("p",null,"Running a Validator node makes you responsible for all your stake. If something\ngoes wrong, the node could be slashed, and you can lose your stake."),(0,r.kt)("p",null,"You SHOULD  have enough Linux engineering skills to manage, secure, and\nmaintain nodes. Running a Validator node is considerably more than executing a\nvalidator binary."),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("h3",{id:"stake"},"Stake"),(0,r.kt)("p",null,"You will need enough amount of Venom tokens to run a Validator node.  You can\ndeploy the node either in validator or in DePool mode."),(0,r.kt)("h3",{id:"node-hardware-minimums"},"Node hardware minimums"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CPU"),": 12x cores Intel Skylake or newer CPU. The higher base CPU frequency is\npreferred over the cores count;"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"RAM"),": 64GB;\nNetwork: 300Mbps reliable internet connection. Connection issues can\npotentially cause slashing of your Validator;"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Storage"),":"),(0,r.kt)("p",null,"50GB SSD storage for the operating system;\n500GB of NVMe for Validator internal database, with the ability to add\nadditional space because of the growth of blockchain;"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Operating system"),": Ubuntu 22.04"),(0,r.kt)("p",null,"These specs are not a hard requirement, but a best practice. Because running a\nvalidator node is a responsible task you should consider using enterprise-grade\nhardware, to ensure the stability of your node."),(0,r.kt)("h3",{id:"cloud-providers"},"Cloud providers"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Beware of the Terms and conditions of the cloud provider of your choice.\nDigitalOcean Acceptable User Policy requires implicit permission to do "mining\nof cryptocurrencies" and may be extended to other cryptocurrency activities.')),(0,r.kt)("p",null,"Tested Cloud Providers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Google Cloud"),(0,r.kt)("li",{parentName:"ul"},"Amazon AWS"),(0,r.kt)("li",{parentName:"ul"},"Microsoft Azure"),(0,r.kt)("li",{parentName:"ul"},"OVH")),(0,r.kt)("p",null,"To make your node work properly, configure the cloud firewall to accept\nincoming traffic on UDP/30000 port"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Node consumes about 6TB of incoming traffic per month. Keep it in mind when you\nare estimating the costs of your setup.")),(0,r.kt)("h3",{id:"node-setup"},"Node setup"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always check any scripts you are running")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare server for node setup\n1.1. Create a user and group for running the Validator node, and create all\nnecessary folders structure")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'VALIDATOR_USER="validator"\nVALIDATOR_GROUP="validator"\nsudo groupadd $VALIDATOR_GROUP\nsudo useradd $VALIDATOR_USER -m -s /bin/bash -g $VALIDATOR_GROUP -G sudo\n# Mount \nsudo mkdir -p /var/ever/rnode/\nsudo chown $VALIDATOR_USER:$VALIDATOR_GROUP /var/ever/rnode/\n')),(0,r.kt)("p",null,"1.2. Check if the NTP service is UP and running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status systemd-timesyncd\n")),(0,r.kt)("p",null,"Should show that the service is up and running. If not - please refer to the documentation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u25cf systemd-timesyncd.service - Network Time Synchronization\n     Loaded: loaded (/lib/systemd/system/systemd-timesyncd.service; enabled; \n     preset: enabled)\n     Active: active (running) \n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the clock is out of sync (even by a small amount), the blocks the\nValidator produces,  may not get accepted by the network.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create firewall rules to allow ADNL communications")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ufw allow 30000/UDP\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Install dependencies")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update \nsudo apt install -y git libssl-dev pkg-config build-essential libzstd-dev \nlibclang-dev libgoogle-perftools-dev\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Switch to the validator user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su validator\n")),(0,r.kt)("p",null,"Install rust"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\ncurl https://sh.rustup.rs -sSf | sh\nsource "$HOME/.cargo/env"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Build a Validator node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\ncargo install --locked --git https://github.com/broxus/stever-node-tools\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable validator services\nsudo $PWD/.cargo/bin/stever init systemd\n")),(0,r.kt)("p",null,"Here choose the user for the validator. DON'T RUN Validator service as a root user!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing services\n? Select the user from which the service will work \u203a\n\u276f validator\n  root\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Setup Validator and create wallets\nCompile and init node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"stever init\n")),(0,r.kt)("p",null,'Choose "other" network'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing configs\n\u2714 Create root directory? (/home/validator/.stever) \xb7 yes\n? Select network \u203a\n  Everscale mainnet\n  Everscale testnet\n\u276f other\n")),(0,r.kt)("p",null,"Provide global config URL (Contact Venom core team)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Select network \xb7 other\n? Config URL \u203a\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing configs\n\u2714 Create root directory? (/home/validator/.stever) \xb7 yes\n\u2714 Select network \xb7 other\n\u2714 Config URL \xb7<hidden>\n\u2714 Node config doesn't have control server entry. Create? \xb7 yes\n\u2714 Control server listen address \xb7 localhost\n\u2714 Specify control port \xb7 31000\n\u2714 Enter public ip \xb7 164.92.106.127\n\u2714 Specify server ADNL port \xb7 30000\n\u2714 Specify node DB path \xb7 /var/ever/rnode\n[1/2] Preparing binary\n")),(0,r.kt)("p",null,"The node would be compiled\nSelect the mode of your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? Select validator type \u203a\n\u276f Single\n  DePool\n")),(0,r.kt)("p",null,"Create a new seed phrase or import existing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Creating validator wallet\n\u276f Generate new keys\n  Import seed\n")),(0,r.kt)("p",null,"6.1 Define the desired stake per round. Notice you will need an amount of\ntokens 2*(stake per round)+10"),(0,r.kt)("p",null,'Leave "stake factor (ratio between maximum available stake on the network and\nyour stake) to 3 as it is standard in the Venom network'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2714 Stake per round (EVER) \xb7 10000\n\u2714 Stake factor \xb7 3\n[2/2] Validator configured successfully. Great!\n\nValidator wallet address:\n\n\nRequired validator wallet balance: 20010 EVER\n  \u2022 10 EVER, maintenance balance\n  \u2022 2 x 20010 EVER, stakes for each round\n\nMake sure you back up your keys:\n/home/validator/.stever/keys/vld.keys.json\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you back up your keys after the initial configuration!\nAll keys are stored at $HOME/.stever/keys/")),(0,r.kt)("p",null,"Init validator services"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ~/.cargo/bin/stever init systemd\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Service MUST NOT run as the root user")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0/2] Preparing services\n? Select the user from which the service will work \u203a\n\u276f validator\n  root\n")),(0,r.kt)("p",null,"It will create two services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ever-validator-manager - control service that takes part in elections,\nrecovers stake and performs other tasks with the Elector contract"),(0,r.kt)("li",{parentName:"ul"},"ever-validator - node itself, managing validation process")),(0,r.kt)("p",null,"you can check the status of both services with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"service ever-validator status\nservice ever-validator-manager status\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Transfer tokens to the Validator contract")),(0,r.kt)("p",null,"Transfer the required amount of tokens to the address generated in the previous\nstep. The Wallet will become active after the first stake"),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Wait until the elections start")),(0,r.kt)("p",null,"When elections start the ever-validator-manager process will automatically\nstake the desired amount of tokens. You can check the current state of\nelections in ",(0,r.kt)("a",{parentName:"p",href:"https://venomscan.com/validators"},"Venomscan.com"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'ever-validator-manager adds 1 venom for the stake to pay for the transaction\nfees, and you will require to add 1 venom to the "stake and bonuses recovery"\ntransaction. So always keep some additional amount of tokens in the Validator')),(0,r.kt)("p",null,"If everything is fine - you should see your address in the validators list for\nthe next round."))}c.isMDXComponent=!0}}]);