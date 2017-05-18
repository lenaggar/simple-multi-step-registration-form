import React from 'react';

const NavigationBar = ({ toggleForm, activeForm }) => {
  const link = (activeForm === 'Login') ? 'Sign up' : 'Login';
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href="#" className="navbar-brand">Altocan</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#" onClick={ toggleForm }>{link}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;