const express = require("express");
const cloudinary = require("cloudinary");
const routes = require('./routes/uploadRoute')
const port = 3002;
const {
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET,
} = require("./config");

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET,
});

// Initialize Express
const app = express();

// Initialize Express Middleware
app.use(express.json())

// Create Express Route
app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api", routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
