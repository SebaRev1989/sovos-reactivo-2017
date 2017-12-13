import React from 'react';
import './alumnoForm.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  errorStyle: {
    color: '#283593',
  },
  underlineStyle: {
    borderColor: '#283593',
  },
  floatingLabelStyle: {
    color: '#283593',
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  buttonStyle: {
    margin: 12,
  }
};

class AlumnoForm extends React.Component{
  constructor(){
      super();
      this.alumno = {
          nombre: "",
          dni: "",
          direccion: "",
          fechanac: "",
          estado:   ""
      };
  }
  compomentDidUpdate(){
      this.alumno = {};
  }
  handleNombreChange =(evt)=>{
      this.alumno.nombre = evt.target.value;
  }
  handleDniChange =(evt)=>{
      this.alumno.dni = evt.target.value;
  }
  handleDireccionChange =(evt)=>{
      this.alumno.direccion = evt.target.value;
  }
  handleFechanacChange =(evt)=>{
    this.alumno.fechanac = evt.target.value;
  }
  handleEstadoChange =(evt)=>{
    this.alumno.estado = evt.target.value;
  }
  handleSaveClick =(evt)=>{
      console.log(this.alumno);
      this.props.onNewAlumno(this.alumno);
      document.getElementById("alumno-form").reset();
      this.alumno={};
  }

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <h2 className="alumnoForm">Nuevo Alumno</h2>
          <form className="alumnoForm" id="alumno-form">
            <TextField
              floatingLabelText="Nombre"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.handleNombreChange}
            /><br/>
            <TextField
              floatingLabelText="DNI"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.handleDniChange}
            /><br/>
            <TextField
              floatingLabelText="Fecha de Nacimiento"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.handleFechanacChange}
            /><br/>
            <TextField
              floatingLabelText="Direccion"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.handleDireccionChange}
            /><br/>
            <TextField
              floatingLabelText="Estado"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              onChange={this.handleEstadoChange}
            /><br/><br/>
            <RaisedButton label="Guardar" style={styles.buttonStyle} onClick={this.handleSaveClick} />
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default AlumnoForm;
