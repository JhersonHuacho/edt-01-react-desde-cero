import React, { Fragment } from 'react';
import Curso from './Curso';
import './styles/styles.scss';

// -> Primera Forma
//const App = () => <h1>Hola Mundo desde mi archivo App.js</h1>;

const App = () => (
  <Fragment>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt="banner" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Curso de EDTeam</p>
            <p> Tu futuro te está esperando</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso />
      <Curso />
      <Curso />
      <Curso />
    </div>
  </Fragment>
);

export default App;
