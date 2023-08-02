require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const stripeController = require('./controllers/stripeController');

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());
app.use(express.static('./public'));

app.post('/stripe',stripeController);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});