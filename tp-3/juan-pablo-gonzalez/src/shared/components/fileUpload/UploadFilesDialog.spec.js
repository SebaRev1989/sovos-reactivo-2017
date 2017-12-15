import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import { Dialog } from 'fusionui-shared-components-react';
import FileDrop from './components/fileDrop/FileDrop';
import UploadFilesDialog from './UploadFilesDialog';

function setup(open, onClose, message) {
  return shallow(<UploadFilesDialog open={ open } onClose={ onClose } message={ message } onUploadedSuccess={ () => { } } />);
}

describe('UploadFilesDialog Suite', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup(
      false,
      () => {},
      ['']
    );
  });
  it('Should have Dialog component', () => {
    expect(wrapper.find(Dialog).exists()).to.be.true;
  });

  it('Should have FileDrop component', () => {
    expect(wrapper.find(FileDrop).exists()).to.be.true;
  });
});
