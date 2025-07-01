// functions/postFuncions.tsx
import type { FormData } from "../components/InputSelect"; // Importe os tipos Task e FormData
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
      // Se a resposta não for OK (ex: status 4xx ou 5xx), lança um erro
      const errorText = await response.text();
      throw new Error(
        `Erro na rede ou no servidor: ${response.status} - ${errorText}`
      );
    }

    // Parseia o JSON da resposta e retorna o objeto da tarefa criada pelo backend
    const newTask: Task = await response.json();
    return newTask;
  } catch (error) {
    console.error("Erro ao fazer POST da tarefa:", error);
    // Relança o erro para que o componente que chamou possa lidar com ele
    throw error;
  }
}
