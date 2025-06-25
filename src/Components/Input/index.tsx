import styles from "./input.module.css";
import { useForm } from "react-hook-form";
import { PostApi } from "../../assets/Functions/apiPost";

export type IFormInput = {
  id: number;
  tasks: string;
};

export function InputButton({ tasks = [], setTasks }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const taskWithId = {
      id: Math.floor(Math.random() * 1000),
      tasks: data.tasks,
    };

    PostApi(taskWithId);
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
    reset();
  };

  return (
    <div className={styles.container}>
      <h1>Minha Lista</h1>
      <div className={styles.inputArea}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Digite a Tarefa Aqui"
            {...register("tasks", { required: true })}
          />
          <button type="submit">Adicionar</button>
        </form>
      </div>
      <div>
        <ul>
          {tasks && tasks.length > 0 ? (
            tasks.map((task) => <li key={task.id}>{task.tasks}</li>)
          ) : (
            <li>Nenhuma tarefa encontrada</li>
          )}
        </ul>
      </div>
    </div>
  );
}
