import style from "./index.module.css";
import { useForm } from "react-hook-form";
import { postTaskList } from "../../functions/postFuncions";

export type FormData = {
  task: string;
};

export function AddNewTaskBar({ onTaskAdded }: { onTaskAdded: () => void }) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    await postTaskList(data);
    reset();
    if (onTaskAdded) onTaskAdded(); // Chama a função para atualizar a lista
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
