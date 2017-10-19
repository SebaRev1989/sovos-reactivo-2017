export default function ejemploClase() {
  class ClaseEjemplo{
    constructor(){
      console.log("Paso por el contructor");
    }
    metodoUno(){
      console.log("Llamada al metodo UNO");
    }
    metodoDos(){
      console.log("Llamada al metodo DOS");
    }
  }

  let objClaseEjemplo = new ClaseEjemplo();
  objClaseEjemplo.metodoUno();
  objClaseEjemplo.metodoDos();
}