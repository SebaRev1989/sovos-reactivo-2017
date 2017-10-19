export default function ejemploClase(){
	class ClaseEjemplo{
		constructor(){
			console.log('Paso por el constructor');
		}
		metodoUno(){
			console.log('Calling método uno!');
		}
		metodoDos(){
			console.log('Calling método dos!');
		}		
	}

	let objClaseEjemplo = new ClaseEjemplo();

	objClaseEjemplo.metodoUno();
	objClaseEjemplo.metodoDos();
}