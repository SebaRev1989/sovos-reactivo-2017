import React from 'react';
import { Modal, Input } from 'antd';
const { TextArea } = Input;

class Formulario extends React.Component {
  
  state = {
    id:null,
    userId:null,
    title: '',
    body:'',
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
    let {title, body} = this.props.postSeleccionado;
    return (
      <div>
        <Modal
          title = "Nuevo Post"
          visible={true}               
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Guardar"
          cancelText="Cancelar"
        >
          <Input 
            placeholder="Title"
            value={title}
          />
          <TextArea  
            placeholder="Body"
            value={body}
          />

        </Modal>
      </div>
    );
  }
  
}

export default Formulario;
