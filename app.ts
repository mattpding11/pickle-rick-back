require('dotenv').config();

import Server from './src/models/server'

const app = new Server();

app.listen();
