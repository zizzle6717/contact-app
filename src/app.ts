import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import v1Router from './routes/v1';
import v2Router from './routes/v2';

// App config
const app = express();
const base = '/api';

// Middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/coverage', express.static('coverage/'));
app.use('/_healthz', (req, res) => { res.status(200).json('OK'); });

app.use(base, v1Router);
app.use(base, v2Router);

export default app;
