import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'fusionui-shared-components-react';
import Dropzone from 'react-dropzone';
import uploadImg from './assets/img/uploadImg.png';
import DragAndDropListItem from './components/dragAndDropListItem/DragAndDropListItem';
import './fileDrop.scss';


const mockedMapsList = [{ name: 'MAP1' }, { name: 'MAP2' }, { name: 'MAP3' }, { name: 'MAP4' }, { name: 'MAP5' }, { name: 'MAP6' }];
const sizeLimit = 209715200; // 209715200 bytes = 200 MB

class FileDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropzoneActive: false,
      allFilesSize: 0,
      sizeLimitReached: false
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.sizeLimitReached !== nextState.sizeLimitReached) {
      this.props.handleUploadBtbAble(nextState.sizeLimitReached);
    }
  }

  onOpenClick = () => {
    this.dropzone.open();
  };

  onDragEnter = () => {
    this.setState(Object.assign({}, this.state, { dropzoneActive: true }));
  };

  onDragLeave = () => {
    this.setState(Object.assign({}, this.state, { dropzoneActive: false }));
  };

  getIcons = () => (
    <img
      alt="uploadImg"
      className="dragDrop__description__icon"
      src={ uploadImg }
    />
  );

  getMimeType = (type) => {
    switch (type) {
      case 'PDF':
        return 'application/pdf';
      case 'PNG':
        return 'image/png';
      case 'JPG':
        return 'image/jpeg';
      case 'EXCEL':
        return 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case 'DOC':
        return 'application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case 'TEXT':
        return 'text/*';
      case 'APPLICATION':
        return 'application/*';
      case 'IMAGE':
        return 'image/*';
      case 'ZIP':
        // return 'application/zip'; this return value is commented because the browsers can't determine if a file is zip, so it will fail, will do the check on the onDrop method
        return '';
      case 'TIFF':
        return 'image/tiff';

      default:
        return 'application/*';
    }
  };

  getAcceptedFileTypes = () => {
    const acceptedTypes = this.props.acceptedTypes;
    let types = '';

    switch (typeof (acceptedTypes)) {
      case 'string':
        return this.getMimeType(acceptedTypes.toUpperCase());
      case 'undefined':
        return '';
      default:
        if (Array.isArray(acceptedTypes)) {
          acceptedTypes.map((type, index, acceptedTypesArray) => { // eslint-disable-line array-callback-return
            types += this.getMimeType(type.toUpperCase());
            if (index !== acceptedTypesArray.length - 1) {
              types += ' ,';
            }
            return index;
          });
        } else {
          console.error('Expected acceptedTypes to be either a string or array. Received type: ', typeof (acceptedTypes));
        }
        return types;
    }
  };

  handleSelectChange = (event, index, value, fileToUpdate) => {
    const newAcceptedFiles = Object.assign([], this.props.acceptedFiles);
    newAcceptedFiles.map((file) => {
      if (file.name === fileToUpdate.name) {
        file.map = value;
      }
      return null;
    });
    this.props.handleFilesList(newAcceptedFiles, this.props.rejectedFiles);
  };

  discardFile = (file) => {
    let newAcceptedFiles = Object.assign([], this.props.acceptedFiles);
    newAcceptedFiles = newAcceptedFiles.filter(fileToCompare => (fileToCompare.name !== file.name));
    const newSize = this.state.allFilesSize - file.size;
    this.props.onUpdateAllFilesSize(newSize);
    const limitReached = newSize > sizeLimit;
    this.setState(Object.assign({}, this.state, { allFilesSize: newSize, sizeLimitReached: limitReached }));
    this.props.handleFilesList(newAcceptedFiles, this.props.rejectedFiles);
  };

  checkSingleFileAllow = (filesArray, file, state) => {
    let permittedFlag = true;
    if (file.name) {
      file.name.split('.').map((pathPart) => {
        if (['LNK', 'LINK', 'EXE', 'DLL'].indexOf(pathPart.toUpperCase()) >= 0) {
          permittedFlag = false;
        }
        return '';
      });
      filesArray.map((storedFile) => {
        if (storedFile.name === file.name) {
          permittedFlag = false;
        }
        return '';
      });
    } else {
      permittedFlag = false;
    }
    if (permittedFlag) {
      state.allFilesSize += file.size;
      this.props.onUpdateAllFilesSize(state.allFilesSize);
      state.sizeLimitReached = state.allFilesSize > sizeLimit;
    }
    return [permittedFlag, state];
  };

  isFileMapable = (fileName) => {
    const acceptedExtensions = ['XLS', 'XLSX', 'CSV', 'TXT', 'DAT'];
    const fileExtension = fileName.split('.').pop();
    return (acceptedExtensions.indexOf(fileExtension.toUpperCase()) >= 0);
  };

  checkCustomFilesAllow = (filesArray) => {
    let allFlagsInOne = true;
    let editedState = Object.assign({}, this.state);
    const permittedFlagArray = [];
    const acceptedFiles = [];
    const rejectedFiles = [];
    const newAcceptedFiles = Object.assign([], this.props.acceptedFiles);
    const newRejectedFiles = Object.assign([], this.props.rejectedFiles);
    if (filesArray.length < 1) {
      permittedFlagArray.push(false);
    }
    filesArray.map((file) => {
      const singleCheck = this.checkSingleFileAllow(newAcceptedFiles, file, editedState);
      const allowedFile = singleCheck[0];
      editedState = singleCheck[1];
      file.map = null;
      file.mapable = this.isFileMapable(file.name);
      if (allowedFile) {
        acceptedFiles.push(file);
      } else {
        rejectedFiles.push(file);
      }
      allFlagsInOne = allFlagsInOne && allowedFile;
      return null;
    });
    newAcceptedFiles.push(...acceptedFiles);
    newRejectedFiles.push(...rejectedFiles);
    this.props.handleFilesList(newAcceptedFiles, newRejectedFiles);
    this.setState(editedState);
    return allFlagsInOne;
  };

  customOnDrop = (acceptedFiles, rejectedFiles) => {
    const allFiles = [...acceptedFiles, ...rejectedFiles];
    this.checkCustomFilesAllow(allFiles);
  };

  renderFilledDropZone = () => (
    <div className="dragDrop__description--small">
      <div className="dragDrop__description__content">
        <div className="dragDrop__description__itemLeft--small">
          {this.getIcons()}
        </div>
        <div className="dragDrop__description__label--small">
          Drop another file
        </div>
        <div className="dragDrop__description__button--small">
          <button onClick={ this.onOpenClick } >CHOOSE FILE</button>
        </div>
      </div>
      <div className="dragDrop__description__label--textError">
        { this.state.sizeLimitReached && // in this moment this is the only error we support, when we support more error types, we should move this to a function
          <p>The selected files exceed your total limit. We’re uploading as many files as we can.<br />Please remove some files from the list to make more room.</p>
        }
      </div>
    </div>
  );

  renderEmptyDropZone = () => (
    <div className="dragDrop__description">
      <div>
        {this.getIcons()}
      </div>
      <div className="dragDrop__description__label--textHighlighted">
        Drag & Drop File(s)
      </div>
      <div className={ this.state.sizeLimitReached ? 'dragDrop__description__button--error' : 'dragDrop__description__button--big' }>
        <button onClick={ this.onOpenClick } >CHOOSE FILE(S)</button>
      </div>
    </div>
  );

  renderFilesList = () => (
    <div>
      {this.props.message.map((message, index) =>
        <div key={ index }>{ message }</div> // eslint-disable-line react/no-array-index-key
      )}
      <div>
        <div className="dragDrop__listHeader">
          <div>File</div>
          <div>Optional</div>
        </div>
        <List className={ this.state.sizeLimitReached ? 'dragDrop__list dragDrop__list--error' : 'dragDrop__list' }>
          {
            this.props.acceptedFiles.map(file => (
              <DragAndDropListItem
                file={ file }
                handleSelectChange={ this.handleSelectChange }
                discardFile={ this.discardFile }
                mapsList={ mockedMapsList }
                key={ file.name }
              />
              )
            )
          }
        </List>
      </div>
    </div>
  );


  render() {
    const filesLoaded = this.props.acceptedFiles.length > 0;
    const activeStyle = {
      border: '1px solid',
      borderColor: this.props.style.acceptedBorderColor
    };
    const rejectStyle = {
      border: '1px solid',
      borderColor: this.props.style.rejectedBorderColor
    };
    let componentHeight = '';
    if (filesLoaded) {
      componentHeight = this.state.sizeLimitReached ? '130px' : '80px';
    } else {
      componentHeight = this.props.style.height;
    }
    const style = {
      width: this.props.style.width,
      height: componentHeight,
      border: 'dashed 2px lightgray',
      borderRadius: '14px'
    };

    const multiple = this.props.multiple || false;
    const accept = this.getAcceptedFileTypes();
    return (
      <div>
        <Dropzone
          style={ style }
          className="dragDrop"
          activeStyle={ activeStyle }
          rejectStyle={ rejectStyle }
          disableClick
          ref={ (node) => { this.dropzone = node; } }
          onDrop={ this.customOnDrop }
          onDropAccepted={ this.props.onDropAccepted() }
          onDropRejected={ this.props.onDropRejected() }
          onDragEnter={ this.onDragEnter }
          onDragLeave={ this.onDragLeave }
          multiple={ multiple }
          accept={ accept }
        >
          {filesLoaded ? this.renderFilledDropZone() : this.renderEmptyDropZone()}
        </Dropzone>
        <div>
          {filesLoaded ? this.renderFilesList() : ''}
        </div>
      </div>
    );
  }
}

FileDrop.propTypes = {
  acceptedTypes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  message: PropTypes.arrayOf(PropTypes.string),
  multiple: PropTypes.bool,
  style: PropTypes.shape({
    acceptedBorderColor: PropTypes.string,
    rejectedBorderColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  onDropRejected: PropTypes.func,
  onDropAccepted: PropTypes.func,
  acceptedFiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  rejectedFiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleFilesList: PropTypes.func.isRequired,
  handleUploadBtbAble: PropTypes.func.isRequired,
  onUpdateAllFilesSize: PropTypes.func
};

FileDrop.defaultProps = {
  multiple: false,
  message: [],
  acceptedTypes: undefined,
  style: {
    acceptedBorderColor: '#369D43',
    rejectedBorderColor: '#f93f3f',
    width: '640',
    height: '335',
  },
  onDropRejected: () => (null),
  onDropAccepted: () => (null),
  onUpdateAllFilesSize: () => (null)
};

export default FileDrop;
