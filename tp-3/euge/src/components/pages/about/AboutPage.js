import React from 'react';
import './aboutPage.scss';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h2 className="alt-header">Acerca mío</h2>
      <p>
        Hola! Soy Eugenia Soria y actualmente trabajo en Sovos. Vivo en Tucumány soy fan de Chicho (el mejor lugar donde comer sanguches de milanesa de todo el mundo)
      </p>
      <p>
        Antes de entrar en el mundo del software, era una mujer religiosa y llegué a ser monja.
      </p>
      <img src={require('./monja.png')} />
    </div>
  );
};

export default AboutPage;
