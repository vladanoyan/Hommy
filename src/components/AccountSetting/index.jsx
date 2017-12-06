import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Phone from 'react-icons/lib/fa/phone';
import Phone2 from 'react-icons/lib/fa/fax';
import LoginIcon from 'react-icons/lib/fa/key';
import LoginUser from 'react-icons/lib/fa/user';
import Password from 'react-icons/lib/md/lock';
import Confirm from 'react-icons/lib/md/lock-open';
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
const AccountSetting = (props) => {
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
          name="Phone"
          type="number"
          label="number"
          component="input"
          placeholder="Phone number"

        />
        <Phone2 className={cs.inputIcon} />
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="Phone2"
          type="number"
          label="number"
          component="input"
          placeholder="Phone number"

        />
        <Phone className={cs.inputIcon} />
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
          name="passwordConfirm"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <Password className={cs.inputIcon} />
      </div>
      <div>
        <button type="submit" disabled={submitting} className={cs.loginModal}>
          Save
        </button>
      </div>
    </form>
  );
};

AccountSetting.propTypes = {
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
  form: 'AccountSetting',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(AccountSetting);
