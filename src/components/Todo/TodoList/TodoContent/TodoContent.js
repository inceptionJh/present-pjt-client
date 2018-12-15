import "./TodoContent.css";

import React from "react";
import TodoState from "./TodoState/TodoState";
import TodoText from "./TodoText/TodoText";
import TodoDelete from "./TodoDelete/TodoDelete";

export default function TodoContent({
  todo: { state, text, id },
  handleToggleCheck,
  handleOnDeleteClick
}) {
  return (
    <div className="todo-todolist-todocontent">
      {state ? (
        <TodoState
          checked={"O"}
          handleToggleCheck={handleToggleCheck}
          id={id}
        />
      ) : (
        <TodoState
          checked={"X"}
          handleToggleCheck={handleToggleCheck}
          id={id}
        />
      )}
      <TodoText text={text} />
      <TodoDelete id={id} handleOnDeleteClick={handleOnDeleteClick} />
    </div>
  );
}
