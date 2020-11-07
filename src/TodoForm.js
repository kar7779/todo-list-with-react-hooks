import React, { useState } from "react";

const TodoFrom = ({ addtodo }) => {
  const [value, setvalue] = useState();
  const handle = (e) => {
    e.preventDefault();
    addtodo(value);
    setvalue("");
  };
  return (
    <>
      <form onSubmit={handle}>
        <input value={value} onChange={(e) => setvalue(e.target.value)} />
      </form>
    </>
  );
};

export default TodoFrom;
