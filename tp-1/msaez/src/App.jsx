import React, {Component} from 'react';
import ejemploDeClase from './ES6/ejemplosES6';

class App extends Component {

  getH3(){
    return <h3> otro tag? </h3>
  }
  render() {
    ejemploDeClase();
    return (
      <div>
        {this.getH3()}   
        <h1>Hello React :)</h1>
      </div>
    );
  }
}
export default App;
