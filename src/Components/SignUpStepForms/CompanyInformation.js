import React from 'react';
import FormGroup from './FormGroup';

const CompanyInformation = props => {
  const {
    previous,
    next,
    onChange,
    step,
    errors,
    organizationName,
    businessName,
    address1,
    address2,
    city,
    state,
    postalCode,
    country,
    phoneNumber,
    organizationSize,
    website,
    industry
  } = props;

  return (
    <form>
      <h3 className="text-center">Step { step }/4 - Company Information</h3>

      <FormGroup
        label={'Organization Name'}
        type={'text'}
        name={'organizationName'}
        value={organizationName}
        onChange={onChange}
        error={errors['organizationName']}
      />
      <FormGroup
        label={'Business Name'}
        type={'text'}
        name={'businessName'}
        value={businessName}
        onChange={onChange}
        error={errors['businessName']}
      />
      <FormGroup
        label={'Address 1'}
        type={'text'}
        name={'address1'}
        value={address1}
        onChange={onChange}
        error={errors['address1']}
      />
      <FormGroup
        label={'Address 2'}
        type={'text'}
        name={'address2'}
        value={address2}
        onChange={onChange}
        error={errors['address2']}
      />
      <FormGroup
        label={'City'}
        type={'text'}
        name={'city'}
        value={city}
        onChange={onChange}
        error={errors['city']}
      />
      <FormGroup
        label={'State'}
        type={'text'}
        name={'state'}
        value={state}
        onChange={onChange}
        error={errors['state']}
      />
      <FormGroup
        label={'Postal Code'}
        type={'text'}
        name={'postalCode'}
        value={postalCode}
        onChange={onChange}
        error={errors['postalCode']}
      />
      <FormGroup
        label={'Country'}
        type={'text'}
        name={'country'}
        value={country}
        onChange={onChange}
        error={errors['country']}
      />
      <FormGroup
        label={'Phone Number'}
        type={'tel'}
        name={'phoneNumber'}
        value={phoneNumber}
        onChange={onChange}
        error={errors['phoneNumber']}
      />
      <FormGroup
        label={'Organization Size'}
        type={'text'}
        name={'organizationSize'}
        value={organizationSize}
        onChange={onChange}
        error={errors['organizationSize']}
      />
      <FormGroup
        label={'Website'}
        type={'url'}
        name={'website'}
        value={website}
        onChange={onChange}
        error={errors['website']}
      />
      <FormGroup
        label={'Industry'}
        type={'text'}
        name={'industry'}
        value={industry}
        onChange={onChange}
        error={errors['industry']}
      />

      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary btn-lg" onClick={ previous }>Go back</button>
        <button type="button" className="btn btn-primary btn-lg" onClick={ next }>Next</button>
      </div>
    </form>
  );
}

export default CompanyInformation;