import React from 'react';
import Select from 'react-select';
import cs from './component.pcss';

class Multi extends React.Component {
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
      { value: 'two', label: 'Two' },
      { value: 'tree', label: 'Tree' },
      { value: 'four', label: 'four' },
      { value: 'five', label: 'five' },
    ];

    return (
      <div>
        <Select
          className={cs.input}
          multi
          name="form-field-name"
          value={this.state.value}
          options={options}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default Multi;
