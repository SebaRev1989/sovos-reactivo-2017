import React from 'react';
import './alumnoForm.scss';


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
      <div>
        <h2 className="alumnoForm">Nuevo Alumno</h2>
        <div className="alumnoForm">Agregar alumno</div>
          <form className="alumnoForm" id="alumno-form">
              <label>Nombre</label>
              <input type="text" onChange={this.handleNombreChange} />
              <label>Dni</label>
              <input type="text" onChange={this.handleDniChange} />
              <label>Fecha de Nacimiento</label>
              <input type="text" onChange={this.handleFechanacChange} />
              <label>Direccion</label>
              <input type="text" onChange={this.handleDireccionChange} />
              <label>Estado</label>
              <input type="text" onChange={this.handleEstadoChange} />
              <input type="button" value="Guardar" onClick={this.handleSaveClick} />
          </form>
      </div>
    );
  }
};

export default AlumnoForm;
