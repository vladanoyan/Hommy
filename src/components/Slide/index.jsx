import React from 'react';
import RangeSlider from '../RangeSlider';

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      min: 0,
      max: 100,
    };
  }

  render() {
    return (
      <div style={{ width: '100%', height: '60px' }}>
        <RangeSlider
          max={this.state.max}
          min={this.state.min}
          onChange={(state) => {
            this.setState({
              min: state.min,
              max: state.max,
            });
          }}
          range={{
            min: 0,
            max: 100,
          }}
        />
      </div>
    );
  }
}

export default Slide;
