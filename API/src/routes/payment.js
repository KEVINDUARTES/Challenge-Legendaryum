import express from 'express';
import { paymentRouter} from '../controllers/';

const router = express.Router();

router.post('/',  paymentRouter);

export default router;
