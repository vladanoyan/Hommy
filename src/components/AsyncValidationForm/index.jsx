import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import Checkbox from 'material-ui/Checkbox';
import Sign from 'react-icons/lib/fa/sign-in';
import LoginIcon from 'react-icons/lib/fa/key';
import LoginUser from 'react-icons/lib/fa/user';
import Password from 'react-icons/lib/md/lock';
import Confirm from 'react-icons/lib/md/lock-open';
import PropTypes from 'prop-types';
import validate from '../../reducer/validate';
import asyncValidate from '../../reducer/asyncValidate';
import cs from './component.pcss';


const renderCheckbox = ({ input, label }) => (
  <Checkbox
    uncheckedIcon={<UnCheckedIcon style={{ fill: '#464a4c' }} />}
    checkedIcon={<CheckedIcon style={{ fill: '#5f90dd' }} />}
    label={label}
    checked={!!input.value}
    onCheck={input.onChange}
  />
);
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
      <div className={cs.iconRelative}>
        <Field
          name="firstname"
          type="text"
          component={renderField}
          label="First Name"
        />
        <LoginUser className={cs.inputIcon} />
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="lastname"
          type="text"
          component={renderField}
          label="Last Name"
        />
        <LoginUser className={cs.inputIcon} />
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="E-mail"
        />
        <LoginIcon className={cs.inputIcon} />
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <Confirm className={cs.inputIcon} />
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <Password className={cs.inputIcon} />
      </div>
      <div>
        <Field
          name="terms"
          component={renderCheckbox}
          label={
            <div>
              I agree to the{' '}
              <NavLink to="/app/terms" className={cs.terms}>Terms</NavLink>
            </div>
          }
        />
        <button type="submit" disabled={submitting} className={cs.loginModal}>
          <Sign className={cs.sign_up} />
          Sign Up
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


renderCheckbox.propTypes = {
  label: PropTypes.shape({
    label: PropTypes.object,
  }).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default reduxForm({
  form: 'AsyncValidationSign',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(AsyncValidationForm);
