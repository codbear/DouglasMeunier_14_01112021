import React, { createContext, useState } from 'react';
import { format } from 'date-fns';

export const EmployeesContext = createContext({});
EmployeesContext.displayName = 'EmployeesContext';

const EmployeesProvider = ({children}) => {
  const [employees, setEmployees] = useState([]);

  const saveEmployee = (employee) => {
    setEmployees([
      ...employees,
      {
        ...employee,
        birthDate: format(employee.birthDate, 'yyyy/MM/dd'),
        startDate: format(employee.startDate, 'yyyy/MM/dd'),
      },
    ]);
  }

  return (
    <EmployeesContext.Provider value={{employees, saveEmployee}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export default EmployeesProvider;
