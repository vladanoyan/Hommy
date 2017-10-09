import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import cs from './component.pcss';


class CheckboxBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  render() {
    return (
      <div >
        <ButtonGroup>
          <div className={cs.box}>
            <Button
              className={cs.CheckboxBtn}
              color="info"
              onClick={() => this.onRadioBtnClick(1)}
              active={this.state.rSelected === 1}
            >
              Sale
            </Button>
            <Button
              className={cs.CheckboxBtn}
              color="info"
              onClick={() => this.onRadioBtnClick(2)}
              active={this.state.rSelected === 2}
            >
              Rent
            </Button>
            <Button
              className={cs.CheckboxBtn}
              color="info"
              onClick={() => this.onRadioBtnClick(3)}
              active={this.state.rSelected === 3}
            >
              Trade
            </Button>
          </div>
        </ButtonGroup>
      </div>
    );
  }
}

export default CheckboxBtn;
