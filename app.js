require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Stripe Payment');
})

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});