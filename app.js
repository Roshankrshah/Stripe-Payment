require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Stripe Payment');
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});