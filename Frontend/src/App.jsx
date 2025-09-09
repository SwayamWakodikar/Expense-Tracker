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
      <TransactionForm />
      <TransactionList />
     </Layout>
    </>
  );
}
export default App;
