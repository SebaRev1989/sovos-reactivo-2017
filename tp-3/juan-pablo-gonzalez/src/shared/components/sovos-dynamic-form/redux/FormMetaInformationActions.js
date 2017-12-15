import actionTypes from './FormMetaInformationConstants';
import request from '../../../../shared/helpers/request';

const fetchMetadataSuccess = (metadata, fchar) => ({ type: actionTypes.FETCH_METADATA_SUCCESS, metadata, fchar });
const fetchingMetadata = () => ({ type: actionTypes.FETCHING_METADATA });

const fetchTableOptionsSuccess = (tableOptions, fchar) => ({ type: actionTypes.FETCH_TABLE_OPTIONS_SUCCESS, tableOptions, fchar });
const fetchingTableOptions = () => ({ type: actionTypes.FETCHING_TABLE_OPTIONS });

const fetchMetadata = fchar => (dispatch) => {
  const path = `/form-metadata?id=${fchar}`;
  dispatch(fetchingMetadata());
  request.get(path, dispatch)
    .then(response => dispatch(fetchMetadataSuccess(response.data.data, fchar)))
    .catch((error) => {
      throw error;
    });
};

const fetchTableOptions = fchar => (dispatch) => {
  const path = `/form-fields/search-config?id=${fchar}`;
  dispatch(fetchingTableOptions());
  request.get(path, dispatch)
    .then(tableOptions => dispatch(fetchTableOptionsSuccess(tableOptions.data.data, fchar)))
    .catch((error) => {
      throw error;
    });
};

const resetTableOptions = fchar => ({ type: actionTypes.RESET_TABLE_OPTIONS, fchar });

export {
  fetchMetadata,
  fetchTableOptions,
  resetTableOptions
};
