import React from 'react';
import PropTypes from 'prop-types';
import cs from '../../component.pcss';

class RadioButtonRenderField extends React.Component {
  render() {
    const { input, meta, radioList } = this.props;
    const hasError = meta.touched && meta.error;

    return (
      <div>
        {radioList.map((o) => (
          <label htmlFor={o.id} className={cs.RadioBtn} key={o.value}>
            <input
              key={o.id}
              type="radio"
              {...input}
              value={o.value}
              checked={o.value === input.value}
              id={o.id}
            />
            {o.title}</label>
        ))}
        {hasError && <span className={cs.errorSpan}>{meta.error}</span>}
      </div>
    );
  }
}

RadioButtonRenderField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  meta: PropTypes.shape({
    asyncValidating: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
  radioList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

export default RadioButtonRenderField;
