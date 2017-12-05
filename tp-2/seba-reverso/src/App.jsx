import React, {Component} from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import LeftMenu from './components/leftMenu';
import News from './components/news';

class App extends Component {
  render() {

  let alumnosList = [
    {nombre: "Peter"},
    {nombre: "Mocho"},
    {nombre: "Ernesto"},
    {nombre: "Perro"},
    {nombre: "Ivan"},
    {nombre: "Facu"},
    {nombre: "Euge"},
    {nombre: "Tincho"},
    {nombre: "Mariasol"}
  ];

  let fechasList = [
    {fecha: "Octubre 19, 2017"},
    {fecha: "Octubre 18, 2017"},
    {fecha: "Octubre 17, 2017"}
  ];

  let noticasList = [
    {
      titulo: 'Por que MariaSol no usa un editor como la gente?',
      cuerpo: 'Los compas del curso se preguntan que pasa con el editor que usa esta alumna, el cual no posee ' +
        'ni siquiera color en las fuentes. No es novedad que esta un poco mal de la cabeza pero les parece demasiado ' +
        'que llegue a este tipo de acciones como las de usar un editor solo en gris y negro.',
      fecha: 'Octubre 18, 2017',
      autor: 'usuario anonimo',
      cantComentarios: 0
    },
    {
      titulo: 'Comentarios sobre el profe JPG',
      cuerpo: 'Muchos alumnos se llegaron por SRN para elogiar al profesor de ese curso, segun cuentan al parecer ' +
        'el joven es muy bueno ense&ntilde;ando, ayudando y desarrollando aplicaciones en React.',
      fecha: 'Octubre 18, 2017',
      autor: 'usuario JPG ',
      cantComentarios: 20
    },
    {
      titulo: 'Que paso en el After-Rafting?',
      cuerpo: 'Algunos alumnos del curso se quedaron en salta luego del rafting, SRN (sovos reactivo news) pudo hablar con ' +
      'algunos de ellos sobre lo que hicieron el finde largo en Salta la Linda.\n' +
      'Segun uno de los entrevistados, algunos fueron a la iglesia el sabado a la ma&ntilde;ana otros a visitar museos y comprar ' +
      'articulos regionales. Un aplauso para los reactivos que saben vivir la vida!',
      fecha: 'Octubre 15, 2017',
      autor: 'usuario anonimo',
      cantComentarios: 100
    }
  ];

    return (
      <div className="container">
        <Header />
        <Navbar />
        <div className="main_nav">
          <LeftMenu alumnosList={alumnosList} fechasList={fechasList} />
        </div>
        <div className="content">
          <News noticiasList={noticasList}/>
        </div>
      </div>
    );
  }
}
export default App;
