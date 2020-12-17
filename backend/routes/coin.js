import express from 'express';
import { getCoin } from '../controllers/coin.js';

const router = express.Router();

router.get('/', getCoin);

export default router;
