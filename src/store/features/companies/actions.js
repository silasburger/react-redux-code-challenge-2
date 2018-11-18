import types from './types';

function addCompany(companyData) {
  return {
    type: types.ADD_COMPANY,
    payload: companyData
  }
}

function addEmployee(employeeData) {
  return {
    type: types.ADD_EMPLOYEE,
    payload: companyData
  }
}

export default {
  addCompany,
  addEmployee
};