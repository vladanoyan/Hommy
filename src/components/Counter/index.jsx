import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LikeUp from 'react-icons/lib/ti/thumbs-up';
import cs from './component.pcss';

class Counter extends Component {
  render() {
    const { value, onIncrement, classActive } = this.props;
    return (
      <div className={cs.LikeBlock} >
        {' '}
        <LikeUp onClick={onIncrement} className={classActive} />
        <span className={cs.Dislike}>{value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  classActive: PropTypes.string.isRequired,
};

export default Counter;
