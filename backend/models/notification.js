import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
  crypto: String,
  cmc_id: Number,
  threshold: Number,
  floor: {
    type: Boolean,
    default: false,
  },
  owner: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
