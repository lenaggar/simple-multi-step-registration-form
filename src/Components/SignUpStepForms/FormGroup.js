import React from 'react';
import classnames from 'classnames';

const FormGroup = ({ label, type, name, value, onChange, error }) => (
  <div className={classnames("form-group", { "has-error" : error })}>
    <label className="control-label" htmlFor={ name }>{ label }</label>
    <input
      className="form-control"
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
    />
    { error && <span className="help-block">{error}</span> }
  </div>
);

export default FormGroup;