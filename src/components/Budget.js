import { Typography,styled,Box } from "@mui/material";
import React, { Component } from 'react'
import Balance from "./Balance";
import ExpenseCard from "./ExpenseCard";
import NewTransaction from "./NewTransaction";
import Transaction from "./Transactions";
import { useState } from "react";
import './Main.css';

const Header=styled(Typography)`
margin: 2px 0;
font-size:36px;
color:#4E4BDC;
font-weight:bold;
text-transfor:uppercase
`
const Componentt=styled(Box)`
display:flex;
width:800px;
background:#fff;
padding:10px;
margin:auto;
justify-content:center
background #fff;
& > div{
    height:75vh;
    width:50%;
    padding:10px;
}`


function Budget() {
    const[transactions,setTransactions]=useState([
        // {id:1,text:'DAY1',amount:-20},
        // {id:2,text:'DAY2',amount:20},
        // {id:3,text:'DAY3',amount:220},
        // {id:4,text:'DAY4',amount:-120}
    ])
  return (
    <Box className='Budget'>
   <Header>BUDGET TRACKER</Header>
   <Componentt>
    <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransaction setTransactions={setTransactions}/>
    </Box>
       <Box> 
        <Transaction transactions={transactions} setTransactions={setTransactions}/> 
        </Box>
   </Componentt>
    </Box>
  )
}

export default Budget








