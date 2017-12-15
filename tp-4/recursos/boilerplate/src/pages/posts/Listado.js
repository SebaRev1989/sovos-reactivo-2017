import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Table, Button } from 'antd';
const { Content } = Layout;

const columns = [{
  title: 'title',
  dataIndex: 'title',
  width: '30%',
}, {
  title: 'body',
  dataIndex: 'body', 
  width: '20%',
}];

class Listado extends React.Component {

  state = { 
    showPostForm: false,
    postSeleccionado: {} 
  }
  
  componentWillMount(){
    this.props.actions.fetchPosts();
  }

  handlePlusClick = () => {
    this.setState({ postSeleccionado: null });
    this.setState({ showPostForm: true });
  }

  handleCloseParametrosForm= () => {
    this.setState({ showPostForm: false });
  }

  render() {
    return (
      <div className="content-inner">
        <Layout >
          <Content>
            <Button className="editable-add-btn" onClick={this.handlePlusClick}>Nuevo Post</Button>
            <Table 
              columns={columns}
              rowKey={record => record.id}
              dataSource={this.props.posts}
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
  posts:PropTypes.array.isRequired,
  actions: PropTypes.shape({
    fetchPosts: PropTypes.func,
    guardarPost: PropTypes.func,
    eliminarPost: PropTypes.func,
  }).isRequired,
};

Listado.defaultProps = {
  trabajando: false,
  posts:[]
};


export default Listado;
