import web3 from './web3.js'
const address = '0xF92eBDaD9d6D0E854ca98c57aB76566B3CBd96Fa';
const abi =
[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enterLottery","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]


export default new web3.eth.Contract(abi,address);
