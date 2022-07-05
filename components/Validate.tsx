// @ts-nocheck
const validate = (values) => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.message) {
    errors.message = 'Required';
  }
  return errors;
};
export default validate;
