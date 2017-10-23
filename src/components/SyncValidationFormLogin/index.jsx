import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Sign from 'react-icons/lib/fa/sign-in';
import PropTypes from 'prop-types';
import validate from '../../reducer/syncValidate';
import cs from './component.pcss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>))}
    </div>
  </div>
);

const SyncValidationForm = (props) => {
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


SyncValidationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,

};
renderField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};


export default reduxForm({
  form: 'SyncValidationFormLogin',
  validate,
})(SyncValidationForm);
