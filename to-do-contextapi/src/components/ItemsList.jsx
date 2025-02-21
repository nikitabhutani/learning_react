import React from 'react';
import { useTodo } from '../contexts/TodoContext';
import Item from './Item';
const ItemsList = () => {
 const {todos} = useTodo();

  return (
    <div>
      

      <ul >
        
        
          {todos.map((todo, index) => (
                    <Item key={index} todo={todo} index={index} />
                  ))
         
        }
       
      </ul>
    </div>
  );
};

export default ItemsList;