import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoTable } from "./components/TodoTable";
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';



function App() {
  return (
    /* 
    React necesita que le manden una etiqueta por componente y
    dentro ya le podemos mandar las etiquetas quie necesitamos

    React.Fragment es una etiqueta invisible de React para no tener
    div por cada uno de los componentes y de esa forma evitamos problemas
    a la hora de dar estilos con CSS
    */
    
    <React.Fragment>
      <CreateTodoButton />
      <TodoTable />

    </React.Fragment>
  );
}

export default App;
