import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { AddNewTaskBar } from "./components/InputSelect";
import { getTaskList } from "./functions/getFunctions";
import { RenderListTask } from "./components/renderListTask";
import { Footer } from "./components/footer";

function App() {
  const [task, setTasks] = useState([]);

  async function fetchTasks() {
    const data = await getTaskList();
    setTasks(data || []);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const alphabeticalOrder = [...task].sort((a, b) =>
    a.task.localeCompare(b.task)
  );

  return (
    <>
      <div className="todoContainer">
        <Header title="Lista de Tarefas"></Header>

        <AddNewTaskBar onTaskAdded={fetchTasks} />

        <RenderListTask listTask={alphabeticalOrder}></RenderListTask>

        <Footer listTask={alphabeticalOrder}></Footer>
      </div>
    </>
  );
}

export default App;
