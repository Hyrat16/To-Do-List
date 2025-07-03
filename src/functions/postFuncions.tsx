// functions/postFuncions.tsx
import type { FormData } from "../components/InputSelect";
import type { Task } from "../components/InputSelect";

export async function postTaskList(data: FormData): Promise<Task> {
  const url = "http://localhost:4000/tasks";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Erro na rede ou no servidor: ${response.status} - ${errorText}`
      );
    }

    const newTask: Task = await response.json();
    return newTask;
  } catch (error) {
    console.error("Erro ao fazer POST da tarefa:", error);

    throw error;
  }
}
