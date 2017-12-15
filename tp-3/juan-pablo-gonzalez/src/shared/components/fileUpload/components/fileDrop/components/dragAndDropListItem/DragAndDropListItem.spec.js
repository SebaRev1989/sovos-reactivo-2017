import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { ListItem, SelectField } from 'fusionui-shared-components-react';
import DragAndDropListItem from './DragAndDropListItem';

const requiredProps = {
  file: {
    lastModified: 1474394603299,
    lastModifiedDate: 'MockedDate',
    map: null,
    mapable: true,
    name: 'MockedFileName',
    preview: 'MockedPreview',
    size: 66,
    type: ''
  },
  mapsList: [{ name: 'MAP1' }, { name: 'MAP2' }, { name: 'MAP3' }, { name: 'MAP4' }, { name: 'MAP5' }, { name: 'MAP6' }],
  handleSelectChange: () => {},
  discardFile: () => {}
};

function setupDefault() {
  return shallow(<DragAndDropListItem { ...requiredProps } />);
}

function setupNotMapableFile() {
  const customProps = Object.assign({}, requiredProps);
  customProps.file.mapable = false;
  return shallow(<DragAndDropListItem { ...customProps } />);
}

describe('DragAndDropListItem Suite', () => {
  it('Should have ListItem component', () => {
    const wrapper = setupDefault();
    expect(wrapper.find(ListItem).exists()).to.be.true;
  });

  it('Should have SelectField component', () => {
    const wrapper = setupDefault();
    expect(wrapper.find(SelectField).exists()).to.be.true;
  });

  it('Should not have SelectField component', () => {
    const wrapper = setupNotMapableFile();
    expect(wrapper.find(SelectField).exists()).to.be.false;
  });
});
