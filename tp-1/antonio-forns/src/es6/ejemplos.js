export default function ejemploCalse() {
  class ClaseEjemplo {
    constructor () {
      console.log('paso por el constructor');
    }
    metodoUno() {
      console.log('Metodo uno');
    }
    metodoDos() {
      console.log('Metodo dos');
    }
  }
  let objClaseEjemplo = new ClaseEjemplo();

  objClaseEjemplo.metodoUno();
  objClaseEjemplo.metodoDos();
}
