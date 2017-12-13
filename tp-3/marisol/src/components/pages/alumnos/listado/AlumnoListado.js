
import React from 'react';
import { NavLink } from 'react-router-dom';
import GralTable from '../../../gral-components/GralTable.js';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AlumnoListado extends React.Component {
  
  render() {
    let alumnoColumn = [
      {
        header: 'Nombre',
        name: 'nombre',
      },
      {
        header: 'DNI',
        name: 'DNI',
      },     
      {
        header: 'Fec. Nac.',
        name: 'fecNac',
      },
      {
        header: 'Dirección',
        name: 'dir',
      },
      {
        header: 'Estado',
        name: 'estado',
      },
    ];
    
    return(
      <div>
        <h2>Listado de Alumnos</h2> 
        <NavLink to="/alumnos/form">Nuevo Alumno</NavLink> 
        <GralTable data = {this.props.alumnos} column = {alumnoColumn} /> 
      </div>           
    );
  }
    
};

export default AlumnoListado;



