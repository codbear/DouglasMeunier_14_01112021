import PropTypes from 'prop-types';
import { Field } from 'formik';

import { TextField } from '@mui/material';

import { validateField, isRequired as isRequiredValidator } from '../../services';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  validators: PropTypes.arrayOf(PropTypes.func),
  isRequired: PropTypes.bool,
};

const defaultProps = {
  type: 'text',
  validators: [],
  isRequired: false,
};

const TextFieldFormik = ({ name, label, type, isRequired, validators, ...otherProps }) => {
  const enhancedValidators = [...validators, ...(isRequired ? [isRequiredValidator] : [])];

  return (
    <Field name={name} validate={validateField(enhancedValidators)}>
      {(formikProps) => {
        const { form, field } = formikProps;
        const error = form.touched[field.name] && form.errors[field.name];

        return (
          <TextField
            {...formikProps.field}
            {...otherProps}
            id={`field${field.name}`}
            label={label}
            error={Boolean(error)}
            variant="outlined"
            type={type}
            helperText={error || ''}
          />
        );
      }}
    </Field>
  );
};

TextFieldFormik.propTypes = propTypes;
TextFieldFormik.defaultProps = defaultProps;

export default TextFieldFormik;
