import "./TodoList.css";

import React from "react";
import TodoContent from "./TodoContent/TodoContent";

export default function TodoList({
  todos,
  handleToggleCheck,
  handleOnDeleteClick
}) {
  return (
    <div className="todo-list">
      {todos.map((todo, idx) => (
        <TodoContent
          todo={todo}
          handleToggleCheck={handleToggleCheck}
          handleOnDeleteClick={handleOnDeleteClick}
          key={idx}
        />
      ))}
    </div>
  );
}
