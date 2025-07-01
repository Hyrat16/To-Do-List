// components/InputSelect/index.tsx
import style from "./index.module.css";
import { useForm } from "react-hook-form";
import { postTaskList } from "../../functions/postFuncions";

export type FormData = {
  task: string;
};

export type Task = {
  // Esta exportação já está correta
  id: string;
  task: string;
  completed: boolean;
};

export function AddNewTaskBar({
  onTaskAdded,
}: {
  onTaskAdded: (newTask: Task) => void;
}) {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await postTaskList(data);

      if (!response || !response.id || !response.task) {
        console.error(
          "postTaskList não retornou os dados completos da tarefa."
        );
        return;
      }

      const newTask: Task = {
        id: response.id,
        task: response.task,
        completed: false,
      };

      reset();

      if (onTaskAdded) {
        onTaskAdded(newTask);
      }
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <section className={style.taskInputSection}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={style.taskInput}
          placeholder="Adicionar nova tarefa..."
          {...register("task", { required: true })}
        />

        <input type="submit" className={style.addButton} />
      </form>
    </section>
  );
}
