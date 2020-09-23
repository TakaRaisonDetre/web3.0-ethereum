pragma solidity ^0.4.0;

contract Lottery {


   // variable to store manager address
   address public manager;


   // we are storing the address of the partcipants
   address[] public participants;

    constructor() public {
        // msg.sender is the person who deploy this contract
        manager = msg.sender;
    }

    // Function to enter the lottery we are going to make each users
    // pay a small amount to enter the lottery

    function enterLottery() public payable {
        require(msg.value > 0.01 ether);
        participants.push(msg.sender);
    }

    function pickWinner() public {
        // check only that the manager can call the pick winner function
        require(msg.sender == manager);

        // select random participants using Hashing
        uint index = random() % participants.length;

        // transfer the contract balance to the participants
        participants[index].transfer(this.balance);
        // emply the address array
        participants = new address[](0);
    }

    function random() private view returns(uint256){
       return uint(keccak256(block.difficulty, now, participants));
    }

}
