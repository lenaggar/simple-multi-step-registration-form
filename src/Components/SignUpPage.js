import React, { Component } from 'react';
import SignUpForm from './SignUpForm';

class SignUpPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <h1 className="text-center">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default SignUpPage;