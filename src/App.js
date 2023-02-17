import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar clase del curso de React', completed: false },
  { text: 'Levar el perro al parque', completed: false },
];

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
      <TodoCounter />
      
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={ todo.text } text={ todo.text } completed={ todo.completed } />
        ))}
      </TodoList>
  
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
