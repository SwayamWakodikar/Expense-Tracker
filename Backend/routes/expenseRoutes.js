import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: -1 }); // Sort by newest first
    res.json(expenses);
  } catch (err) {
    console.error("Error fetching expenses:", err);
    res.status(500).json({ error: err.message });
  }
});

// POST a new expense
router.post("/", async (req, res) => {
  try {
    console.log("Received expense data:", req.body);
    
    const { name, amount, category, date } = req.body;
    
    // Validate required fields
    if (!name || !amount || !category || !date) {
      return res.status(400).json({ 
        error: "Missing required fields: name, amount, category, date" 
      });
    }
    
    const newExpense = new Expense({
      name,
      amount: parseFloat(amount),
      category,
      date: new Date(date)
    });
    
    const savedExpense = await newExpense.save();
    console.log("Expense saved successfully:", savedExpense);
    
    res.status(201).json({
      message: "Expense saved successfully",
      expense: savedExpense
    });
    
  } catch (err) {
    console.error("Error saving expense:", err);
    res.status(400).json({ 
      error: err.message,
      details: "Failed to save expense to database"
    });
  }
});

export default router;