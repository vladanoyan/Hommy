import React from 'react';
import { Row, Col } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Left from 'react-icons/lib/fa/chevron-left';
import renderField from './actions/renderField';
import validate from './actions/validate';
import cs from '../component.pcss';

const WizardFormThirdPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit} className={cs.form}>
      <Row style={{ paddingBottom: '15px' }}>
        <Col xs="12" md="6" sm="6" >
          <div className={cs.inputContent}>
            <Field
              name="price"
              type="number"
              component={renderField}
              label="Price"
              placeholder="your price in $"
            />
          </div>
        </Col>
        <Col xs="12" md="6" sm="6">
          <div className={cs.inputContent}>
            <Field
              name="area"
              type="number"
              component={renderField}
              label="Total Area"
              placeholder="Total area in Sq"
            />
          </div>
        </Col>
        <Col xs="12" md="6" sm="6">
          <div className={cs.inputContent}>
            <Field
              name="floorNum"
              type="number"
              component={renderField}
              label="Floor"
              placeholder="floor number"
            />
          </div>
        </Col>
        <Col xs="12" md="6" sm="6">
          <div className={cs.inputContent}>
            <Field
              name="rooms"
              type="number"
              component={renderField}
              label="Rooms"
              placeholder="how many bedrooms ?"
            />
          </div>
        </Col>
        <Col xs="12" md="6" sm="6">
          <div className={cs.inputContent}>
            <Field
              name="bathrooms"
              type="number"
              component={renderField}
              label="Bathrooms"
              placeholder="how many bathrooms ?"
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
};

WizardFormThirdPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
