import mongoose from 'mongoose';
import Notification from '../models/notification.js';

export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
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
