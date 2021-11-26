
Project Directory 
--------------------------------------------------------------------------------------------------------
1) Folder Name: contracts
     Description: Contains the smart contract solidity files called Lottery.sol
2) Folder Name: test
     Description: Contains 5 units test files that have sucessfully been passed (as seen in video attached)
3) Folder Name: lottery-react
    Description: Contains the react scripts and files for the front-end dapp 
4) Remaining JavaScript File Descriptions
    compile.js: JS script used to compile the smart contract
    deploy.js: JS script used to deploy the smart contract to the rinkeby test network
   
----------------------------------------------------------------------------------
How to acesss the front-end decentralized application 
----------------------------------------------------------------------------------
Visit: https://rahilpopat369.github.io/blockchain-developer-bootcamp-final-project
Please have Metamask installed as an extension and make sure it is on the Rinkeby Network and sufficient Rinkeby test ETH is available in the MM wallet when interacting with smart contract through the front-end dapp accessed through the link above.

List of all dependencies
-----------------------------------------------------------------------------------
1) npm install 
2) npm install --save-dev mocha 
3) npm install -g create-react-app 
4) npm install --save react react-dom
5) npm install -g node-modules
6) npm install @truffle/hdwallet-provider

Running 5 smart contract unit tests
-----------------------------------------------
Clone the github project link: https://github.com/rahilpopat369/blockchain-developer-bootcamp-final-project
Run the following commands and install the following dependencies for the Mocha test runner inside the root folder 
1) npm install 
2) npm install --save-dev mocha
3) npm test 
4) Results: 5 passing units tests as seen in the video clip at the bottom of this file

Compile and Deploy smart contract to Rinkeby Test Network
-----------------------------------------------
1) Go inside the root project folder
2) Run the command 'node deploy.js' : This will compile and deploy smart contract to the rinkeby test network 
This will produce the smart contract ABI interface and the deployed address of the smart contract on the rinkeby test network 

In order to link the deployed smart contract to the react front end, follow the follwing steps:
1) Copy the ABI and deployed address after the command 'node deploy.js' is completed
2) Paste the ABI and address in the file called lottery.js inside the src folder in lottery-react. This will link the front-end to the deployed instance of the smart contract deployed on the rinkeby network. 

Screencast of a project walkthrough, including trsnactions and seeing updated status 
-----------------------------------------------
https://www.loom.com/share/9f4057415da84a949f281c26fcb98021

Steps to run project locally using github repo link
----------------------------------------------------------------------------
1) Create a new folder locally and clone the repo https://github.com/rahilpopat369/blockchain-developer-bootcamp-final-project
2) Change directory, run the command cd blockchain-developer-bootcamp-final-project
3) to compile and deploy smart contract run: 'node compile.js' and node 'deploy.js'
4) Install dependencies: npm install --save-dev mocha and npm install 
5) Run npm test to run the unit tests for the smart contract
6) Run the react front-end go inside the folder lottery-react and install 6,7,8,9 dependecies :
7) npm install -g create-react-app 
8) npm install --save react react-dom
9) npm install -g node-modules
10) Add a .env file in the root folder and paste the follwing into the file : SKIP_PREFLIGHT_CHECK=true 
11) Run the command npm start to start up the localhost:3000 server
Please see a video demonstration of the steps 1) to 11) using the link below
https://www.loom.com/share/a214fba81b9c472490ab5d8534146685

Ethereum Address to Receive NFT: 0xBE6a83EEDEA60417FD9056D4E2a86823A63CBFd8
