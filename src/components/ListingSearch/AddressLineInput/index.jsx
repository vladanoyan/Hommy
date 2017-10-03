import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '../FormControl';
import cs from './component.pcss';
import AddressContainer from '../AddressContainer';
import AddressLineRow from '../AddressLineRow';
import SearchBtn from '../Buttons/SearchBtn';

class AddressLineInput extends React.Component {
  constructor() {
    super();

    this.state = {
      addresses: [],
      activeIndex: -1,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  onChange(evt) {
    const input = evt.target.value;

    this.props.onChange(input);

    // terminate function execution if
    // google api isn't loaded
    if (!window.gLoaded) {
      return;
    }

    // initiate service
    const service = new window.google.maps.places.AutocompleteService();

    // terminate function execution if
    // input is empty strin
    if (input === '') {
      this.setState({
        addresses: [],
        activeIndex: -1,
      });

      return;
    }

    // parse predictions
    service.getQueryPredictions({ input }, this.parsePredictions.bind(this));
  }

  onBlur() {
    this.time = setTimeout(() => {
      this.setState({
        addresses: [],
      });
    }, 100);
  }

  onClick(location) {
    this.setState({ addresses: [] }, () => {
      this.props.onChange(location);
    });
  }

  onKeyDown(event) {
    event.stopPropagation();

    // enter: 13
    // up arrow: 18
    // down arrow: 40

    switch (event.keyCode) {
      case 13: {
        const { activeIndex, addresses } = this.state;

        if (activeIndex > -1 && activeIndex <= addresses.length - 1) {
          this.setState({ addresses: [] }, () => {
            this.props.onChange(addresses[activeIndex].description);
          });
        }

        this.input.closest('[tabindex]').focus();
        break;
      }
      case 38: {
        this.goTo(-1);
        break;
      }
      case 40: {
        this.goTo(1);
        break;
      }
      default:
        break;
    }
  }

  parsePredictions(predictions, status) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      this.setState({
        addresses: predictions,
        activeIndex: -1,
      });
    }
  }

  goTo(incrementIndex) {
    const { activeIndex, addresses } = this.state;

    if (incrementIndex === -1 && activeIndex > -1) {
      this.setState({
        activeIndex: activeIndex - 1,
      });
    } else if (incrementIndex === 1 && activeIndex < addresses.length - 1) {
      this.setState({
        activeIndex: activeIndex + 1,
      });
    }
  }

  renderAddresses() {
    const map = (item, i) => {
      return (
        <AddressLineRow
          address={item}
          isActive={this.state.activeIndex === i}
          key={i}
          onClick={this.onClick.bind(this)}
        />
      );
    };

    return this.state.addresses.map(map);
  }

  render() {
    const isHidden = !this.state.addresses.length;

    return (
      <div
        className={cs.root}
        onKeyDown={this.onKeyDown.bind(this)}
        ref={(i) => {
          this.input = i;
        }}
        role="button"
        tabIndex="0"
        onBlur={this.onBlur.bind(this)}
      >
        <FormControl
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholder}
        />
        <AddressContainer isHidden={isHidden}>
          {this.renderAddresses()}
        </AddressContainer>
        <SearchBtn />
      </div>
    );
  }
}

AddressLineInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AddressLineInput.defaultProps = {
  placeholder: '',
};

export default AddressLineInput;
