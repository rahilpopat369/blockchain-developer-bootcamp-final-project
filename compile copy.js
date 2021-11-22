// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc'); // solidity compiler

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol'); // import inbox.sol contract
const source = fs.readFileSync(lotteryPath, 'utf8');

console.log(solc.compile(source,1)); // logs the output once the script has compiled to the console
// COMPILES THE SOLIDITY CODE of Inbox solidity source code file
module.exports = solc.compile(source,1).contracts[':Lottery']; // extract the inbox object once the script has compiled

