import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import validate from './actions/validate';
import renderFieldAddress from './actions/renderFieldAddress';
import Apartment from '../../../resource/images/Apartment.png';
import House from '../../../resource/images/house.png';
import Place from '../../../resource/images/place.png';
import cs from '../component.pcss';


class WizardFormFirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioCheckedHome: false,
    };
  }

  onRadioChange(event) {
    this.setState({
      radioCheckedHome: event.target.value,
    });
  }
  render() {
    const { handleSubmit } = this.props;
    const renderErrorRadio = ({ meta: { touched, error } }) => (
      touched && error ? <span className={cs.errorSpan}>{error}</span> : false
    );
    return (
      <div>
        <form onSubmit={handleSubmit} className={cs.form}>
          <div className={cs.radioDiv}>
            <div className={cs.fieldRelative}>
              <label
                htmlFor="Apartment"
                className={this.state.radioCheckedHome === 'Apartment' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
              >
                <Field
                  name="listing"
                  component="input"
                  type="radio"
                  value="Apartment"
                  id="Apartment"
                  onChange={this.onRadioChange.bind(this)}
                />
                {' '}
                <img src={Apartment} alt="Sale" className={cs.RiIcon} />
              </label>
              <label htmlFor="Apartment">Apartment</label>
            </div>
            <div className={cs.fieldRelative}>
              <label
                htmlFor="House"
                className={this.state.radioCheckedHome === 'House' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
              >
                <Field
                  name="listing"
                  component="input"
                  type="radio"
                  value="House"
                  id="House"
                  onChange={this.onRadioChange.bind(this)}
                />
                {' '}
                <img src={House} alt="Sale" className={cs.RiIcon} />
              </label>
              <label htmlFor="House">House</label>
            </div>
            <div className={cs.fieldRelative}>
              <label
                htmlFor="Place"
                className={this.state.radioCheckedHome === 'Place' ? `${cs.checkedLabel}` : `${cs.chooesLabel}`}
              >
                <Field
                  name="listing"
                  component="input"
                  type="radio"
                  value="Place"
                  id="Place"
                  onChange={this.onRadioChange.bind(this)}
                />
                {' '}
                <img src={Place} alt="Sale" className={cs.RiIcon} />
              </label>
              <label htmlFor="Place">Place</label>
              <Field name="listing" component={renderErrorRadio} />
            </div>
          </div>
          <div className={cs.inputContent}>
            <Field
              name="address"
              type="text"
              component={renderFieldAddress}
              label="What is the address?"
              placeholder="your location"
            />
          </div>
          <div className={cs.nextDiv}>
            <button type="submit" className={cs.next}>Next</button>
          </div>
        </form>
      </div>
    );
  }
}

WizardFormFirstPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
