const mongoose = require('mongoose');

require('dotenv').config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
        console.log("DB connection is successful");
    }).catch((err) => {
        console.error(err.message);
        console.log("DB connection failed");
        process.exit(1);
    })
}

module.exports = dbConnect;