import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class CheckboxNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cSelected: [],
    };

    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }
  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected.id);
    if (index < 0) {
      this.state.cSelected.push(selected.id);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
    this.props.onChange(this.state.cSelected);
  }
  render() {
    const buttonGroup = this.props.list.map(item => (
      <div
        role="presentation"
        key={item.id}
        onClick={() => this.onCheckboxBtnClick(item)}
        checked={this.state.cSelected.includes(item.id)}
        className={this.state.cSelected.includes(item.id) ? `${cs.activeclass}` : `${cs.button}`}
      >
        {item.name}</div>),
    );
    return (
      <div className={cs.checkbox}>
        <div className={cs.rooms}>Rooms</div>
        <div className={cs.btnGroup}>
          {buttonGroup}
          {/*
                    //<p>Selected: {JSON.stringify(this.state.cSelected)}</p>
          */}
        </div>
      </div>
    );
  }
}
CheckboxNumber.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};


export default CheckboxNumber;
