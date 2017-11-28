import React from 'react';
import {
  /*Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,*/
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AlumnoListado = (props) => {
  return (
    <div>
      <h2>Listado de Alumno </h2>
      {props.alumnos.map(item =>
        <MuiThemeProvider>
          <TableRow>
            <TableRowColumn>{item.apellido}</TableRowColumn>
            <TableRowColumn>{item.nombre}</TableRowColumn>
            <TableRowColumn>{item.dni}</TableRowColumn>
            <TableRowColumn>{item.direccion}</TableRowColumn>
            <TableRowColumn>{item.fechaNac}</TableRowColumn>
            <TableRowColumn>{item.estado}</TableRowColumn>
          </TableRow>
        </MuiThemeProvider>
      )}
    </div>
  );
};

export default AlumnoListado;
