import React, {Component} from 'react';
import Page from './componente-page/page';

class App extends Component {

	constructor() {
				<link rel="shortcut icon" href=""></link>
				super()

				let noticiasList = [
							{
								titulo: 'Porque MariaSol no usa un editor como la gente',
								contenido: 'Los compas del curso se preguntan que pasa con el editor que usa esta alumna, el cual no posee ni siquiera color en las fuentes. No es novedad que esta un poco mal de la cabeza pero les parece demasiado que llegue a este tipo de acciones como las de usar un editor solo en gris y negro.',
								fecha: 'octubre 18, 2017',
								creador: 'usuario anonimo',
								cantidadComentarios: 0
							},
							{
								titulo: 'Comentarios sobre el profe JPG',
								contenido: 'Muchos alumnos se llegaron por SRN para elogiar al profesor de ese curso, segun cuentan al parecer el joven es muy bueno enseniando, ayudando y desarrollando aplicaciones en React.',
								fecha: 'octubre 18, 2017',
								creador: 'usuario anonimo',
								cantidadComentarios: 10
							},
							{
								titulo: 'Que paso en el After-Rafting',
								contenido: 'Segun uno de los entrevistados, algunos fueron a la iglesia el sabado a la maniana otros a visitar museos y comprar articulos regionales. Un aplauso para los reactivos que saben vivir la vida!',
								fecha: 'octubre 15, 2017',
								creador: 'usuario anonimo',
								cantidadComentarios: 300
							}
					];

					this.state = {listadoNoticias : noticiasList};	


	}

	handleNewNoticia = (noticia) => {
       var date = new Date(),
         locale = "es-us",
         month = date.toLocaleString(locale, { month: "long" }),
         day = date.toLocaleString(locale, {day: "numeric"}),
         year = date.toLocaleString(locale, {year: "numeric"});
       
       noticia.fecha = month +' '+ day + ', ' + year;
       noticia.cantidadComentarios = 0;
       
       this.setState({listadoNoticias: this.state.listadoNoticias.concat(noticia)});
     }



  render() {

		let alumnosList = [
			{nombre: 'peter'},
			{nombre: 'mocho'},
			{nombre: 'ernesto'},
			{nombre: 'perro'},
			{nombre: 'ivan'},
			{nombre: 'facu'},
			{nombre: 'euge'},
			{nombre: 'tincho'},
			{nombre: 'mariasol'}
		];
		

    return (
      <Page alumnosList = {alumnosList} noticiasList = {this.state.listadoNoticias} onLatestNoticia ={this.handleNewNoticia}/>
    );
  }
}
export default App;
