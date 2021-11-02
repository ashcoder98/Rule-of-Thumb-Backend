const express = require('express');
const app = express();
require('dotenv').config();
const { PORT, DATABASE_URL } = process.env


app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, ()=> {
    console.log(`Express is listening on port, ${PORT}`)
})