import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar clase del curso de React', completed: false },
  { text: 'Levar el perro al parque', completed: false },
];

function TodoTable() {
  return (
    <div className="containTable">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={ todo.text } text={ todo.text } completed={ todo.completed } />
        ))}
      </TodoList>
    </div>
  );
}

export  {TodoTable};