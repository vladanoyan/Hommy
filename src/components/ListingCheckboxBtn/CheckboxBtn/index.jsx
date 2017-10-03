import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import cs from './CheckboxBtn.pcss';


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
      <div className={cs.Ceckbox}>
        <ButtonGroup className={cs.group}>
          <Button
            className={cs.CheckboxBtn}
            color=""
            onClick={() => this.onRadioBtnClick(1)}
            active={this.state.rSelected === 1}
          >
            Buy
          </Button>
          <Button
            className={cs.CheckboxBtn}
            color=""
            onClick={() => this.onRadioBtnClick(2)}
            active={this.state.rSelected === 2}
          >
            Sell
          </Button>
          <Button
            className={cs.CheckboxBtn}
            color=""
            onClick={() => this.onRadioBtnClick(3)}
            active={this.state.rSelected === 3}
          >
            Rent
          </Button>
          <Button
            className={cs.CheckboxBtn}
            color=""
            onClick={() => this.onRadioBtnClick(4)}
            active={this.state.rSelected === 4}
          >
            Trade
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default CheckboxBtn;
