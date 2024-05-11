const bodyParser = require("body-parser");
const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middelwares/errorHandelr");
const app = express();
const path = require('path'); // Import path module
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const productRoute = require('./routes/productRoute');
const authRoute = require('./routes/authRoute');
const uploadRoute = require('./routes/UploadRoute'); // Import the new route file
// const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();
// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
// Serve static files from the 'upload/images' directory
app.use('/images', express.static(path.join(__dirname, 'upload', 'images')));
app.use('/', productRoute);
app.use('/', authRoute);
app.use('/upload', uploadRoute);
// Error Handling Middleware
app.use(errorHandler);
app.use(notFound);
app.listen(PORT, () => {
  console.log(`Server is running  at PORT ${PORT}`);
});




