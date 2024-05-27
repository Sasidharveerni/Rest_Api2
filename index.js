const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const app = express();

const productRoutes = require('./src/routes/product');

app.use(bodyParser.urlencoded())
app.use(express.json())
app.use(productRoutes)

app.get('/', (req, res) => {
    res.send('E-commerce backend is running');
})


app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database is connected!!'))
    .catch((err) => console.log('There is an error', err))
})