import express from 'express';
import {
  parseData,
} from '../../controllers/v1/contacts';

const router = express.Router();

router.post('/parse', parseData);

export default router;
