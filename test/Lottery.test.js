const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider()); // this will change if rinkeby is used
const {interface,bytecode} = require('../compile');

let lottery;
let accounts;

// TESTS FOR THE SMART CONTRACT FILE CALLED Lottery.sol
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas:'1000000'});
});
//TEST#1 Checks that the smart contract is deployed 
describe('Lottery contract', () =>{
    it('deploys contract', () => {
        assert.ok(lottery.options.address);
    });
});
// TEST#2 Checks that mutiple accounts can enter the lottery contract 
it('allows multiple accounts to enter', async () => {
     //check for player 1 in the lottery 
    await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei('0.02','ether')
    });
     // check for player 2 in the lottery 
    await lottery.methods.enter().send({
        from: accounts[1],
        value: web3.utils.toWei('0.02','ether')
    });
    //Check for player 3 in the lottery 
    await lottery.methods.enter().send({
        from: accounts[2],
        value: web3.utils.toWei('0.02','ether')
    });
    const players  = await lottery.methods.getPlayers().call({
        from: accounts[0]
    });
    assert.equal(accounts[0],players[0]);
    assert.equal(accounts[1],players[1]);
    assert.equal(accounts[2],players[2]);
    assert.equal(3,players.length);
    });
    // TEST#3 Checks that there is a minimum requirement to enter the lottery 
    it('requires a min amount of ether to enter', async () => {
    try{
        await lottery.methods.enter().send({ // send in transaction
            from: accounts[0],
            value: 0
    }); 
    assert(false);
  } catch (err) {
      assert(err);
  }
});
// TEST#4 Checks that one account can enter 
it('allows one account to enter', async () => { 
    await lottery.methods.enter().send({
        from: accounts[0],
        value: web3.utils.toWei('0.02','ether')
    });
    const players = await lottery.methods.getPlayers().call({
        from: accounts[0],
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
});
// #TEST#5 Checks that only the manager account can pick the lottery winner
it('only manager can call pickWinner', async () => {
    try{
        await lottery.methods.pickWinner().send({
            from: accounts[1]
        });
        assert(false);
    }catch(err){
        assert(err);
    }
  /*  // TEST#6
it('sends money to the winner and resets players array', async () =>{
        await lottery.methods.enter().send({
           from: accounts[0],
           value: web3.utils.toWei('2', 'ether') 
        });
        const initialBalance = await web3.eth.getBalance(accounts[0]); // balance of given account in wei (external or contract address)
        await lottery.methods.pickWinner().send({ from:accounts[0]});
        const finalBalance = await web3.eth.getBalance(accounts[0]);
        const difference = finalBalance - initialBalance;
        console.log(finalBalance - initialBalance);
        assert(difference > web3.utils.toWei('1.8','ether'));
    });*/
}); // end of test script 
