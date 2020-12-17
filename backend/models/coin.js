import mongoose from 'mongoose';

const coinSchema = mongoose.Schema({
  name: String,
  cmc_id: Number,
  value: Number,
  fiat_cmc_id: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Coin = mongoose.model('Coin', coinSchema);

export default Coin;
