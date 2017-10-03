import React from 'react';
import PropTypes from 'prop-types';
import Flex, { Col } from '../../Flex';
import cs from './component.pcss';

const Switch = (props) => {
  return (
    <div className={cs.root}>
      <Flex>
        <Col size={6}>
          <div
            role="button"
            tabIndex={0}
            onClick={props.onChange}
            className={`${props.value ? cs.active : cs.inactive} ${cs.yes}`}
          >
            <div>Yes</div>
          </div>
        </Col>
        <Col size={6}>
          <div
            role="button"
            tabIndex={0}
            onClick={props.onChange}
            className={`${!props.value ? cs.active : cs.inactive} ${cs.no}`}
          >
            <div>No</div>
          </div>
        </Col>
      </Flex>
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
