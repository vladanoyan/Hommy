import React from 'react';
import { NavLink } from 'react-router-dom';
import AddressLineInput from '../AddressLineInput';
import cs from './component.pcss';

class Adress extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange(value) {
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <AddressLineInput
          placeholder="Location ..."
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        />
        <div className={cs.SearchBtn}>
          <NavLink to="/app/listings">
            <div className={cs.icon}>
              <div className={cs.iconIc} >
                Enter
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Adress;
