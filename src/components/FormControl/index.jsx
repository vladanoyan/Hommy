import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class FormControl extends React.Component {
  renderTextarea() {
    return (
      <textarea
        className={cs.root}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }

  renderInput() {
    return (
      <input
        className={cs.root}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }

  render() {
    return this.props.inputType === 'input' ?
    this.renderInput() :
    this.renderTextarea();
  }
}

FormControl.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf(['input', 'textarea']),
  onChange: PropTypes.func.isRequired,
};

FormControl.defaultProps = {
  placeholder: '',
  inputType: 'input',
};

export default FormControl;
