import React from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar clase del curso de React', completed: false },
  { text: 'Levar el perro al parque', completed: false },
  { text: 'Estudiar Javascript', completed: false },
  { text: 'Ir al gimnasio', completed: false },
];

function App() {
  const [ todos, setTodos ] = React.useState( defaultTodos );
  const [ searchValue, setSearchValue ] = React.useState('');

  /////////////////////////
  // Filtra cual task tienen la propiedad completed en true 👇
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  /* Estamos enviando información a nuestro componente TodosCounter
  y se lo vamos a cambiar cada vez que cambie la cantidad de ToDos
  o la cantidad de ToDos completados. */
  /////////////////////////

  let searchedTodos = [];

  /* Comprueba que si el usuario no tecleo nada,
  muestre todos los ToDos y sino que filtre todos
  los ToDos que conincida con lo que tipeo el usuario */
  if( !searchValue.length >= 1 ) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      // Analiza las coincidencias de los ToDos y los convierte en minúsculas
      const todoText = todo.text.toLowerCase();
      // Lo que escribe los usuarios
      const searchText = searchValue.toLowerCase();
      // Esto comprueba la comparativa entre el ToDo buscado y lo que tipeo el usuario
      return todoText.includes(searchText);
    });
  }

  /* Cuando llamemos a la completeTodos vamos a enviarle un texto 
  de nuestro ToDo. */
  const completeTodo = ( text ) => {
    // Examinamos ToDo por ToDo cual tiene exactamente ese mismo texto
    // y cuando lo obtenga, vamos a obtener la posición de ese texto
    const todoIndex = todos.findIndex( todo => todo.text === text );

    const newTodos = [...todos];
    newTodos[ todoIndex ].completed = true;
    // Ambos realizan lo mismo 👆👇
    // todos[ todoIndex ] = {
    //   text: todos[ todoIndex ].text,
    //   completed: true
    // }
    setTodos(newTodos);
  }

  // En caso que le demos al tacho, el task se borra
  const deleteTodo = ( text ) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice( todoIndex, 1 );
    setTodos(newTodos);
  }

  return (
    <div className="rootApp d-flex">
      <div class="createTitleApp d-flex justify-content-center align-items-center">
        <div class="boxContainer">
          <span className="titleApp">ToDo</span>

          <CreateTodoButton />
        </div>
      </div>

      <div class="mainTable">
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
              <TodoItem 
                key={ todo.text } 
                text={ todo.text } 
                completed={ todo.completed } 
                onComplete={ () => completeTodo( todo.text ) }
                onDelete={ () => deleteTodo( todo.text ) }
              />
            ))}
          </TodoList>
        </div>
      </div>
    </div>
  );
}

export default App;
