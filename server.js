const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const locationRoutes = require("./routes/locationRoutes");
const pictureRoutes = require("./routes/pictureRoutes");
const userRoutes = require("./routes/userRoutes");
var cors = require('cors');


const PORT = process.env.PORT || 3001;

app.use(cors());

/*app.use(cors({
  origin: 'http://localhost:3000',  // Set the allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],   // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
  credentials: true  // Allow credentials like cookies or authorization headers (optional)
}));*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Allows CORS for testing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

/*app.use(cors({
  origin: 'https://wherehaveibeen.netlify.app',  // Set the allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],   // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
  credentials: true  // Allow credentials like cookies or authorization headers (optional)
}));*/

// Handle preflight (OPTIONS) requests
app.options('*', cors());  // This will ensure that OPTIONS requests are handled by CORS middleware

//json middleware
app.use(express.json());

//prints incoming requests
app.use((req,res,next) => {
  console.log(req.path, req.method);
  next();
})

//routes
app.use("/api/locations", locationRoutes);
app.use("/api/pictures", pictureRoutes);
app.use("/api/users", userRoutes);

//static files middleware
app.use('/uploads', express.static('uploads'));

//listen for requests
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//Connect to database(waits to connect before starting server, should probably change this)
//console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

  })
  .catch((err) => {
    console.log(err);

  });


