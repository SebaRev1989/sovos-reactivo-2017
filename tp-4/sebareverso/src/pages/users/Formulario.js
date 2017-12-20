import React from 'react';
import { Modal, Input } from 'antd';
const { TextArea } = Input;

class Formulario extends React.Component {
  
  state = {
    id:null,
    name: '',
    username:'',
    email:''
  }

  componentWillMount() {
      this.props.actions.fetchPost(1);
  }

  handleOk = () => {
    this.setState({
      descripcionError:null
    });

    this.props.onSave(this.state);
  }

  handleCancel = () => {
    this.props.onCancel();
  }

  render() {
    let {title, body} = this.props.userSeleccionado;
    return (
      <div>
        <Modal
          title = "Nuevo Usuario"
          visible={true}               
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Guardar"
          cancelText="Cancelar"
        >
          <Input 
            placeholder="Nombre"
            value={name}
          />
          <Input  
            placeholder="Nombre de usuario"
            value={username}
          />
          <Input  
            placeholder="e-mail"
            value={email}
          />
        </Modal>
      </div>
    );
  }
  
}

export default Formulario;
