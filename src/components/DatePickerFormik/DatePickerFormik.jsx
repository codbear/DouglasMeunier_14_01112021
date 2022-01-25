import PropTypes from 'prop-types';
import { Field } from 'formik';

import { TextField } from '@mui/material';

import { validateField, isRequired as isRequiredValidator } from '../../services';
import { DatePicker } from '@mui/lab';

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validators: PropTypes.arrayOf(PropTypes.func),
  isRequired: PropTypes.bool,
};

const defaultProps = {
  validators: [],
  isRequired: false,
};

const DatePickerFormik = ({ name, label, isRequired, validators, ...otherProps }) => {
  const enhancedValidators = [...(isRequired ? [isRequiredValidator] : []), ...validators];

  return (
    <Field name={name} validate={validateField(enhancedValidators)}>
      {(formikProps) => {
        const { form, field } = formikProps;
        const error = form.touched[field.name] && form.errors[field.name];

        return (
          <DatePicker
            {...formikProps.field}
            onChange={(value) => {
              formikProps.form.setFieldValue(name, value);
            }}
            label={label}
            variant="outlined"
            renderInput={(params) => (
              <TextField
                {...params}
                {...otherProps}
                helperText={error || ''}
                error={Boolean(error)}
              />
            )}
          />
        );
      }}
    </Field>
  );
};

DatePickerFormik.propTypes = propTypes;
DatePickerFormik.defaultProps = defaultProps;

export default DatePickerFormik;
