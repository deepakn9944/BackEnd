const mongoose = require('mongoose');

require('dotenv').config();

exports.connect = () => {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connected successfully");
      })
      .catch((err) => {
        console.log("DB connection unsuccessful");
        console.error(err);
        process.exit(1);
      });
}