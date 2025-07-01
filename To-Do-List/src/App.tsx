import { useState, useEffect } from "react";
import { Header } from "./components/header";
// Importe 'Task' aqui, agora que ela é exportada de InputSelect/index.tsx
import { AddNewTaskBar } from "./components/InputSelect";
import type { Task } from "./components/InputSelect";
import { getTaskList } from "./functions/getFunctions";
import { RenderListTask } from "./components/renderListTask";
import { Footer } from "./components/footer";

function App() {
  // RENOMEADO: De 'task' (singular) para 'tasks' (plural)
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadInitialTasks() {
    const data = await getTaskList();
    // 'data' aqui provavelmente é um array de objetos com 'id' e 'task' (string),
    // mas pode não ter 'completed'. Garanta que todos tenham 'completed: false'.
    setTasks(data.map((item: any) => ({ ...item, completed: false })) || []);
  }

  useEffect(() => {
    loadInitialTasks();
  }, []);

  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleTaskCreated = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Use 'tasks' aqui, já que renomeamos o estado
  const alphabeticalOrder = [...tasks].sort((a, b) =>
    a.task.localeCompare(b.task)
  );

  return (
    <>
      <div className="todoContainer">
        <Header title="Lista de Tarefas"></Header>

        <AddNewTaskBar onTaskAdded={handleTaskCreated} />

        <RenderListTask
          listTask={alphabeticalOrder}
          onToggleComplete={handleToggleComplete}
        ></RenderListTask>

        <Footer listTask={alphabeticalOrder}></Footer>
      </div>
    </>
  );
}

export default App;
