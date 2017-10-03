import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class RangeSliderHandler extends React.Component {
  constructor() {
    super();
    this.onDrag = this.onDrag.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }
  onMouseDown() {
    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.onMouseUp);
  }
  onMouseUp() {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.onDrag);
  }
  onDrag(event) {
    this.props.onDrag(event, this.props.alias);
  }
  render() {
    const style = {
      left: `${this.props.xCoord}%`,
    };
    return (
      <span
        role="presentation"
        className={cs.root}
        style={style}
        onMouseDown={this.onMouseDown.bind(this)}
      />
    );
  }
}

RangeSliderHandler.propTypes = {
  xCoord: PropTypes.number.isRequired,
  onDrag: PropTypes.func.isRequired,
  alias: PropTypes.string.isRequired,
};

export default RangeSliderHandler;
