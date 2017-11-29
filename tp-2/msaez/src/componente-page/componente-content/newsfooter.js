import React, {Component} from 'react';
import './footer.scss'

class Newsfooter extends React.Component {
    render() {
            let coment ='';
            var count = this.props.item.cantidadComentarios;
            if(count == 0 || count < 0) 
                {
                  coment = 'Sin Comentarios'
                } 
            else 
                {
                  if(count < 100) 
                      {
                        coment = count+' Comentarios'
                      } 
                  else 
                      {
                        coment = '99+ Comentarios'
                      }
                }  
        return (<div className="post_info">{this.props.item.fecha} | Posted by <a href="#">{this.props.item.creador}</a> | <a href="#">{coment}</a></div>
        );
    }
}

export default Newsfooter;
