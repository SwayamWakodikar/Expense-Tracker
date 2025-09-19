
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

// const data = [
//     {
//         name: 'Jan',
//         Expense: 1000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Feb',
//         Expense: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Mar',
//         Expense: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Apr',
//         Expense: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'May',
//         Expense: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Jun',
//         Expense: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Jul',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Aug',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Sep',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Oct',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Nov',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
//     {
//         name: 'Dec',
//         Expense: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];
function Graph() {
const [chartData,setChartData]=useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const fetchTransactions=async () =>{
    try{
        setLoading(true);
        const res=await axios.get("https://localhost:5000/api/expense");
        setChartData(res.data);
        setError(null);

    }
    catch(err){
        console.error("Error occured while fetching the data",err);
        setError("Error Occured");

    }
    finally{
        setLoading(false);
    }
}
useEffect(()=>{
    fetchTransactions();
},[]);
    return (
        <div className="GraphOuterCard">
            <div className="GraphInnerItems">
                <div className="Graphtitle">
                    <h2>Your Expense Report</h2>
                </div>
                <div className="Chart">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 15,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: "#000000" }}
                                label={{ value: "Months", position: "insideBottom", offset: -10, fill: "#000000" }}
                            />
                            <YAxis
                                tick={{ fill: "#000000" }}
                                label={{ value: "Expense", angle: -90, position: "insideLeft",offset:+7, fill: "#00000" }}
                            />


                            <Tooltip />
                            <Area type="monotone" dataKey="Expense" stroke="#320067" fill="#5bb8e9" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
export default Graph
