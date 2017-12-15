import React from 'react';
import PropTypes from 'prop-types';

const OptionsSlidePanelHeader = ({ title }) => (
  <div className="options-slide-panel__header">
    <h2>{ title }</h2>
  </div>
);

OptionsSlidePanelHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default OptionsSlidePanelHeader;
