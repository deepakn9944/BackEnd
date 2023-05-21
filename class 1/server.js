// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.listen(3000, () => {
//     console.log("Server Started at port no. 3000")
// });



// app.get('/', (request, response) => {
//     response.send("hello Jee, Kaise ho saare");
// })

// app.post('/api/cars', (req, res) => {
//     const { name, brand } = req.body;
//     console.log(name);
//     console.log(brand);
//     res.send("Done")
// })


// const mongoose = require('mongoose');
// mongoose
//   .connect("mongodb://127.0.0.1/myDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("connection succesful");
//   })
//   .catch((error) => {
//     console.log("connection error", error);
//   });


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("server started on port number 3000");
})

app.get('/', (req, res) => {
  res.send("hello jee ");
})

app.post('/api/cars', (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully.");
})


const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/cars", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => { console.log("connection successfull") })
  .catch((error) => { console.log("error recieved") });