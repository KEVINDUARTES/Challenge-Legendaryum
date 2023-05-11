import React, { useState } from 'react';
import TokenSale from '../contracts/TokenSale.json';
import getWeb3 from '../web3';

function BuyTokensForm() {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isNaN(amount) || amount <= 0) {
      alert('El monto de tokens debe ser un número positivo.');
      return;
    }

    setIsLoading(true);

    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      const contractAddress = '<your-contract-address>';
      const contractABI = TokenSale.abi;
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const amountWei = web3.utils.toWei(amount.toString(), 'ether');
      await contract.methods.buyTokens(userAddress).send({ value: amountWei });
      alert(`Se han comprado ${amount} tokens exitosamente.`);
    } catch (error) {
      alert(`Ha ocurrido un error al comprar tokens: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Monto de Tokens:</label>
      <input type="number" id="amount" name="amount" step="0.01" min="0" value={amount} onChange={handleAmountChange} disabled={isLoading} />
      <button type="submit" disabled={isLoading}>Comprar Tokens</button>
      {isLoading && <p>Comprando Tokens...</p>}
    </form>
  );
}

export default BuyTokensForm;
