const express = require('express');
const db = require('./db');
const busRoutes = require('./bus');

const app = express();

app.use(express.json());

app.use('/api', busRoutes);
app.listen(() => {});