import React from "react";

const Todo = ({ todo }) => {
  return (
    <div>
      <h1>{todo.text}</h1>
    </div>
  );
};

export default Todo;
