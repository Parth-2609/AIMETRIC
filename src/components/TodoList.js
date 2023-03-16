import React from "react";
import DeleteIcon from '@mui/icons-material/Delete'

const TodoList=(props)=>{
    
    return (
    <>
    <div className="todo_style">
    <DeleteIcon onClick={()=>{
    props.onSelect(props.id)}} sx={{ color: '#8566aa', ml: '40px' }} />
    {/* <span className="material-symbols-outlined" 
    onClick={()=>{
    props.onSelect(props.id)}}>
close
</span> */}
    <li>{props.text}</li>
    </div>
    </>
    );
};
export default TodoList;
