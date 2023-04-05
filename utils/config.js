require('dotenv').config();

let PORT = process.env.PORT || 4000;
let MONGODB_URI = process.env.MONGODB_URI;
let SECRET = process.env.SECRET;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
