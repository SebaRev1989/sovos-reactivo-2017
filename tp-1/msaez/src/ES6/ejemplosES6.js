export default function ejemploDeClase(){
    class ClaseDeEjemplo{
        constructor(){
            console.log('paso por el constructor');
        }
        metodoUno(){
            console.log('llamada al metodo 1');
            var data = ["letra a", 'b', 'c', 'd', 'e', "letra f"]
            data.forEach(elem => {
                console.log(elem);
            })
        }
        metodoDos(){
            console.log('llamada al metodo 1 por el metodo 2 con this');
            this.metodoUno();
        }

        metodoTres(){
			console.log('llamada al metodo 3');
            var obj = {nombre: "Mario", apellido: "Saez"};
            var {nombre, apellido} = obj;
            console.log(`Mi nombre es ${apellido}, ${nombre}`);
        }

    }

    let objClaseDeEjemplo = new ClaseDeEjemplo();

    objClaseDeEjemplo.metodoUno();
    objClaseDeEjemplo.metodoDos();
    objClaseDeEjemplo.metodoTres();
}