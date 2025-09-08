import { useState } from 'react';

function TransactionForm() {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");

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
    if (transactionName && amount && parseFloat(amount) > 0) {
      console.log('Transaction:', {
        name: transactionName,
        amount: parseFloat(amount)
      });
      // Clear form after submission
      setTransactionName("");
      setAmount("");
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
          <input 
            type="text" 
            placeholder="Enter Transaction Name"
            value={transactionName}
            onChange={handleNameChange}
          />
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