import { Link } from 'react-router-dom';
import { Button, Card, Typography } from '@mui/material';
import { Table } from '@codbear/reactable';

import { getEmployees } from '../services';
import Layout from '../components/Layout';
import { ROUTES } from '../router';

const columns = [
  {
    dataField: 'firstName',
    header: 'First name',
    isSortable: true,
  },
  {
    dataField: 'lastName',
    header: 'Last name',
    isSortable: true,
  },
  {
    dataField: 'birthDate',
    header: 'Birthdate',
    isSortable: true,
  },
  {
    dataField: 'startDate',
    header: 'Start date',
    isSortable: true,
  },
  {
    dataField: 'department',
    header: 'Department',
    isSortable: true,
  },
  {
    dataField: 'street',
    header: 'Street',
    isSortable: true,
  },
  {
    dataField: 'city',
    header: 'City',
    isSortable: true,
  },
  {
    dataField: 'state',
    header: 'State',
    isSortable: true,
  },
  {
    dataField: 'zipCode',
    header: 'ZIP code',
    isSortable: true,
  },
];

const EmployeeListScreen = () => {
  const employees = getEmployees();

  return (
    <Layout
      action={
        <Button variant="contained" component={Link} to={ROUTES.EMPLOYEE.CREATE}>
          Add new employee
        </Button>
      }
    >
      <Card sx={{ m: 'auto', px: 2, py: 4 }}>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Current Employees
        </Typography>

        <Table data={employees} columns={columns} hasSearchBar />
      </Card>
    </Layout>
  );
};

export default EmployeeListScreen;
