import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Group = (props) => {
  return (
    <div className={cs.root}>
      <div className={cs.label}>
        {props.label}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

Group.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Group;
