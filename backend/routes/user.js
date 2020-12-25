import express from 'express';
import { auth } from '../middleware/auth.js';
import {
  registerUser,
  loginUser,
  deleteUser,
  isTokenValid,
} from '../controllers/user.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete', auth, deleteUser);
router.get('/isTokenValid', isTokenValid);

export default router;
