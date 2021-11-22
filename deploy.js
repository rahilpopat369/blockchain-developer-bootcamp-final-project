// deploy code will go here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3'); // portal to Ethereum world (retrieve info and make changes)
const {interface,bytecode} = require('./compile');

// ACCESSING METAMASK ACCOUNT AND CONNECTING TO RINKEBY NETWORK 
// -----------------------------------------------
const provider = new HDWalletProvider(
    // Metamask mnemonic pass phrase which will be used
    //mmnemonic contains private and public key and can be used to generate many accounts
 'recall pottery nest debris exotic junior settle veteran festival monkey thunder decide',
 'https://rinkeby.infura.io/v3/f340d61818ee48a98a2288f0b7528895'
);
//-----------------------------------------------

const web3 = new Web3(provider);
const deploy = async () =>{
    const accounts = await web3.eth.getAccounts(); // generates many accounts
    console.log('Attempting to deploy from account',accounts[0])
    //actual contract deployment statememt
    // create new copy of contracts
        const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        //send tx to network
        .send({ gas:'1000000',gasPrice: '5000000000',from: accounts[0] });
        console.log(interface);
        // we need the contarct address aftee this
        console.log('Contract deployed to',result.options.address)
       
};
deploy();