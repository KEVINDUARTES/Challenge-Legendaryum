import express from 'express';
import { integrateTokens } from '../controllers/tokens';

const router = express.Router();

router.post('/', integrateTokens);

export default router;
