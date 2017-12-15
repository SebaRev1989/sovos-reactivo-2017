import actionTypes from './ImportConstants';
import * as fakeBackend from './fakeImportBackend';

const fetchSucessImportHistory = importHistoryList => ({ type: actionTypes.FETCH_SUCCESS_IMPORT_HISTORY, importHistoryList });

const fetchImportHistory = () => (dispatch) => {
  setTimeout(() => {
    const importHistoryList = fakeBackend.simulateImportHistoryBackend();
    dispatch(fetchSucessImportHistory(importHistoryList));
  }, 100);
};

const fetchImportProgressSuccess = progress => ({ type: actionTypes.FETCH_IMPORT_PROGRESS_SUCCESS, progress });

const resetImportProgressSuccess = () => ({ type: actionTypes.RESET_IMPORT_PROGRESS });

const resetImportProgress = () => (dispatch) => {
  fakeBackend.resetImportBackend();
  dispatch(resetImportProgressSuccess());
};

const fetchImportProgress = () => (dispatch) => {
  setTimeout(() => {
    const response = fakeBackend.simulateImportProgressBackend();
    dispatch(fetchImportProgressSuccess(response));
  }, 100);
};

const fetchImportErrorSummary = formType => (dispatch) => {
  setTimeout(() => {
    const importErrorSummary = fakeBackend.fetchImportErrorSummary(formType);
    dispatch({ type: actionTypes.FETCH_IMPORT_ERROR_SUMMARY_SUCCESS, importErrorSummary });
  }, 1000);
};

const generateImportErrorData = (formType, error) => (dispatch) => {
  setTimeout(() => {
    fakeBackend.generateImportErrorData(formType, error);
    const importErrorDetails = fakeBackend.fetchImportErrorDetailsByPage(1, 15);
    dispatch({ type: actionTypes.GENERATE_IMPORT_ERROR_DETAILS_SUCCESS, importErrorDetails });
  }, 1000);
};

const fetchImportErrorDetailsByPage = (pageToFetch, recordsPerPage) => (dispatch) => {
  setTimeout(() => {
    const importErrorDetails = fakeBackend.fetchImportErrorDetailsByPage(pageToFetch, recordsPerPage);
    dispatch({ type: actionTypes.FETCH_IMPORT_ERROR_DETAILS_BY_PAGE_SUCCESS, importErrorDetails });
  }, 1000);
};

export {
  fetchImportHistory,
  resetImportProgress,
  fetchImportProgress,
  fetchImportErrorSummary,
  generateImportErrorData,
  fetchImportErrorDetailsByPage
};
