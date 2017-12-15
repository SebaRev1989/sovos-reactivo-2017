import React from 'react';
import PropTypes from 'prop-types';
import { uploadFile } from '../../../../helpers/fileTransferHelper';
import './uploadFilesProgress.scss';

class UploadFilesProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUploadFile: {
        progress: 0,
        total: 0
      }
    };
  }

  componentWillMount = () => {
    this.startUpload(); // eslint-disable-line no-underscore-dangle
  }

  startUpload = () => {
    uploadFile(
      this.props.formData,
      this.props.url,
      this.props.headers,
      (e) => {
        if (e.lengthComputable) {
          const currentUploadFile = this.state.currentUploadFile;
          currentUploadFile.progress = e.loaded;
          currentUploadFile.total = e.total;
          this.setState(Object.assign({}, this.state, currentUploadFile));
        }
      },
      (e) => {
        this.props.onComplete(e);
      }
    );
  };

  render() {
    return (
      <div style={ { padding: '100px' } }>
        <p>{ this.props.message }</p>
        <progress
          id="upload-progress"
          max={ this.state.currentUploadFile.total }
          value={ this.state.currentUploadFile.progress }
        />
      </div>
    );
  }
}

UploadFilesProgress.propTypes = {
  message: PropTypes.string,
  headers: PropTypes.arrayOf(PropTypes.array),
  url: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  onComplete: PropTypes.func
};

UploadFilesProgress.defaultProps = {
  message: '',
  headers: [],
  onComplete: () => {}
};

export default UploadFilesProgress;
