import './Helloyou.css';

import React, { Component } from 'react';

export default class Helloyou extends Component {
  constructor(props) {
    var findUser = localStorage.getItem('userName');
    super(props);
    this.state = {
      name: ''
    };
    if (findUser !== undefined) {
      this.state.name = findUser;
    } else {
    }
    this.nameSave = this.nameSave.bind(this);
    this.nameModify = this.nameModify.bind(this);
  }

  nameSave = e => {
    if (e.keyCode === 13) {
      localStorage.setItem('userName', e.target.value);
      this.setState({
        name: e.target.value
      });
    } else if (e.keyCode === 27) {
      this.setState({
        name: localStorage.getItem('userName')
      });
    }
  };

  nameModify = () => {
    this.setState({
      name: ''
    });
  };

  render() {
    const style = {
      all: 'unset'
    };
    return (
      <div className="hello-you">
        {this.state.name ? (
          <div onClick={this.nameModify}>Hello! {this.state.name}</div>
        ) : (
          <input
            className="hello-input"
            type="text"
            placeholder="What ur name?"
            onKeyDown={this.nameSave}
            style={style}
          />
        )}
      </div>
    );
  }
}
