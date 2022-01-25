import storage from 'local-storage-fallback';

import getEmployees from './getEmployees';
import { LOCAL_STORAGE_KEY } from '../constants';
import { format } from 'date-fns';

const saveEmployee = (employee) => {
  const employees = getEmployees();

  const newEmployee = {
    ...employee,
    birthDate: format(employee.birthDate, 'yyyy/MM/dd'),
    startDate: format(employee.startDate, 'yyyy/MM/dd'),
  };

  employees.push(newEmployee);

  storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(employees));
};

export default saveEmployee;
