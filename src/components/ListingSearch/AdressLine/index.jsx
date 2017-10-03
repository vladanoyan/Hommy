import React from 'react';
import AddressLineInput from '../AddressLineInput';

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
      </div>
    );
  }
}

export default Adress;
