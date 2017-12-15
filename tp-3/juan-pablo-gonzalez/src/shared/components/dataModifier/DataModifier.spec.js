import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DataModifier from './DataModifier';
import TinMask from './components/tinMask/TinMask';

const defaultProps = {
  modifierType: 'TinMask',
  records: {
    TIN: '123456789',
    TINTYPE: '1'
  }
};

const renderComponent = (conf) => {
  const props = Object.assign({}, defaultProps, conf);
  return shallow(<DataModifier modifierType={ props.modifierType } records={ props.records } />);
};

describe('DataModifier >', () => {
  it('Should apply TinMask component >', () => {
    const component = renderComponent();
    expect(component.find(TinMask).length).to.equal(1);
  });
});
