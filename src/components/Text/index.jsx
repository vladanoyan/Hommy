import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {
  const style = {
    color: props.color,
    textTransform: props.transform,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    fontFamily: 'Lato, sans-serif',
    lineHeight: props.lineHeight,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  transform: PropTypes.oneOf([
    'uppercase',
    'capitalize',
    'lowercase',
    'none',
  ]),
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  color: '#2a2a2a',
  transform: 'none',
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: 'normal',
};

export default Text;
