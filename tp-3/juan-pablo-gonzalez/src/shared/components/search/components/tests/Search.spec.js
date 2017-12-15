import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Search from '../Search';

function setup() {
  return shallow(<Search onSearch={ () => {} } />);
}

describe('Search Suite', () => {
  it('Should have CSSTransitionGroup component', () => {
    const wrapper = setup();
    expect(wrapper.find(CSSTransitionGroup).length).to.eql(1);
  });
  it('statusSearch should be false', () => {
    const wrapper = setup();
    expect(wrapper.state().statusSearch).to.be.false;
  });
});
