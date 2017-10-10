import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

/**
 * @class LineIndicator
 * @classdesc Render line.
 */
class LineIndicator extends React.Component {
  render() {
    const position = {
      left: `${this.props.min}%`,
      width: `${this.props.max - this.props.min}%`,
    };

    return (
      <div
        className={cs.root}
        style={position}
      />
    );
  }
}

LineIndicator.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default LineIndicator;
