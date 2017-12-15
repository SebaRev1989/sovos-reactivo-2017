import sharedActions from '../../../../shared/constants/SharedConstants';

const actionTypes = {
  FETCH_METADATA_SUCCESS: 'FETCH_METADATA_SUCCESS',
  FETCHING_METADATA: 'FETCHING_METADATA',
  FETCH_TABLE_OPTIONS_SUCCESS: 'FETCH_TABLE_OPTIONS_SUCCESS',
  FETCHING_TABLE_OPTIONS: 'FETCHING_TABLE_OPTIONS',
  RESET_TABLE_OPTIONS: 'RESET_TABLE_OPTIONS'
};

export default { ...sharedActions, ...actionTypes };
