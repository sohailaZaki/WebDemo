const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middelwares/errorHandelr");
const app = express();
const path = require('path');
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const productRoute = require('./routes/ProductRoute');
const authRoute = require('./routes/authRoute');
const uploadRoute = require('./routes/UploadRoute');
const checkRoute = require('./routes/CheckRoute');
const morgan = require("morgan");
const cors = require("cors");

dbConnect();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'my-react-app', 'src')));
// Routes
app.use('/images', express.static(path.join(__dirname, 'upload', 'images')));
app.use('/', productRoute);
app.use('/', authRoute);
app.use('/upload', uploadRoute);
app.use('/', checkRoute);

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'my-react-app', 'src', 'index.js'));
});

// Error Handling Middleware
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});