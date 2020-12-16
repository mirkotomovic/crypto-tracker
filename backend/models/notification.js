import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
  crypto: String,
  fiat: String,
  value: Number,
  floor: {
    type: Boolean,
    default: false,
  },
  owner: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;
