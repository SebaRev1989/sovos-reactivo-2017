import React, {Component} from 'react';
import Newscontent from './newscontent';

class Content extends React.Component {
    render() {
        return (
            <div> 
                {this.props.noticiasList.map(function (item,i) {return (<Newscontent key={i} item = {item}/>)})}
            </div>
        );
    }
}

export default Content;