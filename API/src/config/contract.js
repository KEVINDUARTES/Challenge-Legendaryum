const web3 = require('./web3');
const contractABI = require('<path-to-your-contract-abi>');
const contractAddress = '<your-contract-address>';
const contract = new web3.eth.Contract(contractABI, contractAddress);

module.exports = contract;
