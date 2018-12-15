import "./TodoDelete.css";

import React from "react";

export default function TodoDelete({ handleOnDeleteClick, id }) {
  const onDeleteClick = () => handleOnDeleteClick(id);

  return (
    <div
      className="todo-todolist-todocontent-tododelete"
      onClick={onDeleteClick}
    >
      Del
    </div>
  );
}
