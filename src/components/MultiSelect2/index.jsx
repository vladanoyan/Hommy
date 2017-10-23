import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const SimpleForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={cs.Sorting}>
        <Field name="sort" component="select" className={cs.Sort}>
          <option>Sort by</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </Field>
      </div>
    </form>
  );
};

SimpleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'sort',
})(SimpleForm);
