import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  FlatButton,
  IconButton
} from 'fusionui-shared-components-react';
import ContentClear from 'material-ui/svg-icons/content/clear'; //eslint-disable-line
import FileDrop from './components/fileDrop/FileDrop';
import UploadFilesProgress from './components/uploadFilesProgess/UploadFilesProgress';
import AuthenticationHelper from '../../../shared/helpers/authenticationHelper';

class UploadFilesDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedFiles: [],
      rejectedFiles: [],
      sizeLimitReached: false,
      renderStep: 'upload',
      dialogTitle: 'Add a file from your computer',
      titleStyle: { backgroundColor: '#EEE' },
      formData: {}
    };
    this.fileUploadHeaders = [
      ['Authorization', `Bearer ${AuthenticationHelper.getJwtToken()}`]
    ];
    this.fileNames = '?';
    this.handleUploadClick = this.handleUploadClick.bind(this);
  }

  handleUploadBtbAble = (able) => {
    this.setState(Object.assign({}, this.state, { sizeLimitReached: able }));
  };

  generateFileNamesString = files => files.map(file => `fn=${file.name}`).join('&');

  handleUploadClick = () => {
    const files = this.state.acceptedFiles;

    const newState = Object.assign({}, this.state);
    newState.renderStep = 'progress';
    newState.dialogTitle = null;
    newState.titleStyle = '';

    newState.formData = new FormData();
    this.fileNames += this.generateFileNamesString(files);
    files.forEach((file) => {
      newState.formData.append(file.name, file);
    });
    if (this.props.folder !== '') {
      newState.formData.append('path', this.props.folder);
    }
    this.setState(newState);
  };

  handleFilesList = (newAcceptedFiles, newRejectedFiles) => {
    const newState = Object.assign({}, this.state);
    newState.acceptedFiles = newAcceptedFiles;
    newState.rejectedFiles = newRejectedFiles;
    this.setState(newState);
  };

  handleDialogClose = () => {
    const newState = Object.assign({}, this.state);
    newState.acceptedFiles = [];
    newState.rejectedFiles = [];
    newState.renderStep = 'upload';
    this.setState(newState);
    this.props.onClose();
  };

  handleFileUploadComplete = () => {
    this.props.onUploadedSuccess();
    this.handleDialogClose();
  };

  render() {
    const haveFiles = this.state.acceptedFiles.length > 0;
    const bodyStyle = { paddingTop: '24px' };
    const style = {
      acceptedBorderColor: 'blue',
      rejectedBorderColor: 'red',
      width: '100%',
      height: '400px'
    };
    const progressContainerStyle = {
      display: 'flex',
      flexDirection: 'column'
    };
    const cancelLabelWithFilesStyle = { color: 'grey' };
    const { open, messages } = this.props;

    return (
      <Dialog
        className="dragAndDropModal"
        title={ this.state.dialogTitle }
        modal
        titleStyle={ this.state.titleStyle }
        bodyStyle={ bodyStyle }
        open={ open }
        actions={
          this.state.renderStep === 'upload' &&
          <div>
            <FlatButton
              id="Cancel"
              label="Cancel"
              secondary
              onTouchTap={ this.handleDialogClose }
              labelStyle={ haveFiles ? cancelLabelWithFilesStyle : '' }
            />
            {haveFiles &&
            <FlatButton
              id="Upload"
              label="Upload"
              secondary
              disabled={ this.state.sizeLimitReached }
              onTouchTap={ this.handleUploadClick }
            />}
          </div>
        }
      >
        <div className="dragAndDropModal__container">
          {
            this.state.renderStep === 'upload' &&
              <FileDrop
                style={ style }
                multiple
                handleUploadBtbAble={ this.handleUploadBtbAble }
                acceptedFiles={ this.state.acceptedFiles }
                rejectedFiles={ this.state.rejectedFiles }
                handleFilesList={ this.handleFilesList }
                message={ messages }
              />
          }
          {
            this.state.renderStep === 'progress' &&
            <div id="progress-container" style={ progressContainerStyle }>
              <div style={ { display: 'flex', justifyContent: 'flex-end' } }>
                <IconButton onClick={ this.handleDialogClose } style={ { padding: 0, width: 24, height: 24 } }>
                  <ContentClear />
                </IconButton>
              </div>
              <UploadFilesProgress
                headers={ this.fileUploadHeaders }
                url={ `/api/files${this.fileNames}` }
                formData={ this.state.formData }
                message="We&apos;re processing your files. You can stay on this page until it finishes, or leave and check the imports page for results later"
                onComplete={ this.handleFileUploadComplete }
              />
            </div>
          }
        </div>
      </Dialog>
    );
  }
}

UploadFilesDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  messages: PropTypes.arrayOf(PropTypes.string),
  folder: PropTypes.string,
  onUploadedSuccess: PropTypes.func.isRequired,
};

UploadFilesDialog.defaultProps = {
  open: false,
  messages: [''],
  folder: ''
};

export default UploadFilesDialog;
