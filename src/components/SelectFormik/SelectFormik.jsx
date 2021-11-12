import React from 'react';
import PropTypes from 'prop-types';

import TextFieldFormik from '../TextFieldFormik';
import { MenuItem } from '@mui/material';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const SelectFormik = ({ options, ...otherProps }) => {
  return (
    <TextFieldFormik select {...otherProps} defaultValue="">
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextFieldFormik>
  );
};

SelectFormik.propTypes = propTypes;

export default SelectFormik;
