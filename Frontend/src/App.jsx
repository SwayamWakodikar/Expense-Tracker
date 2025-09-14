import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
function App() {
  return (
    <>
     <Layout>
      <div className="flex flex-col md:flex-row justify-between items-start p-5 gap-5 w-full">
        {/* Form on left */}
        <div className="md:w-1/3 w-full">
          <TransactionForm />
        </div>

        {/* List on right */}
        <div className="md:w-2/3 w-full">
          <TransactionList />
        </div>
      </div>
     </Layout>
    </>
  );
}
export default App;
