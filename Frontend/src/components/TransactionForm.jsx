import { useState } from "react";
import axios from "axios";
function TransactionForm() {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleAmountChange = (event) => {
    const input = event.target.value;
    // Allow digits and one decimal point for amounts
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(input);
    }
  };

  const handleNameChange = (event) => {
    setTransactionName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      amount &&
      parseFloat(amount) > 0 &&
      category &&
      date &&
      (category !== "others" || transactionName)
    ) {
      const newtransaction = {
        name: category === "others" ? transactionName : category,
        amount: parseFloat(amount),
        category,
        date,
      };

      try {
        const res = await axios.post(
          "https://expense-tracker-y9fs.onrender.com/api/expense",
          newtransaction
        );
        console.log("Transaction Saved", res.data);
        setTransactionName("");
        setAmount("");
        setCategory("");
        setDate("");
      } catch (err) {
        console.error("Error occurred in saving the data: " + err);
      }
    } else {
      alert("Please fill in all fields with valid data");
    }
  };

  return (
    <div className="OuterCard">
      <div className="InnerItems">
        <div className="title">
          <h2>Transaction Form</h2>
        </div>

        <div className="TextInput">
          {/* Category Dropdown */}
          <select
            className="DropDown"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="bills">Bills</option>
            <option value="others">Others</option>
          </select>
          {category === "others" && (
            <input
              type="text"
              placeholder="Enter Custom Category"
              value={transactionName}
              onChange={handleNameChange}
            />
          )}

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <button type="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default TransactionForm;
