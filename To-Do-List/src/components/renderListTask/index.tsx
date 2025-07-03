import style from "./index.module.css";
import type { Task } from "../InputSelect";
import { useState } from "react";

export function RenderListTask({
  listTask,
  onToggleComplete,
  onDeleteTask,
}: {
  listTask: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}) {
  const [ativos, setAtivos] = useState<{ [key: string]: boolean }>({});

  const toggleAtivo = (idDoItem: string) => {
    setAtivos((prevAtivos) => ({
      ...prevAtivos,
      [idDoItem]: !prevAtivos[idDoItem],
    }));
  };
  // Adicionado prop onToggleComplete
  return (
    <ul className={style.todoList}>
      {listTask.map((item) => (
        <li
          key={item.id}
          className={item.completed ? style.todoItemCompleted : style.todoItem}
        >
          <div className={style.checkboxWrapper}>
            <div
              className={
                item.completed ? style.checkboxChecked : style.checkBox
              }
              onClick={() => onToggleComplete(item.id)}
            ></div>
          </div>
          <span className={style.taskText}>{item.task}</span>
          <button
            className={style.deleteButton}
            aria-label="Deletar tarefa"
            onClick={() => onDeleteTask(item.id)}
          >
            &#x1F5D1;
          </button>
        </li>
      ))}
    </ul>
  );
}
