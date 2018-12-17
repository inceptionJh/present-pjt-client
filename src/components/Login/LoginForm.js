import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    const { login } = this.props;
    const email = this.email.value;
    const password = this.password.value;

    console.log("[+] Login/handleLogin : ", email, password);
    console.log(login(email, password));
    login(email, password);
  }

  render() {
    const { user } = this.props;
    return user.isLoggedIn ? (
      <div>로그인 성공</div>
    ) : (
      <div className="login">
        <span>이메일</span>
        <input
          ref={ref => {
            this.email = ref;
          }}
        />
        <span>비밀번호</span>
        <input
          type="password"
          ref={ref => {
            this.password = ref;
          }}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default LoginForm;
