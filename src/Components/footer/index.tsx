export function Footer({ listTask }: { listTask: [] }) {
  return (
    <footer className="todoFooter">
      <p>
        <span id="pendingTasksCount">{listTask.length}</span> tarefas pendentes
      </p>
    </footer>
  );
}
