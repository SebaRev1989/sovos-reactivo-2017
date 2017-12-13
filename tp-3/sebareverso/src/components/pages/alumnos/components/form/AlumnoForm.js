import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../../../../app.scss';

class AlumnoForm extends React.Component {
  constructor(){
    super();
    this.alumno = {
      apellido: "",
      nombre: "",
      dni: "",
      fechaNac: "",
      estado: ""
    };
  }

  componentDidUpdate(){
    this.alumno = {};
  }

  handleApellidoChange =(evt)=>{
    this.alumno.apellido = evt.target.value;
  }

  handleNombreChange =(evt)=>{
    this.alumno.nombre = evt.target.value;
  }

  handleDniChange =(evt)=>{
    this.alumno.dni = evt.target.value;
  }

  handleFechaNacChange =(evt)=>{
    this.alumno.fechaNac = evt.target.value;
  }

  handleEstadoChange =(evt)=>{
    this.alumno.estado = evt.target.value;
  }

  handleSaveClick =()=>{
    this.props.onNewAlumno(this.alumno);
    this.alumno={};
  }

  render() {
    return (
      <div>
        <Paper zDepth={2} className="paperStyle" id={"alumno-form"}>
          <br/>
          <h2 className="alt-header">Formulario Alumno </h2>
          <br/>
          <TextField floatingLabelText={"Apellido"} onChange={this.handleApellidoChange}/><br/>
          <TextField floatingLabelText={"Nombre"} onChange={this.handleNombreChange}/><br/>
          <TextField floatingLabelText={"DNI"} onChange={this.handleDniChange}/><br/>
          <TextField floatingLabelText={"Fecha de Nacimiento"} onChange={this.handleFechaNacChange}/><br/>
          <TextField floatingLabelText={"Estado"} onChange={this.handleEstadoChange}/><br/><br/>
          <RaisedButton label={"Guardar"} primary={true} className="buttonStyle" onClick={this.handleSaveClick}/>
          <br/>
        </Paper>
      </div>
    );
  }
}

export default AlumnoForm;
