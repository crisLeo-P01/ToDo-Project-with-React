import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar clase del curso de React', completed: false },
  { text: 'Levar el perro al parque', completed: true },
  { text: 'Estudiar Javascript', completed: true },
  { text: 'Ir al gimnasio', completed: false },
];

function App() {
  const [ todos, setTodos ] = React.useState( defaultTodos )
  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if( !searchValue.length >= 1 ) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    /* React necesita que le manden una etiqueta por componente y
    dentro ya le podemos mandar las etiquetas quie necesitamos

    React.Fragment es una etiqueta invisible de React para no tener
    div por cada uno de los componentes y de esa forma evitamos problemas
    a la hora de dar estilos con CSS */
    <React.Fragment>
      <div className="containTable text-center">
        <span className="titleTable text-center">Your tasks</span>
        <TodoCounter 
          total={ totalTodos }
          completed={ completedTodos }
        />
        <TodoSearch 
          searchValue={ searchValue }
          setSearchValue={ setSearchValue }
        />
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem key={ todo.text } text={ todo.text } completed={ todo.completed } />
          ))}
        </TodoList>
      </div>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
