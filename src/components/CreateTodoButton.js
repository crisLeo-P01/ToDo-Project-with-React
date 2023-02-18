import React from "react";
import '../css/CreateTodoButton.css';
import { FaPlus } from 'react-icons/fa'

function CreateTodoButton() {
  return (
    <div className="contain">
    <span>Create new task</span>
    <input  className="inputCreateTask" type="text" placeholder="Escribe una nueva tarea" />
    <button className="btnCreateTodo"><FaPlus />Create task</button>
    </div>
  );
};

export { CreateTodoButton }