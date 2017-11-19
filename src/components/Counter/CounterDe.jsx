import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Like from 'react-icons/lib/ti/thumbs-down';
import cs from './component.pcss';

class CounterDe extends Component {
  render() {
    const { value, onDecrement, classActive } = this.props;
    return (
      <div className={cs.LikeBlock}>
        {' '}
        <Like
          onClick={onDecrement}
          className={classActive}
        />
        <span className={cs.Dislike}>{value}</span>
      </div>
    );
  }
}

CounterDe.propTypes = {
  value: PropTypes.number.isRequired,
  classActive: PropTypes.string.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default CounterDe;
