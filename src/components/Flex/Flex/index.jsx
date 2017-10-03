import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Flex = (props) => {
  const style = {
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    height: props.height,
    flexWrap: props.flexWrap ? 'wrap' : 'nowrap',
  };

  return (
    <div className={cs.root} style={style}>
      { props.children }
    </div>
  );
};

Flex.propTypes = {

  // layout content
  children: PropTypes.node.isRequired,

  // alignItems flex property
  alignItems: PropTypes.string,

  // Justify content flex property
  justifyContent: PropTypes.string,

  // flex wrap attribute: default false
  flexWrap: PropTypes.bool,

  // container height
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Flex.defaultProps = {
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  height: 'auto',
  flexWrap: false,
};

export default Flex;
