import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    username : '',
    password : ''
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1 className="text-center">Login</h1>

        <div className="form-group">
          <label className="control-label" htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value={ username }
            onChange={ this.onChange.bind(this) }
          />
        </div>

        <div className="form-group">
          <label className="control-label" htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={ password }
            onChange={ this.onChange.bind(this) }
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;