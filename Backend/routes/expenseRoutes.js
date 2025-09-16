import express, { Router } from "express";
import Expense from "../models/Expense";
const router =exense.Router();
router.get("/",async(req,res)=>{
    try{
        const expenses=await Expense.find();
        res.json(expense);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});
router.post("/",async(req,res)=>{
    try{
        const newExpense=new Expense(req.body);
        await newExpense.save();
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
});
export default router;