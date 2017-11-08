import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import UnCheckedIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import CheckedIcon from 'material-ui/svg-icons/toggle/check-box';
import Checkbox from 'material-ui/Checkbox';
import cs from './component.pcss';

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    uncheckedIcon={<UnCheckedIcon style={{ fill: '#e2e4e8' }} />}
    checkedIcon={<CheckedIcon style={{ fill: '#5f90dd' }} />}
    label={label}
    checked={!!input.value}
    onCheck={input.onChange}
  />
  );
const MaterialUiForm = (props) => {
  return (
    <form className={cs.formCheck}>
      <div className={cs.checkbox}>
        <Field
          name={props.name}
          component={renderCheckbox}
          label={props.label}
        />
      </div>
    </form>
  );
};

MaterialUiForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,

};


renderCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

renderCheckbox.defaultProps = {
  label: '',
};

export default reduxForm({
  form: 'MaterialUiFormCheckbox',
})(MaterialUiForm);
