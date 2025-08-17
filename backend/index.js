/** @format */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');

const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/AuthRoute');

const url = process.env.MONGO_URL;
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
  } catch (err) {
    console.error('DB Connection Error:', err);
    process.exit(1);
  }
}

const PORT = process.env.PORT || 3002;

const app = express();

const allowedOrigins = ['http://localhost:5174', 'http://localhost:5173'];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// app.options(
//   '*',
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//   })
// );

// app.use(bodyParser.json());

const { HoldingsModel } = require('./model/HoldingsModel');
const { OrdersModel } = require('./model/OrdersModel');
const { PositionModel } = require('./model/PositionModel');

app.get('/allHoldings', async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPosition', async (req, res) => {
  let allPosition = await PositionModel.find({});
  res.json(allPosition);
});

app.post('/newOrder', async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send('Order saved');
});

app.use(cookieParser());
app.use(express.json());
app.use('/', authRoute);

app.listen(PORT, () => {
  console.log('App Started');
});
