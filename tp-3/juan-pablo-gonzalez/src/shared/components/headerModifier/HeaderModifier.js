import React from 'react';
import PropTypes from 'prop-types';
import TinFixedWidth from './components/tinFixedWidth/TinFixedWidth';

const type = {
  TINFIXEDWIDTH: TinFixedWidth
};

const HeaderModifier = props => (
  React.createElement(type[props.modifierType.toUpperCase()],
    {
      label: props.label
    })
);

HeaderModifier.propTypes = {
  modifierType: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default HeaderModifier;
