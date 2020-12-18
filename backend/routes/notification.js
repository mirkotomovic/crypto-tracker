import express from 'express';
import {
  getNotifications,
  createNotification,
  deleteNotification,
  updateNotification,
} from '../controllers/notification.js';
const router = express.Router();

router.get('/', getNotifications);
router.post('/', createNotification);
router.delete('/:id', deleteNotification);
router.patch('/:id', updateNotification);

export default router;
