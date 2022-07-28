const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./database/db');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000

connectDB();

app.use(cors())
app.use(express.json());
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)

app.listen(PORT, () => {
    console.log(`Server has been running http://localhost:${PORT}`)
})