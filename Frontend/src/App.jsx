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
        <div className="flex flex-col lg:flex-row justify-between items-start p-5 gap-4 w-full">
          <div className="flex-1 w-full">
            <TransactionForm />
          </div>
          <div className="flex-1 w-full">
            <TransactionList />
          </div>          
          <div className="lg:w-[600px] w-full flex-shrink-0">
            <Graph />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;

