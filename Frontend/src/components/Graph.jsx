import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
function Graph() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/expense");
      const monthlyData = {};
      res.data.forEach((t) => {
        const month = new Date(t.date).toLocaleString("en-US", {
          month: "short",
        });
        if (!monthlyData[month]) {
          monthlyData[month] = 0;
        }
        monthlyData[month] += t.amount;
      });

      // Convert to array for recharts
      const formatted = Object.keys(monthlyData).map((month) => ({
        name: month,
        Expense: monthlyData[month],
      }));

      setChartData(formatted);
      setError(null);
    } catch (err) {
      console.error("Error occured while fetching the data", err);
      setError("Error Occured");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);
  if (loading) {
    return (
      <div className="GraphOuterCard">
        <div className="GraphInnerItems">
          <div className="Graphtitle">
            <h2>Transaction Graph</h2>
          </div>
          <div className="text-center py-8 text-white">
            Loading transactions...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="GraphOuterCard">
        <div className="GraphInnerItems">
          <div className="Graphtitle">
            <h2>Your Expense Report</h2>
          </div>

          <div className="text-center py-8 text-red-600 text-2xl font-bold">
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
    <div className="GraphOuterCard">
      <div className="GraphInnerItems">
        <div className="flex justify-between items-center">
            <div className="Graphtitle">
                <h2 >Your Expense Report</h2>
            </div>
                    
                    <button
                        onClick={fetchTransactions}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm transition-colors duration-200"
                    >
                        Refresh
                    </button>
                </div>
        {/* <div className="Graphtitle">
          <h2>Your Expense Report</h2>
        </div> */}
        {
            chartData.length===0?(
                <div className="text-center py-10 text-white italic">
                            No transactions found. Add your first transaction!
                        </div>
            ):(<div className="Chart">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              width={500}
              height={400}
              data={chartData}
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
                label={{
                  value: "Months",
                  position: "insideBottom",
                  offset: -10,
                  fill: "#000000",
                }}
              />
              <YAxis
                tick={{ fill: "#000000" }}
                label={{
                  value: "Expense",
                  angle: -90,
                  position: "insideLeft",
                  offset: +7,
                  fill: "#00000",
                }}
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="Expense"
                stroke="#320067"
                fill="#5bb8e9"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>)
        }
        
      </div>
    </div>
  );
}
export default Graph;
