export async function deleteTaskList(id: string): Promise<void> {
  const url = `http://localhost:4000/tasks/${id}`; // URL com o ID da tarefa
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Erro na rede ou no servidor ao deletar: ${response.status} - ${errorText}`
      );
    }
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    throw error;
  }
}
