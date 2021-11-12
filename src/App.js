import { LocalizationProvider } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDateFns';

import { Router } from './router';
import Layout from './components/Layout';

const App = () => {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Layout>
        <Router />
      </Layout>
    </LocalizationProvider>
  );
};

export default App;
