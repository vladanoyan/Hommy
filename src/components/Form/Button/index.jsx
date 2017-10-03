import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';
import Flex from '../../Flex/index';

const Button = (props) => {
  const style = {
    width: props.fullWidth ? '100%' : 172,
  };

  return (
    <div className={cs.root} style={style} onClick={props.onClick} role="button" tabIndex={0}>
      <Flex height="100%" alignItems="center" justifyContent="center">
        {props.children}
      </Flex>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => {
    return false;
  },
};

export default Button;
