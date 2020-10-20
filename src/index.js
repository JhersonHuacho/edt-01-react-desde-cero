import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById('root');

// -> Sin JSX
//const elemento = React.createElement(componente,propiedades,children);
//const elemento = React.createElement("h1", { className: "saludo" }, "Hola Mundo");

// -> Con JSX
//const elemento = <h1 className="saludo">Hola Mundo</h1>;

//ReactDOM.render( elemento, root);

ReactDOM.render(<App />, root);


