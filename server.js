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
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.get('/dashboard', async (req, res) => {
   try {
       res.json(await Advice.find({}));
   } catch (error) {
       res.status(400).json(error);
   }
});
app.post('/dashboard', async (req, res) => {
    console.log(req.body)
    try {
        res.json(await Advice.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
})

app.listen(PORT, ()=> {
    console.log(`Express is listening on port, ${PORT}`)
})