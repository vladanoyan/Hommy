import React from 'react';
import { Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Left from 'react-icons/lib/fa/chevron-left';
import validate from './actions/validate';
import renderField from './actions/renderField';
import Sale from '../../../resource/images/savsale.png';
import Rent from '../../../resource/images/sav.png';
import Trade from '../../../resource/images/savtrade.png';
import cs from '../component.pcss';

class WizardFormSecondPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioChecked: false,
    };
  }
  onRadioChange(event) {
    this.setState({
      radioChecked: event.target.value,
    });
  }
  render() {
    const { handleSubmit, previousPage } = this.props;
    const renderErrorRadio = ({ meta: { touched, error } }) => (
      touched && error ? <span className={cs.errorSpan}>{error}</span> : false
    );
    return (
      <form onSubmit={handleSubmit} className={cs.form}>
        <div className={cs.radioDiv}>
          <div className={cs.fieldRelative}>
            <label
              htmlFor="Sell"
              className={this.state.radioChecked === 'Sell' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
            >
              <Field
                name="radio"
                component="input"
                type="radio"
                value="Sell"
                id="Sell"
                onChange={this.onRadioChange.bind(this)}
              />
              {' '}
              <img src={Sale} alt="Sale" className={cs.RiIcon} />
            </label>
            <label htmlFor="Sell">Sell</label>
          </div>
          <div className={cs.fieldRelative}>
            <label
              htmlFor="Rent"
              className={this.state.radioChecked === 'Rent' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
            >
              <Field
                name="radio"
                component="input"
                type="radio"
                value="Rent"
                id="Rent"
                onChange={this.onRadioChange.bind(this)}
              />
              {' '}
              <img src={Rent} alt="Sale" className={cs.RiIcon} />
            </label>
            <label htmlFor="Rent">Rent</label>
          </div>
          <div className={cs.fieldRelative}>
            <label
              htmlFor="Trade"
              className={this.state.radioChecked === 'Trade' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
            >
              <Field
                name="radio"
                component="input"
                type="radio"
                value="Trade"
                id="Trade"
                onChange={this.onRadioChange.bind(this)}
              />
              {' '}
              <img src={Trade} alt="Sale" className={cs.RiIcon} />
            </label>
            <label htmlFor="Trade">Trade</label>
            <Field name="radio" component={renderErrorRadio} />
          </div>
        </div>
        <div className={cs.inputContent}>
          <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
            placeholder="enter your E-mail"
          />
        </div>
        <Row style={{ paddingBottom: '15px' }}>
          <Col xs="12" md="6" sm="6">
            <div className={cs.inputContent}>
              <Field
                name="phone1"
                type="number"
                component={renderField}
                label="Phone number"
                placeholder="your phone number"
              />
            </div>
          </Col>
          <Col xs="12" md="6" sm="6">
            <div className={cs.inputContent}>
              <Field
                name="phone2"
                type="number"
                component={renderField}
                label="second number"
                placeholder="your phone number"
              />
            </div>
          </Col>
        </Row>
        <div>
          <div className={cs.previousDiv}>
            <button type="button" className={cs.previous} onClick={previousPage}>
              <Left />
            </button>
          </div>
          <div className={cs.nextDiv}>
            <button type="submit" className={cs.next}>Next</button>
          </div>
        </div>
      </form>
    );
  }
}

WizardFormSecondPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
