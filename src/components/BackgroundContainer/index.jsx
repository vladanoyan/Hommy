import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const BackgroundContainer = (props) => {
  return (
    <div className={cs.root}>
      {props.children}
    </div>
  );
};

BackgroundContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundContainer;
