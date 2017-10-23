import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LikeUp from 'react-icons/lib/ti/thumbs-up';
import cs from './component.pcss';

class Counter extends Component {
  render() {
    const { value, onIncrement } = this.props;
    return (
      <div className={cs.LikeBlock} >
        {' '}
        <LikeUp onClick={onIncrement} className={cs.Like} />
        <span className={cs.Dislike}>{value}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
