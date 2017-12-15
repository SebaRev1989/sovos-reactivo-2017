import sharedActions from '../../shared/constants/SharedConstants';

const actionTypes = {
  ...sharedActions,
  OPEN_LAYER_SUCCESS: 'OPEN_LAYER_SUCCESS',
  CLOSE_LAYER_SUCCESS: 'CLOSE_LAYER_SUCCESS'
};

const sources = {
  SEARCH_BAR: 'SEARCH_BAR',
  SIDE_BAR: 'SIDE_BAR',
  OPTIONS_SLIDE_PANEL: 'OPTIONS_SLIDE_PANEL'
};

export {
  actionTypes,
  sources
};

