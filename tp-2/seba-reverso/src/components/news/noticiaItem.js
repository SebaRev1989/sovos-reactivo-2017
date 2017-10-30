import React from 'react';

class NoticiaItem extends React.Component{
  render(){
    return(
      <div>
        <h1 className="news_head">{ this.props.noticia.titulo } </h1>
        <p>{ this.props.noticia.cuerpo }</p>
        <div className="post_info">
          { this.props.noticia.fecha } |
          Posted by <a href="#">{ this.props.noticia.creador }</a> |
          <a href="#">{ this.props.noticia.cantidadComentarios > 0 ? this.props.noticia.cantidadComentarios + ' Comentarios' : 'Sin Comentarios' }</a>
        </div>
      </div>
    );
  }
}

export default NoticiaItem;