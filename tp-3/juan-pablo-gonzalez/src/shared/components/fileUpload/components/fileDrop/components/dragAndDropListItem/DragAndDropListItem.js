import PropTypes from 'prop-types';
import React from 'react';
import {
  ListItem,
  IconButton,
  SelectField,
  MenuItem
} from 'fusionui-shared-components-react';
import ContentClear from 'material-ui/svg-icons/content/clear'; //eslint-disable-line

const comboBoxHeight = '40px';

const listItemStyle = {
  border: '1px solid #DBDBDB',
  color: '#75BAE7',
  margin: '1% 1% 1% 0px',
  height: '72px',
};

const iconStyle = {
  top: '0px',
  height: '38px',
  backgroundColor: '#DDDDDD',
  borderLeft: '1px solid black',
  fill: 'black',
  padding: '0px'
};

const labelStyle = {
  top: '0px',
  height: comboBoxHeight,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  left: '2%'
};

const floatingLabelStyle = {
  top: '20%',
  left: '2%'
};

const menuStyle = {
  height: '100%',
  marginTop: '0px',
  border: '1px solid black'
};

const selectStyle = {
  height: comboBoxHeight,
  top: '0px'
};

const underlineStyle = {
  bottom: '-1px'
};

const DragAndDropListItem = props => (
  <ListItem
    key={ props.file.name }
    className="dragDrop__list__listItem"
    style={ listItemStyle }
  >
    <div className="dragDrop__list__listItem__elements">
      <div className="dragDrop__list__listItem__label" id="filename">{ props.file.name }</div>
      {props.file.mapable &&
        <SelectField
          id="selectmaps"
          floatingLabelText="Select a template"
          value={ props.file.map }
          onChange={ (event, index, value) => props.handleSelectChange(event, index, value, props.file) }
          className="dragDrop__list__listItem__selectMap"
          iconStyle={ iconStyle }
          labelStyle={ labelStyle }
          floatingLabelStyle={ floatingLabelStyle }
          menuStyle={ menuStyle }
          style={ selectStyle }
          underlineStyle={ underlineStyle }
        >
          <MenuItem value={ null } primaryText="" />
          {
            props.mapsList.map(map => (
              <MenuItem value={ map.name } primaryText={ map.name } key={ map.name } />
            ))
          }
        </SelectField>
      }
      <IconButton
        className="dragDrop__list__listItem__button"
        onClick={ props.discardFile.bind(this, props.file) }
      >
        <ContentClear className="dragDrop__list__listItem__button__icon" />
      </IconButton>
    </div>
  </ListItem>
);

DragAndDropListItem.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string,
    mapable: PropTypes.bool,
    map: PropTypes.string,
  }).isRequired,
  mapsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  discardFile: PropTypes.func.isRequired,
};

export default DragAndDropListItem;
