const web3 = require('./web3');
const express = require('express');
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const email = req.body?.email;
    if (!email) {
      throw new Error('Email is missing from request body');
    }
    const user = new User(email);
    const walletAddress = user.getWalletAddress();

    const tokenContractAddress = '';
    if (!tokenContractAddress) {
      throw new Error('Token contract address is missing');
    }

    const tokenContract = { transfer: async (toAddress, amount) => web3.eth.sendTransaction({ to: toAddress, from: web3.eth.defaultAccount, value: amount }) };
    const tokens = req.body.tokens;
    const transaction = await tokenContract.transfer(walletAddress, tokens);

    const dbTransaction = new transaction(transaction.hash, user.getEmail());
    dbTransaction.save();

    res.status(200).json({ message: 'Tokens integrated successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error integrating tokens.' });
  }
});

module.exports = router;
