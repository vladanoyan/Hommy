const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.firstname) {
    errors.firstname = 'Required';
  }
  if (!values.lastname) {
    errors.lastname = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.terms) {
    errors.terms = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
export default validate;
