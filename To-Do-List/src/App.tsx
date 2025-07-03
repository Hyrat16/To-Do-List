import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { AddNewTaskBar } from "./components/InputSelect";
import type { Task } from "./components/InputSelect";
import { getTaskList } from "./functions/getFunctions";
import { RenderListTask } from "./components/renderListTask";
import { Footer } from "./components/footer";
import { deleteTaskList } from "./functions/deleteFunctions";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function loadInitialTasks() {
    const data = await getTaskList();

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

  const handleDeleteTask = async (id: string) => {
    try {
      await deleteTaskList(id);

      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Falha ao deletar a tarefa no frontend:", error);
    }
  };

  return (
    <>
      <div className="todoContainer">
        <Header title="Lista de Tarefas"></Header>

        <AddNewTaskBar onTaskAdded={handleTaskCreated} />

        <RenderListTask
          listTask={alphabeticalOrder}
          onToggleComplete={handleToggleComplete}
          onDeleteTask={handleDeleteTask}
        ></RenderListTask>

        <Footer listTask={alphabeticalOrder}></Footer>
      </div>
    </>
  );
}

export default App;
