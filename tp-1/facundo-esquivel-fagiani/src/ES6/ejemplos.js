export default function ejemploClase(){
    class ClaseEjemplo{
        constructor(){
            console.log('Aqui esta el constructor');
        }
        meotodoUno(){
            console.log('Aqui esta el metodo one');
        }
        meotodoDos(){
            console.log('Aqui esta el metodo deux');
        }
    }

    let objClaseEjemplo = new  ClaseEjemplo();

    objClaseEjemplo.meotodoUno();
    objClaseEjemplo.meotodoDos();
}