import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext.jsx';

const AddItemForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodo();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-2 py-1"
        placeholder="Add new item"
      />
      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddItemForm;