import storage from 'local-storage-fallback';

import { LOCAL_STORAGE_KEY } from '../constants';

const getEmployees = () => {
  try {
    const employees = JSON.parse(storage.getItem(LOCAL_STORAGE_KEY));

    return Array.isArray(employees) ? employees : [];
  } catch (e) {
    return [];
  }
};

export default getEmployees;
