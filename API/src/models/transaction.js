
import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  txHash: {
    type: String,
    required: true,
    unique: true
  },
  userEmail: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export class Transaction extends mongoose.model('Transaction', transactionSchema) {}
