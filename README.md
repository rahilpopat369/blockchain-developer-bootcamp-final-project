Project Name: BlockChain Lottery Dapp 
---------------------------------------------------------------------------------------------------------
Project Directory 
--------------------------------------------------------------------------------------------------------
1) Folder Name: contracts
     Description: Contains the smart contracts solidity files called Lottery.sol
2) Folder Name: test
     Description: Contains 5 units test files that have sucessfully been passed
     Please Note: See picture of passed tests called testresults in root project folder
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

Installing dependencies
-----------------------------------------------------------------------------------
npm install 
npm install --save-dev mocha 
npm install -g create-react-app 
npm install --save react react-dom
npm install -g node-modules

Running 5 smart contract unit tests
-----------------------------------------------
Clone the github project link: https://rahilpopat369.github.io/blockchain-developer-bootcamp-final-project/
Run the following commands and install the following dependencies for the Mocha test runner inside the root folder 
1) npm install --save-dev mocha
2) npm test 
3) Results: 5 passing units tests should be seen (Picture of results attached)

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
Share the link of the recording to view the project walkthrough screencast 
