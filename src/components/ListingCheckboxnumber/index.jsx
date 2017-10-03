import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import 'bootstrap/scss/_variables.scss';
import cs from './component.pcss';

class CheckboxNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cSelected: [] };
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }
  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div className={cs.checkbox}>
        <div className={cs.rooms}>Rooms</div>
        <ButtonGroup className={cs.btnGroup}>
          <Button
            color="primary"
            className={cs.button}
            onClick={() => this.onCheckboxBtnClick(1)}
            active={this.state.cSelected.includes(1)}
          >1</Button>
          <Button
            color="primary"
            className={cs.button}
            onClick={() => this.onCheckboxBtnClick(2)}
            active={this.state.cSelected.includes(2)}
          >2</Button>
          <Button
            color="primary"
            className={cs.button}
            onClick={() => this.onCheckboxBtnClick(3)}
            active={this.state.cSelected.includes(3)}
          >3</Button>
          <Button
            color="primary"
            className={cs.button}
            onClick={() => this.onCheckboxBtnClick(4)}
            active={this.state.cSelected.includes(4)}
          >4</Button>
          <Button
            color="primary"
            className={cs.button}
            onClick={() => this.onCheckboxBtnClick(5)}
            active={this.state.cSelected.includes(5)}
          >5+</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default CheckboxNumber;
