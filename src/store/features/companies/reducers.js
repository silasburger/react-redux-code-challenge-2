import types from './types';
import { createDefaultReducer } from '../../helpers'

const initialState = {};

const addCompanyHandler = (state, payload) => {
  const id = payload.id
  return {
    ...state,
  [id]: payload
  }
};

const actionMap = {
  [types.ADD_COMPANY]: addCompanyHandler
};

export default createDefaultReducer(actionMap, initialState)