import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import cs from './component.pcss';

const style = {
  activeTrack: cs.activeTrack,
  inputRange: cs.inputRange,
  disabledInputRange: cs.disabledInputRange,
  slider: cs.slider,
  maxLabel: cs.maxLabel,
  minLabel: cs.minLabel,
  valueLabel: cs.valueLabel,
  labelContainer: cs.labelContainer,
  sliderContainer: cs.sliderContainer,
  track: cs.track,

};
class RangeFloor extends React.Component {

  render() {
    return (
      <div>
        <div className={cs.label}>{this.props.textSlider}</div>
        <InputRange
          classNames={style}
          maxValue={this.props.max}
          minValue={this.props.min}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
RangeFloor.propTypes = {
  textSlider: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
export default RangeFloor;
