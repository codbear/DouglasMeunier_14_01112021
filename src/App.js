import { Router } from './router';
import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Router />
    </LocalizationProvider>
  );
};

export default App;
