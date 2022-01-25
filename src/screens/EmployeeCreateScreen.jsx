import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {
  Box,
  Button,
  Card,
  MenuItem,
  styled,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@mui/material';

import { isDate, isZipCode, saveEmployee } from '../services';
import { STATES } from '../constants';
import TextFieldFormik from '../components/TextFieldFormik';
import DatePickerFormik from '../components/DatePickerFormik';
import SelectFormik from '../components/SelectFormik';
import { ROUTES } from '../router';
import Layout from '../components/Layout';

const EmployeeCreateScreen = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);

  const goToEmployeesList = () => {
    history.push(ROUTES.EMPLOYEE.INDEX);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  };

  const Grid = styled('div')(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(4),
  }));

  return (
    <Layout
      action={
        <Button variant="contained" component={Link} to={ROUTES.EMPLOYEE.INDEX}>
          Employees list
        </Button>
      }
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          saveEmployee(values);
          formikHelpers.resetForm();
          setIsModalOpen(true);
        }}
      >
        {() => (
          <Card sx={{ m: 'auto', px: 8, py: 4 }}>
            <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
              Create employee
            </Typography>
            <Form>
              <Grid>
                <TextFieldFormik name="firstName" label="First name" fullWidth isRequired />

                <TextFieldFormik name="lastName" label="Last name" fullWidth isRequired />

                <DatePickerFormik
                  name="birthDate"
                  label="Date of birth"
                  fullWidth
                  isRequired
                  validators={[isDate]}
                />

                <DatePickerFormik
                  name="startDate"
                  label="Start date"
                  fullWidth
                  sx={{ gridColumn: 1 }}
                  isRequired
                  validators={[isDate]}
                />

                <SelectFormik
                  name="department"
                  label="Department"
                  fullWidth
                  isRequired
                  options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']}
                />

                <Typography variant="h5" component="h3">
                  Address
                </Typography>

                <TextFieldFormik
                  name="street"
                  label="Street"
                  fullWidth
                  sx={{ gridColumn: '1 / span 2' }}
                  isRequired
                />

                <TextFieldFormik name="city" label="City" fullWidth isRequired />

                <SelectFormik name="state" label="State" fullWidth isRequired>
                  {STATES.map((state) => (
                    <MenuItem key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </MenuItem>
                  ))}
                </SelectFormik>

                <TextFieldFormik
                  name="zipCode"
                  label="Zip Code"
                  fullWidth
                  isRequired
                  validators={[isZipCode]}
                />
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                <Button type="submit" variant="contained" size="large">
                  Save
                </Button>
              </Box>
            </Form>
          </Card>
        )}
      </Formik>

      <Dialog open={isModalOpen}>
        <DialogTitle sx={{ textAlign: 'center' }}>Employee created!</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseModal}>Add new employee</Button>
          <Button onClick={goToEmployeesList} autoFocus variant="contained">
            Go to employees list
          </Button>
        </DialogActions>
      </Dialog>
    </Layout>
  );
};

export default EmployeeCreateScreen;
