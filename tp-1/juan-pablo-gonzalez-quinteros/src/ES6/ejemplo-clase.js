export default function ejemploClase(){
    class ClaseEjemplo {
        constructor(){}
        metodoUno(){
            console.log("llamado metodo uno");
        }
        metodoDos(){
            console.log("llamado metodo dos");
        }
    };

    let objEjemplo = new ClaseEjemplo();
    objEjemplo.metodoUno();
    objEjemplo.metodoDos();
};