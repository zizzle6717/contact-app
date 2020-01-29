import express from 'express';
import contactsRouter from './contactsRouter';

const router = express.Router();

router.use('/v1', contactsRouter);

export default router;
