import mongoose from 'mongoose';
import Notification from '../models/notification.js';

export const getNotifications = async (req, res) => {
  try {
    const query = {
      owner: req.query.owner,
    };
    const notifications = await Notification.find(query).sort({
      updatedAt: 1,
      _id: 1,
    });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createNotification = async (req, res) => {
  const notification = req.body;
  const newNotification = new Notification(notification);

  try {
    await newNotification.save();
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteNotification = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Notification with id: ${id} not found!`);

  await Notification.findByIdAndRemove(id);

  res.status(200).json({ message: 'Notification deleted!' });
};

export const updateNotification = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`Notification with id: ${id} not found!`);

  const updatedNotification = { ...req.body, _id: id };

  await Notification.findByIdAndUpdate(id, updatedNotification, { new: true });

  res.json(updatedNotification);
};
