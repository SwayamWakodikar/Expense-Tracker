import { useState } from "react";
function TransactionList() {
    return (
    <div className="OuterCard">
        <div className="InnerItems">
            <div className="title">
                <h2>Transaction List</h2>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Category</th>
                        
                        <th>Date</th>

                        <th>Expense</th>
                    </tr>
                </table>
            </div>
        </div>
        
    </div>
        
    );
        
    
}
export default TransactionList