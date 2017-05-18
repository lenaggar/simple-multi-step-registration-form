import React from 'react';
import classnames from 'classnames';
import FormGroup from './FormGroup';

const CreateAnId = props => {
  const {
    next,
    onChange,
    step,
    errors,
    firstName,
    lastName,
    email,
    username,
    password,
    passwordConfirmation
  } = props;

  return (
    <form>
      <h3 className="text-center">Step { step } - Create an ID</h3>

      <div className={classnames("form-group", { "has-error" : errors['accountType'] })}>
        <label className="control-label" htmlFor='accountType'>Account Type</label>
          <div>
            <label className="radio-inline"><input type="radio" name='accountType' value='Personal' onChange={ onChange } />Personal</label>
            <label className="radio-inline"><input type="radio" name='accountType' value='Business' onChange={ onChange } />Business</label>
          </div>

        { errors['accountType'] && <span className="help-block">{errors['accountType']}</span> }
      </div>

      <FormGroup
        label={'First Name'}
        type={'text'}
        name={'firstName'}
        value={firstName}
        onChange={onChange}
        error={errors['firstName']}
      />
      <FormGroup
        label={'Last Name'}
        type={'text'}
        name={'lastName'}
        value={lastName}
        onChange={onChange}
        error={errors['lastName']}
      />
      <FormGroup
        label={'Email'}
        type={'email'}
        name={'email'}
        value={email}
        onChange={onChange}
        error={errors['email']}
      />
      <FormGroup
        label={'Username'}
        type={'text'}
        name={'username'}
        value={username}
        onChange={onChange}
        error={errors['username']}
      />
      <FormGroup
        label={'Password'}
        type={'password'}
        name={'password'}
        value={password}
        onChange={onChange}
        error={errors['password']}
      />
      <FormGroup
        label={'Password Confirmation'}
        type={'password'}
        name={'passwordConfirmation'}
        value={passwordConfirmation}
        onChange={onChange}
        error={errors['passwordConfirmation']}
      />

      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary btn-lg" onClick={ next }>Next</button>
      </div>
    </form>
  );
}

export default CreateAnId;