// DEPENDENCIES
const express = require('express');
const app = express();
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env;
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.connect(DATABASE_URL);

const db = mongoose.connection
db.on('open', ()=> console.log('You are connected to MongoDB'));
db.on('close', ()=> console.log('You are disconnected to MongoDB'));
db.on('error', (error) => console.log(error));

const AdviceSchema = new mongoose.Schema({
    username: String,
    advice: String,
});
const Advice = mongoose.model("Advice", AdviceSchema);




app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, ()=> {
    console.log(`Express is listening on port, ${PORT}`)
})