import actionTypes from './contextConstants';

const fetchContextsSuccess = contexts => ({ type: actionTypes.FETCH_CONTEXTS_SUCCESS, contexts });

const resetContextsSuccess = () => ({ type: actionTypes.RESET_CONTEXTS_SUCCESS });

const fetchContexts = () => (dispatch) => {
  setTimeout(() => {
    dispatch(fetchContextsSuccess([
      { name: 'PROD-UNIT1', type: 'production', taxYear: '2016' },
      { name: 'PROD-UNIT2', type: 'production', taxYear: '2017' },
      { name: 'TEST-UNIT1', type: 'test', taxYear: '2016' },
      { name: 'TEST-UNIT2', type: 'test', taxYear: '2017' },
      { name: 'OLD-UNIT1', type: 'default', taxYear: '2015' }
    ]
    ));
  }, 200);
};

const resetContexts = () => (dispatch) => {
  dispatch(resetContextsSuccess());
};

const setContext = context => ({ type: actionTypes.SET_CONTEXT_SUCCESS, context });

export {
  fetchContexts,
  resetContexts,
  setContext
};
