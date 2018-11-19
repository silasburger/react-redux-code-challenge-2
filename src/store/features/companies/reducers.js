import types from './types';
import { createDefaultReducer } from '../../helpers';

const initialState = {};

// Adds company to the company object with the id as key.
const addCompanyHandler = (state, payload) => {
  const id = payload.id;
  return {
    ...state,
    [id]: payload
  };
};

// Adds employee to the company with the correct id in payload without mutating state. purely pure.
const addEmployeeHandler = (state, payload) => {
  const { 'employer': companyId, ...employeeInfo } = payload;
  return {
    ...state,
    [companyId]: {
      ...state[companyId],
      employees: [...state[companyId].employees, employeeInfo]
    }
  };
};

const actionMap = {
  [types.ADD_COMPANY]: addCompanyHandler,
  [types.ADD_EMPLOYEE]: addEmployeeHandler
};

export default createDefaultReducer(actionMap, initialState);
