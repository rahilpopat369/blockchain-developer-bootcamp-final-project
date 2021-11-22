pragma solidity ^0.4.17;

contract Lottery {
// Comments are written in green 
 address public manager; // stores address of the lottery contract manager- front end will need this
 address[] public players;
    
 function Lottery() public { // constructor function  
    // the 'msg' global variable object describes the account-transaction part to the Contract Instance
    // msg.data, msg.gas, msg.sender, msg,value (variable types)
    manager = msg.sender;
    // Reference Types: fixe array, dynamic array, mapping, struct (object like)
    } // end function 1
    
    // Enter the lottery function that is Payable since it receives ether into the function 
    function enter() public payable {
        require(msg.value > .01 ether); // ether gets converted to wei
        players.push(msg.sender);
     } // end function 2
     
    function random() private view returns (uint) {
        //sudo random function to generate a random number
        return uint(keccak256(block.difficulty, now, players));// hash generator
        } // end function 
    
    // pick winner function
    function pickWinner() public  restricted {
        require(msg.sender == manager); // only the manager who created contarct can pick winner
        uint256 index = random() % players.length;
        players[index].transfer(this.balance); //address of the lottery winner gets trans all ether
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    // function to get all the players entered into the lottery contract 
    function getPlayers() public view returns (address[]) {
        return players;   
    }
} // end of Lottery contract 