import express from 'express';
import {claveEspecifica} from '../controllers/';

const router = express.Router();

router.get('/',  claveEspecifica);

export default router;
