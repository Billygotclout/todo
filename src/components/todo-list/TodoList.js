import React from 'react'
import './TodoList.css'
const TodoList = ({todo,index,markTodo}) => {


  return (
    <>
<span style={{textDecoration: todo.isDone? "line-through": ""}} onClick={()=> markTodo(index)}>{todo.text}</span>

<br />

</>
  )
}

export default TodoList