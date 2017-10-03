import React from 'react';
import Select from 'react-select';
import cs from './component.pcss';

class SelectSort extends React.Component {
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
    const options = [
      { value: 'low', label: 'Price: Low to High' },
      { value: 'high', label: 'Price: High to Low' },
      { value: 'newest', label: 'Newest Arrivals' },
    ];
    return (
      <div className={cs.Sorting}>
        <span>Sort by</span>
        <Select
          className={cs.Sort}
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default SelectSort;
