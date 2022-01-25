import React from 'react';
import PropTypes from 'prop-types';

import TextFieldFormik from '../TextFieldFormik';
import { MenuItem } from '@mui/material';

const propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
};

const defaultProps = {
  options: null,
  children: null,
};

const SelectFormik = ({ options, children, ...otherProps }) => {
  return (
    <TextFieldFormik select {...otherProps} defaultValue="">
      {options &&
        options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      {children}
    </TextFieldFormik>
  );
};

SelectFormik.propTypes = propTypes;
SelectFormik.defaultProps = defaultProps;

export default SelectFormik;
