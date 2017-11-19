import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import cs from './component.pcss';

const FieldMinMax = (props) => {
  const { handleSubmit, min, max, textSlider, nameMax, nameMin } = props;

  return (
    <form onSubmit={handleSubmit} className={cs.formMin}>
      <div className={cs.content}>
        <div className={cs.label}>{textSlider}</div>
        <Field
          className={cs.min}
          name={nameMin}
          component="input"
          type="number"
          placeholder="from"
        />
        <span className={cs.labelMin}>{min}</span>
        <Field
          className={cs.max}
          name={nameMax}
          component="input"
          type="number"
          placeholder="to"
        />
        <span className={cs.labelMin} >{max}</span>
      </div>
    </form>
  );
};

FieldMinMax.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  nameMax: PropTypes.string.isRequired,
  nameMin: PropTypes.string.isRequired,
  textSlider: PropTypes.string.isRequired,
};


export default reduxForm({
  form: 'MinMaxForm',
})(FieldMinMax);
