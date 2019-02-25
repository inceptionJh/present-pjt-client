import './Todo.css';

import React, { Component } from 'react';
import TodoList from './TodoList/TodoList';
import config from '../../config';

const { SERVER_URL } = config();

export default class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      uniqId: 0,
      container: 'todo-container-v'
    };

    this.handleInputOnEnter = this.handleInputOnEnter.bind(this);
    this.handleToggleCheck = this.handleToggleCheck.bind(this);
    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
    this.todoClick = this.todoClick.bind(this);
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();

    xhr.onload = function(todo) {
      const res = JSON.parse(this.responseText);
      const todos = res instanceof Array ? res : [];

      const uniqId = todos.reduce(
        (accu, curr) => (accu.id > curr.id ? accu.id : curr.id) + 1,
        { id: -1 }
      );
      todo.setState({ todos, uniqId });
    }.bind(xhr, this);

    xhr.open('GET', `${SERVER_URL}/todo/all`);
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
      xhr.open('POST', `${SERVER_URL}/todo`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(todo));

      // change state
      const newTodos = this.state.todos.slice();

      newTodos.push(todo);

      e.target.value = '';

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
    xhr.open('PATCH', `${SERVER_URL}/todo`);
    xhr.setRequestHeader('Content-Type', 'application/json');
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
    xhr.open('DELETE', `${SERVER_URL}/todo`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ id }));

    // change state
    const newTodos = this.state.todos.filter(todo =>
      todo.id === id ? false : true
    );

    this.setState({
      todos: newTodos
    });
  }

  todoClick() {
    if (this.state.container === 'todo-container-v') {
      this.setState({
        container: 'todo-container-x'
      });
    } else {
      this.setState({
        container: 'todo-container-v'
      });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.container}>
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
              placeholder={'new TODO'}
            />
          </div>
        </div>

        <div className="button-1" onClick={this.todoClick}>
          <a>To do</a>
          <div className="eff-1" />
        </div>
      </div>
    );
  }
}
