import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ROUTES from '../../constants/routes';
import { EmployeeCreateScreen, EmployeeListScreen } from '../../../screens';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={ROUTES.EMPLOYEE.CREATE}>
        <EmployeeCreateScreen />
      </Route>
      <Route path={ROUTES.EMPLOYEE.INDEX}>
        <EmployeeListScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
