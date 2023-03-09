import { useState } from 'react';
import React from 'react'
import './TodoBar.css'
const TodoBar = ({addTodo }) => {
  const [value, setvalue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setvalue("")
  }
  return (
    <form onSubmit={handleSubmit}>

      <input type='text' placeholder='Add Todo' value={value} onChange={e => setvalue(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default TodoBar