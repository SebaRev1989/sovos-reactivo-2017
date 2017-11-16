import React, {Component} from 'react';

import Header from './componente-header/header';
import Leftsubmenu from './componente-menu/leftmenu';
import Mainmenu from './componente-main-menu/mainmenu';
import Content from './componente-content/content';
import './page.scss'


class Page extends React.Component {

    onNewLatestPageNoticia = (noticia) => {this.props.onLatestNoticia(noticia);}

    render() {
        return (
            <div className = 'Page'>
              <Header/>
              <Mainmenu/>
              <Leftsubmenu alumnosList ={this.props.alumnosList} onNewPageNoticia ={ this.onNewLatestPageNoticia}/>
              <Content noticiasList ={this.props.noticiasList}/>
            </div>
        );
    }
}

export default Page;