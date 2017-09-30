export default function ejemploClase(){
    class ClaseEjemplo{
        constructor(usuario){
            console.log('paso por el constructor');
            console.log(`El usuario es ${usuario}. Bienvenido ${usuario}`);
            this.usuario = usuario;
        }
        metodoUno(){
            console.log('llamada al metodo UNO');
            var data = [4, 8, 15, 16, 23, 42]
            data.forEach(elem => {
                console.log(elem);
            })
        }
        metodoDos(){
            console.log('llamada al metodo DOS');
            
            if (true){
                var x = "varx";
                let y = "vary"
            }
            console.log(x);
            //console.log(y); Esto da error
            console.log('vary no existe en este punto');

        }
        metodoTres(){
            const PI=3.14159;
                //PI=3.1416; Esto da error
            console.log(`Valor de Pi: ${PI}`);
        }
        metodoCuatro(){
            var obj = {nombre: "Alberto", apellido: "Einstein", profesion: "empleado"};
            var {nombre, profesion} = obj;
            console.log(`${nombre} trabaja de ${profesion}`);
        }
        metodoCinco(respuesta = "Indeciso"){
            console.log(`La respuesta es ${respuesta}`);
        }
        static metodoEstatico(nombre){
            console.log(`Asi que tu nombre es ${nombre}?`);
        }
    }

    let usuario = prompt("Ingrese su nombre");
    let objClaseEjemplo = new ClaseEjemplo(usuario);

    objClaseEjemplo.metodoUno();
    objClaseEjemplo.metodoDos();
    objClaseEjemplo.metodoTres();
    objClaseEjemplo.metodoCuatro();
    objClaseEjemplo.metodoCinco();
    let res = prompt('Entiende esto? Si / No');
    objClaseEjemplo.metodoCinco(res);
    ClaseEjemplo.metodoEstatico(usuario);
}