import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Expense from "./models/Expense.js";
import expenseRoutes from "./routes/expenseRoutes.js";
dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// IMPORTANT: Middleware order matters!
app.use(cors({
  origin: "https://your-frontend.vercel.app", // apna Vercel URL daalna
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json()); // Move this BEFORE routes!

// Routes
app.use("/api/expense", expenseRoutes);

app.get("/", (req, res) => {
    res.send("Hello from Nether");
});

app.post("/something", (req, res) => {
    console.log("Something endpoint hit:", req.body);
    res.json({ message: "Data received", data: req.body });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB Connection error", err));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});