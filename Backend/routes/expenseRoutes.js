import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new expense
router.post("/", async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.json(newExpense); // send saved object back
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
