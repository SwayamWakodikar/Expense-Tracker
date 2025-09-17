import {useState,useEffect} from 'react';
import axios from 'axios';

function TransactionList(){
    const[Transaction,SetTransaction]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(null);
    const fetchTransaction=async ()=>{
        try{
            setLoading(true);
            const response=await axios.get("http://localhost:5000/api/expense");
            SetTransaction(response.data);
            setError(null)
        }
        catch(err){
            console.error("Error Finding Transaction");
            setError(true);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchTransaction();
    },[])
    return;
}
export default TransactionList