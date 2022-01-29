import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

import { Router } from './router';
import { EmployeesProvider } from './contexts';

const App = () => {
  return (
    <EmployeesProvider>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Router />
      </LocalizationProvider>
    </EmployeesProvider>
  );
};

export default App;
