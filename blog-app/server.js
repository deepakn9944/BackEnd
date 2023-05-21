const express = require('express');
const app = express();

require("dotenv").config();

const port = process.env.PORT || 4000;

app.use(express.json());

const blogRoutes = require('./routes/blogs');

app.use('/api/v1', blogRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
    res.send(`<h1>HI</h1>`);
})