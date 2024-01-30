const validationRegistration = (body) => {
  console.log('well this is the body', body);
  let errors = {};

  const alphaBeticRegex = /^[A-Ba-z]+$/;

  if (body.firstName.length < 2 || !alphaBeticRegex.test(body.firstName)) {
    errors.firstNameMsg = 'First Name Required';
  }

  if (body.lastName.length < 2 || !alphaBeticRegex.test(body.lastName)) {
    errors.lastNameMsg = 'Last Name Required';
  }

  if (
    body.address.length < 3 ||
    !/^[\d{1,5}]\s\w(\b\w*\b\s){1,2}\w*\./.test(body.address)
  ) {
    errors.addressMsg = 'Address Required';
  }

  if (body.city.length < 2 || !alphaBeticRegex.test(body.city)) {
    errors.cityMsg = 'City Required';
  }

  if (body.state.length < 2 || !alphaBeticRegex.test(body.state)) {
    errors.stateMsg = 'State Required';
  }

  if (!/^\d{5}/.test(body.zipCode)) {
    errors.zipCodeMsg = 'Zip Code Required';
  }

  if (!/\S+@\S+\.\S+/.test(body.email)) {
    errors.emailMsg = 'Email Required';
  }

  if (body.password.length < 6) {
    errors.passwordMsg = 'Password Required';
  }

  if (body.password.length < 6 || body.password !== body.confirmPassword) {
    errors.confirmPasswordMsg = 'Passwords must match';
  }

  return errors;
};
module.exports = {
  validationRegistration,
};
