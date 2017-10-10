import React from 'react';
import PropTypes from 'prop-types';
import LineIndicator from '../LineIndicator';

class RangeSliderLine extends React.Component {
  render() {
    return (
      <LineIndicator
        min={this.props.min}
        max={this.props.max}
      />
    );
  }
}
RangeSliderLine.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
export default RangeSliderLine;
