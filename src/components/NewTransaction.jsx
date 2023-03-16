import {Box,TextField,Typography,Button,styled} from '@mui/material'
import{useState} from 'react'
const Container=styled(Box)`
display:flex;
flex-direction:column;
&>button{
    margin-top:40px;
    width:50%;
    background-color:#4E4BDC;
    margin-left:2px;
    
}
&>div{
    margin:4px;
}
&>h5{
    margin-top:50px;
    width:50%;
}
`

const NewTransaction=({setTransactions})=>{
    const[text,setText]=useState('');
    const[amount,setAmount]=useState()

    const addTransaction=()=>{
        const transaction={
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }
        setTransactions(prevState=>[transaction, ...prevState]);

    }
    return(
        <Container>
            <Typography variant='h5'>New Transaction</Typography>
            <TextField label='Date' onChange={(e)=> setText(e.target.value)}/>
            <TextField label='Enter amount'onChange={(e)=> setAmount(e.target.value)}/>
            <Button variant='contained' onClick={()=>addTransaction()}>Add Transaction</Button>
        </Container>
    )
}
export default NewTransaction