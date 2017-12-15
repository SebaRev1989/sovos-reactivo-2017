import React from 'react';
import PropTypes from 'prop-types';
import TinMask from './components/tinMask/TinMask';
import TinType from './components/tinType/TinType';

const type = {
  TINMASK: TinMask,
  TINTYPE: TinType
};

const DataModifier = props => (
  React.createElement(type[props.modifierType.toUpperCase()],
    {
      records: props.records
    })
);

DataModifier.propTypes = {
  modifierType: PropTypes.string.isRequired,
  records: PropTypes.object.isRequired
};

export default DataModifier;
