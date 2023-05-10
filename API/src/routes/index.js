const express = require('express');
const router = express.Router();
const contract = require('./contract');
const isAuthenticated = require('./authMiddleware');

router.post('/buy-tokens', isAuthenticated, async (req, res) => {
  try {
    const { amount } = req.body;

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: 'El monto de tokens debe ser un número positivo' });
    }

    const amountWei = web3.utils.toWei(amount.toString(), 'ether');

    const userAddress = req.user.walletAddress;

    const transaction = await contract.methods.buyTokens(userAddress).send({ value: amountWei });

    return res.json({ message: `Se han comprado ${amount} tokens exitosamente`, transaction });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error al comprar tokens' });
  }
});

module.exports = router;
