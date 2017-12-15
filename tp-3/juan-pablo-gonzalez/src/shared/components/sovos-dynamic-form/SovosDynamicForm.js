import React from 'react';
import PropTypes from 'prop-types';
import DynamicFormComponent from './components/dynamicFormComponent/DynamicFormComponent';
import './SovosDynamicForm.scss';

const SovosDynamicForm = ({ metadata }) => (
  Object.keys(metadata).length > 0 &&
  <div className="sovos-dynamic-form">
    <DynamicFormComponent content={ metadata } type="root" />
  </div>
);

SovosDynamicForm.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default SovosDynamicForm;
