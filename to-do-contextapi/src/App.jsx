import React from 'react'
import './App.css'
import AddItemForm from './components/AddItemForm'
import ItemsList from './components/ItemsList'
import { TodoProvider } from './contexts/TodoContext'
function App() {
  const [todos, setTodos] = React.useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const editTodo = (index, todo) => {
    setTodos((prev)=>prev.map((t,i) => (i === index ? todo : t)));
  };

  return (
    <>
    <TodoProvider value={{todos,addTodo,deleteTodo,editTodo}}> 
      <h1 className='bg-red-700 text-white'>To-Do LIST</h1>
      <AddItemForm />
      
      <ItemsList />
    </TodoProvider>
    </>
  )
}

export default App
