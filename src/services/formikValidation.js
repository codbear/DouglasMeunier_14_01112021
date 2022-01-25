import { isValid } from 'date-fns';

const REGEX = {
  ZIP_CODE: /^[0-9]{5}$/,
};

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

export const isDate = (value) => {
  const isValidDate = isValid(value);

  if (!isValidDate) {
    return 'Use a valid date mm/dd/yyyy';
  }

  return undefined;
};

export const isZipCode = (value) => {
  const isValidZipCode = REGEX.ZIP_CODE.test(value);

  if (!isValidZipCode) {
    return 'Use a valid zip code';
  }

  return undefined;
};
