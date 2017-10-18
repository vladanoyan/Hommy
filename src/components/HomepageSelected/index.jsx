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
    const current = this.state.rSelected;
    const getClass = (name, index) => {
      if (index === current) {
        return `${name} ${cs.activeHome}`;
      }
      return name;
    };
    return (
      <div >
        <ButtonGroup>
          <div className={cs.box}>
            <Button
              className={getClass(`${cs.CheckboxBtn}`, 1)}
              color="info"
              onClick={() => this.onRadioBtnClick(1)}
              active={this.state.rSelected === 1}
            >
              Sale
            </Button>
            <Button
              className={getClass(`${cs.CheckboxBtn}`, 2)}
              color="info"
              onClick={() => this.onRadioBtnClick(2)}
              active={this.state.rSelected === 2}
            >
              Rent
            </Button>
            <Button
              className={getClass(`${cs.CheckboxBtn}`, 3)}
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
