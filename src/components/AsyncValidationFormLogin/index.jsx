import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Sign from 'react-icons/lib/fa/sign-in';
import PropTypes from 'prop-types';
import validate from '../../reducer/validate';
import asyncValidate from '../../reducer/asyncValidate';
import cs from './component.pcss';

const renderField = (
  { input, label, type, meta: { asyncValidating, touched, error } },
) => {
  return (
    <div>
      <div className={asyncValidating ? `${cs.async}` : ''}>
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
};
const AsyncValidationForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className={cs.form}>
      <Field
        name="email"
        type="email"
        component={renderField}
        label="E-mail"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div>
        <button type="submit" disabled={submitting} className={cs.loginModal}>
          <Sign className={cs.sign_up} />
          Log In
        </button>
      </div>
    </form>
  );
};

AsyncValidationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,

};
renderField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};


export default reduxForm({
  form: 'AsyncValidationLogin',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(AsyncValidationForm);
