"use client "
import React from "react";
type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

const TodoItem = ({ id, title, complete,toggleTodo }: TodoItemProps) => {
  return (
    <div>
      <li className="flex gap-1 items-center text-3xl">
        <input id={id} type="checkbox" className="cursor-pointer peer" 
        defaultChecked={complete}
        onChange={e=>toggleTodo(id,e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:text-slate-500 peer-checked:line-through"
        >
          {title}
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
