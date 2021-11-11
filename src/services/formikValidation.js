export const validateField = (validationArray) => (value) => {
  let error;

  if (!validationArray) {
    return error;
  }

  validationArray.some((validator) => {
    error = validator(value);
    return !!error;
  });

  return error;
};

export const isRequired = (value) => {
  if (!value) {
    return 'This field is required';
  }

  return undefined;
};
