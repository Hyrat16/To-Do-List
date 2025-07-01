import style from "./index.module.css";

export function RenderListTask({ listTask, onToggleComplete }) {
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
              onClick={() => onToggleComplete(item.id)} // Chamar onToggleComplete no clique
            >
              {/* A marca de seleção será renderizada pelo pseudo-elemento ::after do CSS se checkboxChecked for aplicado */}
            </div>
          </div>
          <span className={style.taskText}>{item.task}</span>
          <button
            className={style.deleteButton}
            aria-label="Deletar tarefa"
            onClick={() => console.log(item.id)} // Lógica para deletar a tarefa
          >
            &#x1F5D1; {/* Ícone de lixeira */}
          </button>
        </li>
      ))}
    </ul>
  );
}
