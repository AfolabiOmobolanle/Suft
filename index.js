const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Port setup
const PORT = process.env.PORT || 2000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
