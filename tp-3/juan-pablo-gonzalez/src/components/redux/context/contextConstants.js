import sharedActions from '../../shared/constants/SharedConstants';

const actionTypes = {
  FETCH_CONTEXTS_SUCCESS: 'FETCH_CONTEXTS_SUCCESS',
  RESET_CONTEXTS_SUCCESS: 'RESET_CONTEXTS_SUCCESS',
  SET_CONTEXT_SUCCESS: 'SET_CONTEXT_SUCCESS'
};

export default { ...actionTypes, ...sharedActions };
