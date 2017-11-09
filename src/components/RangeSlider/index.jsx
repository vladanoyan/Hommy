import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Slider } from 'redux-form-material-ui';
import cs from './component.pcss';

class RangeSlider extends React.Component {
  render() {
    const { handleSubmit, numSlider } = this.props;
    return (
      <form onSubmit={handleSubmit} className={cs.form}>
        <div className={cs.label}>{this.props.textSlider} {numSlider}</div>
        <div>
          <Field
            name="Slide"
            component={Slider}
            defaultValue={0}
            format={null}
            min={this.props.min}
            max={this.props.max}
            step={1}
            sliderStyle={{ margin: '0px' }}
          />
        </div>
      </form>
    );
  }
}
const selector = formValueSelector('example');

RangeSlider.propTypes = {
  numSlider: PropTypes.number.isRequired,
  textSlider: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
//
//
// RangeSlider = connect(state => ({
//   numSlider: selector(state, 'Slide'),
// }))(RangeSlider);

const mapStateToProps = (state) => {
  return {
    numSlider: selector(state, 'Slide'),
  };
};
export default reduxForm({
  form: 'example',
  mapStateToProps,
  initialValues: {
    Slide: 100,
  },
})(RangeSlider);
