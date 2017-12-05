import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const AlumnoListado =(props) => {
  return (
    <div>
      <h2>Listado de Alumno</h2>
      <FloatingActionButton mini={true} href={"/alumnos/form"} >
        +
      </FloatingActionButton>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Apellido</TableHeaderColumn>
            <TableHeaderColumn>Nombre</TableHeaderColumn>
            <TableHeaderColumn>DNI</TableHeaderColumn>
            <TableHeaderColumn>Fecha Nac</TableHeaderColumn>
            <TableHeaderColumn>Estado</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.alumnos.map(item =>
            <TableRow>
              <TableRowColumn>{item.apellido}</TableRowColumn>
              <TableRowColumn>{item.nombre}</TableRowColumn>
              <TableRowColumn>{item.dni}</TableRowColumn>
              <TableRowColumn>{item.fechaNac}</TableRowColumn>
              <TableRowColumn>{item.estado}</TableRowColumn>
            </TableRow>
          )};
        </TableBody>
      </Table>
    </div>
  );
}

export default AlumnoListado;
