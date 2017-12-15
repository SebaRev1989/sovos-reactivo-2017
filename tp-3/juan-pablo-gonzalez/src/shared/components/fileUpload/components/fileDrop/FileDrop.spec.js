import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Dropzone from 'react-dropzone';
import FileDrop from './FileDrop';
import DragAndDropListItem from './components/dragAndDropListItem/DragAndDropListItem';

const requiredProps = {
  acceptedFiles: [],
  rejectedFiles: [],
  handleFilesList: () => {},
  handleUploadBtbAble: () => {}
};

const requiredCustomProps = {
  acceptedFiles: [
    {
      lastModified: 1474394603299,
      lastModifiedDate: 'MockedDate',
      map: null,
      mapable: true,
      name: 'MockedFileName',
      preview: 'MockedPreview',
      size: 66,
      type: ''
    }
  ],
  rejectedFiles: [],
  handleFilesList: () => {},
  handleUploadBtbAble: () => {}
};

function setupDefault() {
  return shallow(<FileDrop { ...requiredProps } />);
}

function setupWithFiles() {
  return shallow(<FileDrop { ...requiredCustomProps } />);
}

describe('DragAndDropComponent Suite', () => {
  it('Should have Dropzone component', () => {
    const wrapper = setupDefault();
    expect(wrapper.find(Dropzone).exists()).to.be.true;
  });

  it('Should have DragAndDropListItem component', () => {
    const wrapper = setupWithFiles();
    expect(wrapper.find(DragAndDropListItem).exists()).to.be.true;
  });

  it('Should not have DragAndDropListItem component', () => {
    const wrapper = setupDefault();
    expect(wrapper.find(DragAndDropListItem).exists()).to.be.false;
  });
});
