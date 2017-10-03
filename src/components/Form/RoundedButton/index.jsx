import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../../components/Flex';
import cs from './component.pcss';

const RoundedButton = (props) => {
  return (
    <div className={cs.root}>
      <Flex height="100%" alignItems="center" justifyContent="center">
        {props.children}
      </Flex>
    </div>
  );
};

RoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RoundedButton;
