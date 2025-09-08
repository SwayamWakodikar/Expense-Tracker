import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Layout from "./components/Layout";
import TransactionForm from "./components/TransactionForm";
function App() {
  return (
    <>
     <Layout>
      <TransactionForm />
     </Layout>
      
    </>
  );
}

export default App;
