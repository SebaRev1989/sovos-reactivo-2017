import React, { Component } from 'react';
import PropTypes from 'prop-types';

const constants = {
  tinType: 'TINTYPE',
  typeStrings: {
    0: 'UNK',
    1: 'EIN',
    2: 'SSN'
  }
};

class TinType extends Component {
  findTinTypeString = tinType => (
    constants.typeStrings[tinType] ? constants.typeStrings[tinType] : constants.typeStrings['0']
  )

  render() {
    const tinType = this.props.records[constants.tinType];
    const tinTypeString = this.findTinTypeString(tinType);

    return (
      <span>{ tinTypeString }</span>
    );
  }
}

TinType.propTypes = {
  records: PropTypes.object.isRequired
};

export default TinType;
