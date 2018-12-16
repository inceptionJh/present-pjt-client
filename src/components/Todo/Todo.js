import "./Todo.css";

import React, { Component } from "react";
import TodoList from "./TodoList/TodoList";

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      uniqId: 0
    };

    this.handleInputOnEnter = this.handleInputOnEnter.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
  }

  handleInputOnEnter(e) {
    const ENTER_CODE = 13;

    if (e.keyCode === ENTER_CODE) {
      const newTodos = this.state.todos.slice();

      newTodos.push({
        id: this.state.uniqId,
        state: false,
        text: e.target.value
      });

      e.target.value = "";

      this.setState({
        todos: newTodos,
        uniqId: this.state.uniqId + 1
      });
    }
  }

  handleToggleCheck(id) {
    const newTodos = this.state.todos.map(todo =>
      todo.id === id
        ? { state: !todo.state, id: todo.id, text: todo.text }
        : { state: todo.state, id: todo.id, text: todo.text }
    );

    this.setState({
      todos: newTodos
    });
  }

  handleOnDeleteClick(id) {
    const newTodos = this.state.todos.filter(todo =>
      todo.id === id ? false : true
    );

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="todo">
        <TodoList
          todos={this.state.todos}
          handleToggleCheck={this.handleToggleCheck}
          handleOnDeleteClick={this.handleOnDeleteClick}
        />
        <input
          className="inputBtn"
          type="text"
          onKeyUp={this.handleInputOnEnter}
          placeholder={"new TODO"}
        />
      </div>
    );
  }
}
