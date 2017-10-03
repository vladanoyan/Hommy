import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons/lib/ti/tick';
import cs from './component.pcss';

const CheckBox = (props) => {
  const className = `${cs.root} ${props.isChecked ? cs.checked : ''}`;
  const iconStyle = {
    display: props.isChecked ? 'block' : 'none',
    position: 'relative',
  };

  const label = props.label === '' ? null : <div className={cs.label}>{props.label}</div>;

  return (
    <div>
      <div
        onClick={props.onChange}
        role="checkbox"
        aria-checked={props.isChecked}
        tabIndex={0}
        className={cs.checkbox}
      >
        <div className={className}>
          <div style={iconStyle}>
            <Icon color="white" icon="checked" />
          </div>
        </div>
        {label}
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

CheckBox.defaultProps = {
  label: '',
};

export default CheckBox;
