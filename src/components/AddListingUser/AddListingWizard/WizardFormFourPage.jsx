import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import Checkbox from 'material-ui/Checkbox';
import PropTypes from 'prop-types';
import Left from 'react-icons/lib/fa/chevron-left';
import DropZone from '../DropZone';
import validate from './actions/validate';
import cs from '../component.pcss';


const renderCheckbox = ({ input, label }) => (
  <Checkbox
    uncheckedIcon={<UnCheckedIcon style={{ fill: '#464a4c' }} />}
    checkedIcon={<CheckedIcon style={{ fill: '#5f90dd' }} />}
    label={label}
    onCheck={input.onChange}

  />
);
const renderErrorcheckbox = ({ meta: { touched, error } }) => (
  touched && error ? <span className={cs.errorSpan}>{error}</span> : false
);

const WizardFormFourPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className={cs.form}>
      <div>
        <DropZone />
      </div>
      <div className={cs.fourPageTextarea}>
        <label htmlFor="disqription">Disqription</label>
        <div>
          <Field
            name="disqription"
            component="textarea"
            placeholder="your text here"
            id="disqription"
          />
        </div>
      </div>
      <div className={cs.iconRelative}>
        <Field
          name="terms"
          id="employed"
          type="checkbox"
          label={
            <div>
              I agree to the{' '}
              <NavLink to="/app/terms" className={cs.terms}>Terms</NavLink>
            </div>
          }
          component={renderCheckbox}
        />
        <Field name="checkbox" component={renderErrorcheckbox} />
      </div>
      <div>
        <div className={cs.previousDiv}>
          <button type="button" className={cs.previous} onClick={previousPage}>
            <Left />
          </button>
        </div>
        <div className={cs.nextDiv}>
          <button type="submit" disabled={pristine || submitting} className={cs.next}>Add</button>
        </div>
      </div>
    </form>
  );
};

WizardFormFourPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,

};
renderErrorcheckbox.propTypes = {
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

renderCheckbox.propTypes = {
  label: PropTypes.shape({
    label: PropTypes.object,
  }).isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFourPage);
