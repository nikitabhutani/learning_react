
import React from 'react';
import { useTodo } from '../contexts/TodoContext';
function Item ({todo,index}){
  const { deleteTodo,editTodo} = useTodo();
  const [istodoEditable,setIsTodoEditable]=React.useState(false);
  const handleEdit=(index,todo)=>{
    
    editTodo(index,todo);
    setIsTodoEditable(false);
  }
    const [todomsg,setTodomsg]=React.useState(todo);
return(

  <div>
  <li key={index} className='border border-gray-300 rounded px-2 py-1'>
            <input type='text' 
            value={todomsg} 
            onChange={(e)=>setTodomsg(e.target.value)} 
            readOnly= { !istodoEditable} />
          <div className="flex justify-end">
            <button className='bg-blue-500 text-white px-4 py-1 rounded' onClick={()=>{
              if(istodoEditable){
                handleEdit(index,todomsg);
              }
              else{
                setIsTodoEditable(true);
              }
            }}>{!istodoEditable?"Edit":"Save"}</button>
           <button className='bg-red-500 text-white px-4 py-1 rounded ' onClick={()=>deleteTodo(index)}>Delete</button>
           </div>
           </li>
           </div>
  );
  }
  export default Item;