import "./TagList.css";

import React, { Component } from "react";
import TagMenu from "./TagMenu/TagMenu";
import TodoTag from "./TodoTag/TodoTag";

export default class TagList extends Component {
  render() {
    return (
      <div className="todo-nav-taglist">
        <TodoTag />
        <TagMenu />
      </div>
    );
  }
}
