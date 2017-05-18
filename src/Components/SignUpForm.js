import React, { Component } from 'react';
import Validator from 'validator';
import CreateAnId            from './SignUpStepForms/CreateAnId';
import CompanyInformation    from './SignUpStepForms/CompanyInformation';
import ValidateYourAccount   from './SignUpStepForms/ValidateYourAccount';
import PaymentProcess        from './SignUpStepForms/PaymentProcess';
import FinishAndStartWorking from './SignUpStepForms/FinishAndStartWorking';

class SignUpForm extends Component {
  state = {
    step: 1,
    formData: {
      accountType: '',
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      organizationName: '',
      businessName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      phoneNumber: '',
      organizationSize: '',
      website: '',
      industry: ''
    },
    errors: {}
  }

  nextForm() {
    const validationObject = this.validateInput(this.state);

    if(validationObject.validStep) {
      alert('Ajax for email validation happens here...');
      this.setState({
        step: this.state.step + 1,
        errors: {}
      });
    } else {
      this.setState({ errors : validationObject.errors });
    }
  }

  previousForm() {
    let step = this.state.step;
    this.setState({ step : step -= 1 });
  }

  onChange(e) {
    this.setState({
      formData: Object.assign(this.state.formData, { [e.target.name] : e.target.value })
    });
  }

  validateInput(data) {
    let errors = {},
        validStep = true;

    switch (data.step) {
      case 1:
        if (Validator.isEmpty(data.formData.accountType)) {
          errors.accountType = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.firstName)) {
          errors.firstName = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.lastName)) {
          errors.lastName = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.email)) {
          errors.email = 'This Feild is required';
          validStep = false;
        } else if (!Validator.isEmail(data.formData.email)) {
          errors.email = 'Email is invalid';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.username)) {
          errors.username = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.password)) {
          errors.password = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.passwordConfirmation)) {
          errors.passwordConfirmation = 'This Feild is required';
          validStep = false;
        } else if (!Validator.equals(data.formData.password, data.formData.passwordConfirmation)) {
          errors.password = 'Passwords are not the same!';
          errors.passwordConfirmation = 'Passwords are not the same!';
          validStep = false;
        }
        break;
      case 2:
        if (Validator.isEmpty(data.formData.organizationName)) {
          errors.organizationName = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.businessName)) {
          errors.businessName = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.address1)) {
          errors.address1 = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.address2)) {
          errors.address2 = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.city)) {
          errors.city = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.state)) {
          errors.state = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.postalCode)) {
          errors.postalCode = 'This Feild is required';
          validStep = false;
        } else if (!Validator.isNumeric(data.formData.postalCode)) {
          errors.postalCode = 'Postal code is invalid';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.country)) {
          errors.country = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.phoneNumber)) {
          errors.phoneNumber = 'This Feild is required';
          validStep = false;
        } else if (!Validator.isNumeric(data.formData.phoneNumber)) {
          errors.phoneNumber = 'Phone number is invalid';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.organizationSize)) {
          errors.organizationSize = 'This Feild is required';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.website)) {
          errors.website = 'This Feild is required';
          validStep = false;
        } else if (!Validator.isURL(data.formData.website)) {
          errors.website = 'Invalid url';
          validStep = false;
        }
        if (Validator.isEmpty(data.formData.industry)) {
          errors.industry = 'This Feild is required';
          validStep = false;
        }
        break;
    
      default:
        break;
    }

    return {
      errors : errors,
      validStep: validStep
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const next     = this.nextForm.bind(this),
          previous = this.previousForm.bind(this),
          onChange = this.onChange.bind(this),
          step     = this.state.step,
          errors   = this.state.errors;
    
    const {
      accountType,
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirmation,
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
    } = this.state.formData;

    switch (this.state.step) {
      case 1:
        return  <CreateAnId
                  next={next}
                  onChange={onChange}
                  step={step}
                  errors={errors}
                  accountType={accountType}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  username={username}
                  password={password}
                  passwordConfirmation={passwordConfirmation}
                />;
      case 2:
        return  <CompanyInformation
                  previous={previous}
                  next={next}
                  onChange={onChange}
                  step={step}
                  errors={errors}
                  organizationName={organizationName}
                  businessName={businessName}
                  address1={address1}
                  address2={address2}
                  city={city}
                  state={state}
                  postalCode={postalCode}
                  country={country}
                  phoneNumber={phoneNumber}
                  organizationSize={organizationSize}
                  website={website}
                  industry={industry}
                />;
      case 3:
        return  <ValidateYourAccount
                  previous={previous}
                  next={next}
                  onChange={onChange}
                  step={step}
                  errors={errors}
                />;
      case 4:
        return  <PaymentProcess
                  previous={previous}
                  next={next}
                  onChange={onChange}
                  step={step}
                  errors={errors}
                />;
      case 5:
        return  <FinishAndStartWorking
                  previous={previous}
                  onChange={onChange}
                  step={step}
                  errors={errors}
                />;
    }
  }
}

export default SignUpForm;