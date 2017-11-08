import React from 'react';
import { Field, reduxForm } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RadioButton } from 'material-ui/RadioButton';
import { RadioButtonGroup } from 'redux-form-material-ui';
import IconMail from 'react-icons/lib/md/mail-outline';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
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
      <MuiThemeProvider>
        <Field name="sex" component={RadioButtonGroup}>
          <RadioButton
            value="men"
            label="men"
            iconStyle={{ fill: '5f90dd' }}
          />
          <RadioButton
            value="famale"
            label="famale"
            iconStyle={{ fill: '5f90dd' }}
          />
        </Field>
      </MuiThemeProvider>
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
  form: 'SyncValidationFormContact',
  validate,
})(SyncValidationForm);
