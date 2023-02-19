import React from "react";
import '../css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <span className="TodoCounter text-center">Completed { completed } to { total }</span>
  );
}

export { TodoCounter };