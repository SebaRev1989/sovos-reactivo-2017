import React, {Component} from 'react';
import Newsheader from './newsheader';
import Newsbody from './newsbody';
import Newsfooter from './newsfooter';
import './content.scss'

class Newscontent extends React.Component {
    render() {
        return (
            <div className="content"> 
                <Newsheader titulo = {this.props.item.titulo}/>
                <Newsbody  contenido = {this.props.item.contenido}/>
                <Newsfooter  item = {this.props.item}/>
            </div>
        );
    }
}

export default Newscontent;