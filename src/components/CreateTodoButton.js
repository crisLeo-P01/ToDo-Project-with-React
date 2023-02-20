import React from "react";
import '../css/CreateTodoButton.css';
import { FaPlus } from 'react-icons/fa'

function CreateTodoButton() {
  const onClickButton = ( msg ) => {
    alert( msg )
  }

  return (
    <div class="containCreateTask">
      <span>Create new task</span>
      <input  className="inputCreateTask" type="text" placeholder="Escribe una nueva tarea" />

      <button 
        className="btnCreateTodo"
        onClick={ () => onClickButton( 'Aquí se debería abrir el modal' ) }>
        <FaPlus />Create task
      </button>
    </div>
  );
};

export { CreateTodoButton }