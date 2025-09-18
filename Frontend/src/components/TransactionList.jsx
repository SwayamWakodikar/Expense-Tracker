import { useState, useEffect } from "react";
import axios from "axios";

function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchTransactions = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:5000/api/expense");
            setTransactions(response.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching transactions:", err);
            setError("Failed to fetch transactions");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchTransactions();
    }, []);
    
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    
    const formatAmount = (amount) => {
        return `₹${amount.toFixed(2)}`;
    };

    if (loading) {
        return (
            <div className="OuterCard">
                <div className="InnerItems">
                    <h2 className="text-xl font-bold mb-5 text-white">Transaction List</h2>
                    <div className="text-center py-8 text-white">Loading transactions...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="OuterCard">
                <div className="InnerItems">
                    <h2 className="text-xl font-bold mb-5">Transaction List</h2>
                    <div className="text-center py-8 text-red-600">
                        {error}
                        <button
                            onClick={fetchTransactions}
                            className="ml-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="ListOuterCard">
            <div className="ListInnerItems">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-bold text-white">Transaction List</h2>
                    <button
                        onClick={fetchTransactions}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
                    >
                        Refresh
                    </button>
                </div>
                
                {/* Add custom scrollbar class here */}
                <div className="max-h-96 overflow-y-auto blue-theme-scrollbar">
                    <style jsx>{`
                        .blue-theme-scrollbar::-webkit-scrollbar {
                            width: 10px;
                        }
                        
                        .blue-theme-scrollbar::-webkit-scrollbar-track {
                            background: #dbeafe;
                            border-radius: 12px;
                        }
                        
                        .blue-theme-scrollbar::-webkit-scrollbar-thumb {
                            background: linear-gradient(45deg, #3b82f6, #1d4ed8);
                            border-radius: 12px;
                            border: 1px solid #dbeafe;
                        }
                        
                        .blue-theme-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: linear-gradient(45deg, #2563eb, #1e40af);
                        }
                    `}</style>
                    
                    {transactions.length === 0 ? (
                        <div className="text-center py-10 text-white italic">
                            No transactions found. Add your first transaction!
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {transactions.map((transaction) => (
                                <div key={transaction._id} className="flex justify-between items-center p-3 bg-blue-200 rounded-2xl border-transparent transition-colors duration-200">
                                    <div className="flex flex-col">
                                        <div className="font-semibold text-black">{transaction.name}</div>
                                        <span className="text-xs text-white bg-blue-600 px-2 py-1 rounded-full w-fit mt-1 capitalize">
                                            {transaction.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="font-bold text-red-500">{formatAmount(transaction.amount)}</div>
                                        <div className="text-xs text-black">{formatDate(transaction.date)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TransactionList;