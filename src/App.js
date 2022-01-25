import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

import { Router } from './router';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router />
    </LocalizationProvider>
  );
};

export default App;
