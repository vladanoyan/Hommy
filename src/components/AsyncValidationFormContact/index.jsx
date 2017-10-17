import React from 'react';
import { Field, reduxForm } from 'redux-form';
import IconMail from 'react-icons/lib/md/mail-outline';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
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
      <label htmlFor="firstName">First Name</label>
      <Field
        name="firstname"
        type="text"
        component="input"
        placeholder="First Name"
        id="firstName"
      />
      <label htmlFor="lastName">Last Name</label>
      <Field
        name="lastname"
        type="text"
        component="input"
        placeholder="Last Name"
        id="lastName"
      />
      <label htmlFor="E-mail">E-mail</label>
      <Field
        name="email"
        type="email"
        component={renderField}
        id="email"
        label="E-mail"
      />
      <div>
        <label htmlFor="male">Male</label>
        <Field
          className={cs.radio}
          name="sex"
          component="input"
          type="radio"
          value="male"
          id="male"
        />
      </div>
      <div>
        <label htmlFor="famale">Famale</label>
        <Field
          className={cs.radio}
          name="sex"
          component="input"
          type="radio"
          value="famale"
          id="famale"
        />
      </div>
      <Field
        className={cs.textarea}
        name="notes"
        component="textarea"
        placeholder="Your Message"
      />
      <div>
        <Button type="submit" disabled={submitting} className={cs.sendBtn}>
          Send
          <IconMail className={cs.iconMail} />
        </Button>
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
  form: 'AsyncValidationContact',
  validate,
  asyncValidate,
  asyncBlurFields: ['email'],
})(AsyncValidationForm);