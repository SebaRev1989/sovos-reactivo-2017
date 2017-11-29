import React, {Component} from 'react';
import Leftsubmenudate from './leftmenudate';
import Formulario from './Formulario';
import './leftmenu.scss'

class Leftsubmenu extends React.Component {

    handleFormSave = (noticia) => {this.props.onNewPageNoticia(noticia);}

    render() {
        return (
            <div className="main_nav">
                <div className="sub_menu">
                    <div>Menu</div>  
                    {this.props.alumnosList.map(function (item, i) {return (<a key={i} href="#">Ver Noticias de <b>{item.nombre}</b></a>)})}
                </div>
                <Leftsubmenudate/>
                <Formulario onSave={this.handleFormSave}/>
            </div>
        );
    }
}

export default Leftsubmenu;