import { useState } from 'react';

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

  const handleSubmit = () => {
    if (transactionName && amount && parseFloat(amount) > 0 && category && date) {
      console.log('Transaction:', {
        name: transactionName,
        amount: parseFloat(amount),
        category,
        date
      });
      // Clear form after submission
      setTransactionName("");
      setAmount("");
      setCategory("");
      setDate("");
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
          <select className='DropDown'
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

          {/* Conditional Input for "Others" */}
          {category === "others" && (
            <input 
              type="text" 
              placeholder="Enter Custom Category"
              value={transactionName}
              onChange={handleNameChange}
            />
          )}

          {/* Date Picker */}
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Amount Input */}
          <input 
            type="text" 
            placeholder="Enter Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        
        <button onClick={handleSubmit}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default TransactionForm;
