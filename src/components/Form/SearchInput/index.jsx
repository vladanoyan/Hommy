import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon/index';
import cs from './component.pcss';

const SearchInput = (props) => {
  return (
    <div className={cs.root}>
      <div className={cs.searchIcon}>
        <Icon icon="search" color="#b1bbca" fontSize={15} />
      </div>
      <input type="text" onChange={props.onChange} value={props.value} />
    </div>
  );
};

SearchInput.propTypes = {
  // input value
  value: PropTypes.string.isRequired,

  // onChange handler
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
