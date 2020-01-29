import express from 'express';
import {
  parseData,
} from '../../controllers/v2/contacts';

const router = express.Router();

router.post('/parse', parseData);

export default router;
