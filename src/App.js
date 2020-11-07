import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodo] = useState([]);

  const [value, setvalue] = useState("");

  // const handle = (e) => {
  //   e.preventDefault();
  //   console.log(value);
  // };
  const removetodo = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodo(newTodos);
  };

  const addtodo = (e) => {
    e.preventDefault();
    setTodo([...todos, value]);
    setvalue("");
  };

  return (
    <div className="App">
      <form>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
        <button className="green" onClick={addtodo}>
          add
        </button>
        <button className="red" onClick={() => setTodo([""])}>
          clear
        </button>
      </form>
      {todos.map((todo, id) => (
        <div className="items">
          <div className="item" key={id}>
            <h4>{todo}</h4>
            <button className="red" onClick={() => removetodo(id)}>
              clear
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
