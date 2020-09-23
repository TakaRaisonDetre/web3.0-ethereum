
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile.js');

const provider = new HDWalletProvider(
  'vast region knife develop pencil marriage exhaust shadow dance cupboard decrease practice',
  'https://rinkeby.infura.io/v3/deeaac16d0cb408eb10eb2a9ad072cb7',
  5
);

const web3 = new Web3(provider);
// I added
web3.setProvider(provider); // <==============


// deploy this contract to Eth rinkeby network
const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Contract is deployed by the manager with address', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data : '0x' + bytecode})
  .send({gas : '2000000', from : accounts[0]})

console.log('contract deployed to address', result.options.address);
//0x8A78f83b81C9c0364528dACB3Fb7F185Ff58B53B
}


deploy();
