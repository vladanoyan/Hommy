import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Like from 'react-icons/lib/ti/thumbs-down';
import cs from './component.pcss';

class CounterDe extends Component {
  render() {
    const { value1, onDecrement } = this.props;
    return (
      <div className={cs.LikeBlock} >
        {' '}
        <Like
          onClick={onDecrement}
          className={cs.Like}
        />
        <span className={cs.Dislike}>{value1}</span>
      </div>
    );
  }
}

CounterDe.propTypes = {
  value1: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default CounterDe;
