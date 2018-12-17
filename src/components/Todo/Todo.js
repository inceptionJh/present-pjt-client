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

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.onload = function(todo) {
      const todos = JSON.parse(this.responseText);
      const uniqId = todos.reduce(
        (accu, curr) => (accu.id > curr.id ? accu.id : curr.id) + 1,
        { id: -1 }
      );
      todo.setState({ todos, uniqId });
    }.bind(xhr, this);
    xhr.open("GET", "http://localhost:5000/todo/all");
    xhr.send();
  }

  handleInputOnEnter(e) {
    const ENTER_CODE = 13;

    if (e.keyCode === ENTER_CODE) {
      const todo = {
        id: this.state.uniqId,
        state: 0,
        text: e.target.value
      };

      // send DB
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/todo");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(todo));

      // change state
      const newTodos = this.state.todos.slice();

      newTodos.push(todo);

      e.target.value = "";

      this.setState({
        todos: newTodos,
        uniqId: this.state.uniqId + 1
      });
    }
  }

  handleToggleCheck(id) {
    const todo = this.state.todos.filter(todo => todo.id === id)[0];

    // patch todo from server DB
    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:5000/todo");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(todo));

    // change state
    const newTodos = this.state.todos.map(todo =>
      todo.id === id
        ? { state: todo.state ? 0 : 1, id: todo.id, text: todo.text }
        : todo
    );

    this.setState({
      todos: newTodos
    });
  }

  handleOnDeleteClick(id) {
    // delete todo from server DB
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:5000/todo");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send({id});

    // change state
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
