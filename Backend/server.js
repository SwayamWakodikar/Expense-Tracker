import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Expense from "./models/Expense.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// ✅ Updated allowed origins with correct URLs
const allowedOrigins = [
  "http://localhost:5173",                              // local dev
  "https://expense-tracker-pied-rho.vercel.app",       // your Vercel frontend (removed trailing slash)
  "https://expense-tracker-pied-rho.vercel.app/"       // with trailing slash just in case
];

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin); // Add logging for debugging
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api/expense", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Nether Backend 🚀");
});

app.post("/something", (req, res) => {
  console.log("Something endpoint hit:", req.body);
  res.json({ message: "Data received", data: req.body });
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ MongoDB Connection error", err));

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});