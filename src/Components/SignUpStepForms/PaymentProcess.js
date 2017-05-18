import React, { Component } from 'react';

class CreateAnId extends Component {
  state = {
    username : '',
    email : '',
    password : '',
    passwordConfirmation : ''
  }

  onChange(e) {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1 className="text-center">Sign up</h1>

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
          <label className="control-label" htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={ email }
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
          <label className="control-label" htmlFor="passwordConfirmation">Password Confirmation</label>
          <input
            className="form-control"
            type="password"
            name="passwordConfirmation"
            value={ passwordConfirmation }
            onChange={ this.onChange.bind(this) }
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default CreateAnId;