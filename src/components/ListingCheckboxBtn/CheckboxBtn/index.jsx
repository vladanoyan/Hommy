import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cs from './component.pcss';

const radioList = [
  {
    name: 'Sale',
    id: 1,
  },
  {
    name: 'Rent',
    id: 2,
  },
  {
    name: 'Trade',
    id: 3,
  },
];
class CheckboxBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.props.dispatchRadioHome(rSelected);
  }
  render() {
    const { value } = this.props;
    const getClass = (name, item) => {
      if (item === value) {
        return `${name} ${cs.active1}`;
      }
      return name;
    };
    const radioButtonGroup = radioList.map(item => (
      <div
        role="presentation"
        key={item.id}
        onClick={() => this.onRadioBtnClick(item)}
        className={getClass(`${cs.CheckboxBtn}`, item)}
      >
        {item.name}</div>),
    );
    return (
      <div >
        <div className={cs.box}>
          {radioButtonGroup}
        </div>
      </div>
    );
  }
}

CheckboxBtn.propTypes = {
  dispatchRadioHome: PropTypes.func.isRequired,
  value: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRadioHome: (item) => {
      dispatch({ type: 'GET_RADIO_STATUS_LISTING', item });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    value: state.dispatchRadioHome,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckboxBtn);
