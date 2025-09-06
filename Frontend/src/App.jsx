import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
function App() {
  return(
    <>
    <Header></Header>
    <TransactionForm></TransactionForm>
    </>
  );
}


export default App
