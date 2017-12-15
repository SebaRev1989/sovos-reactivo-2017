import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  IconButton
} from 'fusionui-shared-components-react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ActionSearch from 'material-ui/svg-icons/action/search'; // eslint-disable-line import/no-extraneous-dependencies
import ContentClear from 'material-ui/svg-icons/content/clear'; // eslint-disable-line import/no-extraneous-dependencies
import { black } from 'material-ui/styles/colors'; // eslint-disable-line import/no-extraneous-dependencies
import './search.scss';

const rootStyle = {
  color: black,
  borderColor: black
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusSearch: false
    };
  }

  componentWillUpdate(nextProps) {
    if (nextProps.reset) {
      if (!nextProps.onResetSuccess !== undefined) {
        this.setState({ statusSearch: false });
        this.props.onResetSuccess();
      }
    }
  }

  openCloseSearch = (status) => {
    this.setState({ statusSearch: status });
    if (!status) {
      this.props.onSearch('');
    }
  }

  handleOnChange = (event) => {
    const value = event.target.value;
    setTimeout(() => {
      if (value.length >= 3 || value === '') {
        this.props.onSearch(value);
      }
    }, 200);
  }

  render() {
    if (this.props.color !== '') {
      rootStyle.color = this.props.color;
      rootStyle.borderColor = this.props.color;
    } else {
      rootStyle.color = black;
      rootStyle.borderColor = black;
    }
    return (
      <div className="search" style={ this.props.style }>
        <IconButton onTouchTap={ () => this.openCloseSearch(true) }>
          <ActionSearch color={ rootStyle.color } style={ { height: 20, width: 20, paddingRigth: 5 } } />
        </IconButton>
        <CSSTransitionGroup
          transitionName="search_text"
          transitionEnterTimeout={ 500 }
          transitionLeaveTimeout={ 300 }
        >
          { (this.state.statusSearch || this.props.open) &&
          <div className="search_text">
            <TextField
              autoFocus
              style={ { marginLeft: 3, fontSize: 13 } }
              inputStyle={ rootStyle }
              hintText="Search"
              underlineFocusStyle={ rootStyle }
              underlineStyle={ rootStyle }
              hintStyle={ rootStyle }
              onChange={ this.handleOnChange }
            />
            { !this.props.open && <IconButton onTouchTap={ () => this.openCloseSearch(false) }>
              <ContentClear color={ rootStyle.color } style={ { height: 20, width: 20 } } />
            </IconButton> }
          </div>}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  reset: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  onResetSuccess: PropTypes.func
};

Search.defaultProps = {
  color: '',
  style: {},
  open: false,
  reset: false,
  onResetSuccess: undefined
};

export default Search;
