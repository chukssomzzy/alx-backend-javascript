#!/usr/bin/node

import express from 'express';
import mapApp from './routes';

const app = express();
const port = 1245;

mapApp(app);

app.listen(port, () => console.log(`Server Listening on ${port}`));

export default app;
