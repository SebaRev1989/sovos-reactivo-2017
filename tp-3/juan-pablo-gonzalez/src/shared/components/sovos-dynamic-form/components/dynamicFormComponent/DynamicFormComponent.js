import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'fusionui-shared-components-react';
import FormFieldContainer from '../formField/FormFieldContainer';

const DynamicFormComponent = (props) => {
  const formColumns = ['panels', 'fields'];
  const formContainers = ['rows', 'tabs'];
  const columnParent = { allowedChilds: formColumns };
  const containerParent = { allowedChilds: formContainers };

  const getChildrenClassName = (content, childrenElementName) => {
    let className = `sovos-dynamic-form__${childrenElementName}`;
    className += formColumns.includes(childrenElementName) ? ` xs-${content.width || 12} xs-offset-${content.offset || 0}` : '';
    return className;
  };


  const components = {
    root: containerParent,
    rows: columnParent,
    panels: containerParent,
    tabs: containerParent,
    fields: {
      render: FormFieldContainer,
      allowedChilds: []
    }
  };
  const childrenElementName = Object.keys(props.content).find(element => Object.keys(components).includes(element));

  const createChildren = content => createElement(components[childrenElementName].render || DynamicFormComponent, {
    content,
    type: childrenElementName
  });

  const createChildrenContainer = content => content.map((childrenContent, index) => createElement(
    childrenElementName === 'tabs' ? Tab : 'div',
    {
      label: childrenContent.title,
      className: getChildrenClassName(childrenContent, childrenElementName),
      key: childrenContent.key || index
    },
    createChildren(childrenContent)
  ));

  return (
    <div className="sovos-dynamic-form__dynamic-form-component">
      { props.content.title && <h5>{ props.content.title }</h5> }
      {
        (components[props.type].allowedChilds.indexOf(childrenElementName) >= 0) &&
        (childrenElementName === 'tabs') ?
        (
          <Tabs> { createChildrenContainer(props.content[childrenElementName]) } </Tabs>
        ) : createChildrenContainer(props.content[childrenElementName])
      }
    </div>
  );
};

DynamicFormComponent.propTypes = {
  content: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default DynamicFormComponent;
