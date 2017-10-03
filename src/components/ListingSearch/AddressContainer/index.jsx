import React from 'react';
import PropTypes from 'prop-types';
import './component.pcss';

class AddressContainer extends React.Component {
  render() {
    const className = this.props.isHidden ?
    'root hidden' : 'root';

    return (
      <div className={className} >
        {this.props.children}
      </div>
    );
  }
}

AddressContainer.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default AddressContainer;
