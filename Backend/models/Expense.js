import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String, required: true },
    paymentMode: { type: String, required: false } // Make it optional or remove entirely
}, {
    timestamps: true // This adds createdAt and updatedAt automatically
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;