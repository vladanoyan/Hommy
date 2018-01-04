const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.address) {
    errors.address = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.terms) {
    errors.checkbox = 'Required';
  }
  if (!values.type) {
    errors.type = 'Required';
  }
  if (!values.radio) {
    errors.radio = 'Required';
  }
  if (!values.listing) {
    errors.listing = 'Required';
  }
  if (!values.area) {
    errors.area = 'Required';
  }
  if (!values.price) {
    errors.price = 'Required';
  }
  if (!values.floorNum) {
    errors.floorNum = 'Required';
  }
  if (!values.rooms) {
    errors.rooms = 'Required';
  }
  if (!values.bathrooms) {
    errors.bathrooms = 'Required';
  }
  if (!values.phone1) {
    errors.phone1 = 'Required';
  }
  if (!values.photo) {
    errors.photo = 'Required';
  }
  return errors;
};

export default validate;
