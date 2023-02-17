import React from "react";
import '../css/TodoItem.css';
import '../css/index.css';
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`iconFa Icon-check ${props.completed && 'Icon-check--active'}`}><FaCheckCircle /></span>
      <p className={`textoItem ${props.completed && 'textoItem--complete'}`}>{ props.text }</p>
      <span className="iconFa"><FaWindowClose /></span>
    </li>
  );
};

export { TodoItem };