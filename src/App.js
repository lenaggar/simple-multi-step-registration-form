import React, { Component } from 'react';
import NavigationBar from './Components/NavigationBar';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';

class App extends Component {
  state = {
    activeForm : 'Login'
  }

  toggle(e) {
    const { activeForm } = this.state;
    this.setState({
      activeForm : (activeForm === 'Login') ? 'Sign up' : 'Login'
    })
  }

  render() {
    const form = this.state.activeForm === 'Login'
                ? <LoginPage />
                : <SignUpPage />;

    return (
      <div className="App container">
        <NavigationBar
          toggleForm={this.toggle.bind(this)}
          activeForm={this.state.activeForm}
        />
        
        { form }
      </div>
    );
  }
}

export default App;
