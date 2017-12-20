import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Table, Button } from 'antd';
const { Content } = Layout;

const columns = [{
  title: 'Nombre',
  dataIndex: 'name',
  width: '30%',
}, {
  title: 'Nombre de Usuario',
  dataIndex: 'username', 
  width: '30%',
}, {
  title: 'e-mail',
  dataIndex: 'email', 
  width: '40%',
}];

class Listado extends React.Component {

  state = { 
    showUserForm: false,
    userSeleccionado: {} 
  }
  
  componentWillMount(){
    this.props.actions.fetchUsers();
  }

  handlePlusClick = () => {
    this.setState({ userSeleccionado: null });
    this.setState({ showUserForm: true });
  }

  handleCloseParametrosForm= () => {
    this.setState({ showUserForm: false });
  }

  render() {
    return (
      <div className="content-inner">
        <Layout >
          <Content>
            <Button className="editable-add-btn" onClick={this.handlePlusClick}>Nuevo Usuario</Button>
            <Table 
              columns={columns}
              rowKey={record => record.id}
              dataSource={this.props.users}
              loading={this.props.trabajando}
            />
          </Content>
        </Layout>
      </div>
    );
  }
  
}

Listado.propTypes = {
  trabajando: PropTypes.bool.isRequired,
  users:PropTypes.array.isRequired,
  actions: PropTypes.shape({
    fetchUsers: PropTypes.func,
    guardarUser: PropTypes.func,
    eliminarUser: PropTypes.func,
  }).isRequired,
};

Listado.defaultProps = {
  trabajando: false,
  users:[]
};


export default Listado;
