const path = require('path');
const fs = require('fs');
const solc = require('solc');

const LotteryPath = path.resolve(__dirname, 'contracts', 'lottery.sol');
const source = fs.readFileSync(LotteryPath, 'utf8');

console.log(solc.compile(source,1).contracts[':Lottery']);
