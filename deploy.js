const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
  'vast region knife develop pencil marriage exhaust shadow dance cupboard decrease practice',
  'https://rinkeby.infura.io/v3/deeaac16d0cb408eb10eb2a9ad072cb7'
);

const web3 = new Web3(provider);
const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
}

deploy();
