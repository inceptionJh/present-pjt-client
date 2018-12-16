import "./Nav.css";

import React, { Component } from "react";
import TagList from "./TagList/TagList";
import Menu from "./Menu/Menu";

export default class Nav extends Component {
  render() {
    return (
      <div className="todo-nav">
        <TagList />
        <Menu />
      </div>
    );
  }
}
