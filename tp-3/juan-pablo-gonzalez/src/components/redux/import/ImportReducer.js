import actionTypes from './ImportConstants';

const initialStore = {
  fetchingImportHistory: false,
  importHistoryList: [],
  recipientPercentage: 0,
  recipientWaiting: true,
  formPercentage: 0,
  formWaiting: true,
  recipientsAccepted: 0,
  recipientsRejected: 0,
  recipientsErrors: 0,
  recipientsWarnings: 0,
  formsAccepted: 0,
  formsRejected: 0,
  formsErrors: 0,
  formsWarnings: 0,
  statsRowsPerMinute: 0,
  statsRowsComplete: 0,
  statsTimeToComplete: '',
  importErrorSummary: {
    header: [],
    values: []
  },
  importErrorDetails: {
    header: [],
    values: [],
    total: null
  }
};

export default function importHistoryGridReducer(state = initialStore, action) {
  let editedState;
  const duplicateState = () => (Object.assign({}, state));

  switch (action.type) {
    case actionTypes.FETCHING_IMPORT_HISTORY:
      editedState = duplicateState();
      editedState.fetchingImportHistory = true;
      break;
    case actionTypes.FETCH_SUCCESS_IMPORT_HISTORY:
      editedState = duplicateState();
      editedState.importHistoryList = action.importHistoryList;
      editedState.fetchingImportHistory = false;
      break;
    case actionTypes.FETCH_FAILED_IMPORT_HISTORY:
      editedState = duplicateState();
      editedState.fetchingImportHistory = false;
      break;
    case actionTypes.RESET_IMPORT_PROGRESS:
      editedState = duplicateState();
      editedState.recipientPercentage = 0;
      editedState.formPercentage = 0;
      editedState.recipientWaiting = true;
      editedState.formWaiting = true;
      editedState.recipientsAccepted = 0;
      editedState.recipientsRejected = 0;
      editedState.recipientsErrors = 0;
      editedState.recipientsWarnings = 0;
      editedState.formsAccepted = 0;
      editedState.formsRejected = 0;
      editedState.formsErrors = 0;
      editedState.formsWarnings = 0;
      editedState.statsRowsPerMinute = 0;
      editedState.statsRowsComplete = 0;
      editedState.statsTimeToComplete = '';
      break;
    case actionTypes.FETCH_IMPORT_PROGRESS_SUCCESS:
      editedState = duplicateState();
      editedState.recipientPercentage = action.progress.recipient.percentage;
      editedState.formPercentage = action.progress.form.percentage;
      editedState.recipientWaiting = action.progress.recipient.waiting;
      editedState.formWaiting = action.progress.form.waiting;
      editedState.recipientsAccepted = action.progress.recipient.accepted;
      editedState.recipientsRejected = action.progress.recipient.rejected;
      editedState.recipientsErrors = action.progress.recipient.errors;
      editedState.recipientsWarnings = action.progress.recipient.warnings;
      editedState.formsAccepted = action.progress.form.accepted;
      editedState.formsRejected = action.progress.form.rejected;
      editedState.formsErrors = action.progress.form.errors;
      editedState.formsWarnings = action.progress.form.warnings;
      editedState.statsRowsPerMinute = action.progress.stats.rowsPerMinute;
      editedState.statsRowsComplete = action.progress.stats.rowsComplete;
      editedState.statsTimeToComplete = action.progress.stats.timeToComplete;
      break;
    case actionTypes.FETCH_IMPORT_ERROR_SUMMARY_SUCCESS:
      editedState = duplicateState();
      editedState.importErrorSummary = action.importErrorSummary;
      break;
    case actionTypes.GENERATE_IMPORT_ERROR_DETAILS_SUCCESS:
      editedState = duplicateState();
      editedState.importErrorDetails = action.importErrorDetails;
      break;
    case actionTypes.FETCH_IMPORT_ERROR_DETAILS_BY_PAGE_SUCCESS:
      editedState = duplicateState();
      editedState.importErrorDetails = action.importErrorDetails;
      break;
    default:
      return state;
  }
  return editedState;
}
