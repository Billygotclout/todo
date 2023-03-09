import { useState } from "react";
import "./App.css";
import TodoBar from "./components/todo-bar/TodoBar";
import TodoList from "./components/todo-list/TodoList";
import TodoFilter from "./components/TodoFilter";


function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample Todo",
      isDone: false,
    },
  ]);
  const [filter, setFilter] = useState("All")
  const FILTER_MAP ={
    All:()=>true,
    Active: todos=> !todos.isDone,
    Completed: todos=> todos.isDone
  }
  const FILTER_NAMES = Object.keys(FILTER_MAP)
  const filterList = FILTER_NAMES.map(name=>(
    <TodoFilter key={name} name={name} isPressed={name ===filter} setFilter={setFilter}/>
  ))

  const addTodo = (text) => {
    const newTodos = [...todos,{text}];
    console.log(newTodos);
    setTodos(newTodos);
  };
  const markTodo = (index) => {
    const newTodos = [...todos];
   
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };
  return (
    <div>
      <TodoBar addTodo={addTodo} />
      <div>
      {todos.filter(FILTER_MAP[filter]).map((todo, index) => (
        <TodoList
         key={index} 
         index={index} 
         todo={todo}
          markTodo={markTodo}
       
           />

      ))}
    {filterList}
      </div>
      
    </div>
  );
}

export default App;
