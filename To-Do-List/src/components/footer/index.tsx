import style from "./index.module.css";

export function Footer({ listTask }: { listTask: [] }) {
  return (
    <footer className={style.todoFooter}>
      <p>
        <span id="pendingTasksCount">{listTask.length}</span> tarefas pendentes
      </p>
    </footer>
  );
}
