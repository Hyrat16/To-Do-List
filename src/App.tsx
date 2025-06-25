import { useEffect, useState } from "react";
import { InputButton } from "./Components/Input/index";
import { apiGet } from "./assets/Functions/apiGet";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const data = await apiGet();
      setTasks(Array.isArray(data) ? data : []);

      setTasks([]);
    };

    fetchTasks();
  }, []);

  return (
    <>
      {loading ? (
        <p>Carregando tarefas...</p>
      ) : (
        <InputButton tasks={tasks} setTasks={setTasks} />
      )}
    </>
  );
}

export default App;
