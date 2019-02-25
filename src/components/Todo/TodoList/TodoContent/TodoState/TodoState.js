import "./TodoState.css";

import React from "react";

export default function TodoState({ checked, handleToggleCheck, id }) {
  const toggleCheck = () => handleToggleCheck(id);

  return (
    <div className="todo-todolist-todocontent-todostate" onClick={toggleCheck}>
      {checked}
    </div>
  );
}
