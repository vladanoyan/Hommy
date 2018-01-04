import React from 'react';
import PropTypes from 'prop-types';
import cs from '../../component.pcss';


const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label htmlFor={type} >{label}</label>
    <div className={cs.iconRelative}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <span className={cs.errorSpan}>{error}</span>}
    </div>
  </div>
);
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
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

export default renderField;
