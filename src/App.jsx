const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobs");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

// CORS Configuration
const corsOptions = {
  origin: ["http://localhost:5173", "https://mployee-frontend.vercel.app"], // Allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type"], // Allowed headers
};

// Middleware
app.use(cors(corsOptions)); // Enable CORS
app.use(express.json()); // Parse incoming JSON requests

// Database Connection
connectDB();

// Routes
app.use("/api/jobs", jobRoutes); // Prefix API routes with `/api/jobs`

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
