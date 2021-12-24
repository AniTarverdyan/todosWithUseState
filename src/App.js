import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((tl) => {
      setTodoList(tl);
    });

  const onInputValueChange = (event) => {
    setInputValue(event.target.value);
  };

  const filterTodoList = () => {
    setFilterValue(inputValue);
  };

  return (
    <div className="App">
      <input onChange={onInputValueChange} type="text" />
      <button onClick={filterTodoList}>filter</button>
      {todoList
        .filter((todo) => {
          return todo.title.includes(filterValue);
        })
        .map((todo) => {
          return <div>{todo.title}</div>;
        })}
    </div>
  );
}

export default App;
