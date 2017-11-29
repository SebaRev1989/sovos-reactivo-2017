import React, {Component} from 'react';
import './leftmenu.scss'

class Leftsubmenudate extends React.Component {
    render() {
        return (
            <div className="sub_menu">
                <div>Ultimos Puterios</div>  
                    <a href=""><li>Octubre 19, 2017</li></a>
					<a href=""><li>Octubre 18, 2017</li></a>
					<a href=""><li>Octubre 17, 2017</li></a>
            </div>   
        );
    }
}

export default Leftsubmenudate;