import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Graph from "./components/Graph";
function App() {
  return (
    <>
     <Layout>
  <div className="flex flex-col md:flex-row justify-between items-start p-5 gap-5 w-full">
    {/* Form on left */}
    <div className="md:w-1/3 w-full">
      <TransactionForm />
    </div>

    {/* List in the center */}
    <div className="md:w-1/3 w-full">
      <TransactionList />
    </div>

    {/* Graph on the right */}
    <div className="md:w-1/3 w-full">
      <Graph />
    </div>
  </div>
</Layout>
    </>
  );
}
export default App;
