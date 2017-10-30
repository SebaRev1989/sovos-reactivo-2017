import React from 'react';
import NoticiaItem from './noticiaItem';
import './news.scss';

class News extends React.Component{
  render(){
    return(
      <div>
        {this.props.noticiasList.map(item => <NoticiaItem noticia = { item } />)}
      </div>
    );
  }
}

export default News;