import React from 'react';
import PropTypes from 'prop-types';
import Handler from '../RangeSliderHandler';
import Line from '../RangeSliderLine';
import cs from './component.pcss';

class RangeSlider extends React.Component {
  onDrag(event, alias) {
    let state = {};
    const parent = event.target.parentElement;
    const left = parent ?
    parent.getBoundingClientRect().left :
    0;
    const width = parent ?
    parent.getBoundingClientRect().width :
    0;
    const x = event.clientX - left;

    const value = ((this.props.range.max - this.props.range.min) * x) / width;

    if (left === 0 || width === 0) {
      return;
    }
    if (x > width || x < 0) {
      return;
    }
    if (alias === 'min') {
      if (value > this.props.max - 1) {
        return;
      }
      state = {
        min: value,
        max: this.props.max,
      };
    } else if (alias === 'max') {
      if (value < this.props.min + 1) {
        return;
      }
      state = {
        max: value,
        min: this.props.min,
      };
    }
    this.props.onChange(state);
  }

  render() {
    return (
      <div>
        <div className={cs.price}>
          <span>Floor</span>
        </div>
        <span className={cs.min}>From: {Math.floor(this.props.min)}</span>
        <span className={cs.max}>To: {Math.floor(this.props.max)}</span>
        <div className={cs.root}>
          <Line
            min={this.props.min}
            max={this.props.max}
          />
          <Handler
            xCoord={this.props.min}
            onDrag={this.onDrag.bind(this)}
            alias="min"
          />
          <Handler
            xCoord={this.props.max}
            onDrag={this.onDrag.bind(this)}
            alias="max"
          />
        </div>
      </div>
    );
  }
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  range: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
};

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  range: {
    min: 0,
    max: 100,
  },
};

export default RangeSlider;
