import React from 'react';
import PropTypes from 'prop-types';
import Padding from '../../Padding';

const rangeValidator = (minValue, maxValue, isRequired) => {
  return (props, propName) => {
    const number = props[propName];
    const errorStart = `Value of property ${propName}`;

    // stop validation because it's not required
    if (!number && !isRequired) {
      return null;
    } else if (!number && isRequired) {
      return new Error(`${errorStart} is required`);
    }

    if (isNaN(number)) {
      return new Error(`${errorStart} must be a number`);
    }

    const inRange = number >= minValue && number <= maxValue;

    return inRange ? null : new Error(`${errorStart} must be in range ${minValue} to ${maxValue}`);
  };
};

const FlexCol = (props) => {
  const style = {
    marginTop: props.margin.top || 0,
    marginRight: props.margin.right || 0,
    marginBottom: props.margin.bottom || 0,
    marginLeft: props.margin.left || 0,
  };

  if (props.size) {
    style.flexBasis = `${(100 / 12) * props.size}%`;
  }

  return (
    <div style={style}>
      <Padding padding={props.padding}>
        { props.children }
      </Padding>
    </div>
  );
};

FlexCol.propTypes = {

  // Left margin for column
  margin: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),

  // Padding for spacing
  padding: PropTypes.shape({
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
  }),

  // column content
  children: PropTypes.node.isRequired,

  // flex Basis based on 12 item grid
  size: rangeValidator(1, 12),
};

FlexCol.defaultProps = {
  size: false,
  margin: {},
  padding: {},
};

export default FlexCol;
