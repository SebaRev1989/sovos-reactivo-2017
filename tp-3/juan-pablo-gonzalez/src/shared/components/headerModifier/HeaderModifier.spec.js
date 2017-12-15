import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import HeaderModifier from './HeaderModifier';
import TinFixedWidth from './components/tinFixedWidth/TinFixedWidth';

const defaultProps = {
  modifierType: 'TinFixedWidth',
  label: 'TIN',
  index: '1'
};

const renderComponent = (conf) => {
  const props = Object.assign({}, defaultProps, conf);
  return shallow(<HeaderModifier modifierType={ props.modifierType } label={ props.label } index={ props.index } />);
};

describe('HeaderModifier >', () => {
  it('Should apply TinFixedWidth component >', () => {
    const component = renderComponent();
    expect(component.find(TinFixedWidth).length).to.equal(1);
  });
});
