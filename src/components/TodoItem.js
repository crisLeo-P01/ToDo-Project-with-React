import React from "react";
import '../css/TodoItem.css';
import '../css/index.css';
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  const onComplete = () => {
    alert( 'Ya completaste el ToDo ' + props.test );
  }
  const onDelete = () => {
    alert( 'Borraste el ToDo ' + props.text );
  }
  
  return (
    <li className={`TodoItem ${props.completed && 'TodoItem--complete'}`}>
      <span className={`iconFa Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={ onComplete }>
        <FaCheckCircle />
      </span>
      <span className={`textoItem ${props.completed && 'textoItem--complete'}`}>{ props.text }</span>
      <span className="iconFa faTrash"
      onClick={ onDelete }>
        <FaTrashAlt />
      </span>
    </li>
  );
};

export { TodoItem };