
import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { NavLink } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
 
//iterar el array de datos con cada una de sus propiedades/columnas
const row = (x,i,column) =>
  <TableRow key={i}>
    {
      column.map((y,j) => ( 
        <TableRowColumn key={j}>{x[y.name]}</TableRowColumn>
      ))                  
    }
  </TableRow >; 

const GralTable = (props) =>{
  return(    
    <Table>
      <TableHeader>  
        <TableRow>
          {
            props.column.map((x,i) =>
            <TableHeaderColumn key = {i}>{x.header}</TableHeaderColumn>
          )}
        </TableRow>           
      </TableHeader>
      <TableBody>            
        {props.data.map((x,i) => row(x,i,props.column)
        )} 
      </TableBody>
    </Table>
  );
    
};


export default GralTable;



