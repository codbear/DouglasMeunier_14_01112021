import { Formik, Form } from 'formik';
import { Box, Button, Card, MenuItem, styled, Typography } from '@mui/material';

import TextFieldFormik from '../components/TextFieldFormik';
import Layout from '../components/Layout';
import DatePickerFormik from '../components/DatePickerFormik';
import SelectFormik from '../components/SelectFormik';
import STATES from '../constants/states';
import { isDate, isZipCode } from '../services/formikValidation';

const EmployeeCreateScreen = () => {
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
    <Layout>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
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
    </Layout>
  );
};

export default EmployeeCreateScreen;
