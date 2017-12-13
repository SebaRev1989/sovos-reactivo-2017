import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AlumnoForm extends React.Component {

  constructor(){
    super();
      this.state = {
        nombre : '',
        DNI: '',
        fecNac: '',
        dir: '',
        estado: '',
        editar:'',
      };
    } 

  saveClick = (evt) => {
    this.props.onSaveClick(this.state);
  } 

  change = e => {
    this.setState({[e.target.name] : e.target.value});
  }; 


  render(){

    return(       
        
      <form>  
        <TextField
          name="nombre"
          hintText="Nombre"
          floatingLabelText="Nombre"
          value={this.state.nombre}
          onChange={e=>this.change(e)}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          name="DNI"
          hintText="DNI"
          floatingLabelText="DNI"
          value={this.state.DNI}
          onChange={e=>this.change(e)}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          name="fecNac"
          hintText="Fecha de Nacimiento"
          floatingLabelText="Fecha de Nacimiento"
          value={this.state.fecNac}
          onChange={e=>this.change(e)}
          floatingLabelFixed={true}
        />
        <br />
        <TextField
          name="dir"
          hintText="Dirección"
          floatingLabelText="Dirección"
          value={this.state.dir}
          onChange={e=>this.change(e)}
          floatingLabelFixed={true}
        />
        <br />        
        <TextField
          name="estado"
          hintText="Estado"
          floatingLabelText="Estado"
          value={this.state.estado}
          onChange={e=>this.change(e)}
          floatingLabelFixed={true}
        />
        <br />                     
        <RaisedButton label="Enviar"  onClick={e => this.saveClick(e)} primary />
      </form>
    );
  }
};

export default AlumnoForm;