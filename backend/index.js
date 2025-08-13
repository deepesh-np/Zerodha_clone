/** @format */

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const url = process.env.MONGO_URL;
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(url);
    console.log('DB Connected');
  } catch (err) {
    console.error('DB Connection Error:', err);
    process.exit(1);
  }
}
const PORT = process.env.PORT || 3002;

const app = express();

app.listen(PORT, () => {
  console.log('App Started');
});
