import React, {Component} from 'react';
import './newsheader.scss'

class Newsheader extends React.Component {
    render() {
        return (
            <h className = "headercontent">
                {this.props.titulo}
            </h>
        );
    }
}

export default Newsheader;