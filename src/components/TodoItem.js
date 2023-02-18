import React from "react";
import '../css/TodoItem.css';
import '../css/index.css';
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`iconFa Icon-check ${props.completed && 'Icon-check--active'}`}><FaCheckCircle /></span>
      <span className={`textoItem ${props.completed && 'textoItem--complete'}`}>{ props.text }</span>
      <span className="iconFa"><FaTrashAlt /></span>
    </li>
  );
};

export { TodoItem };