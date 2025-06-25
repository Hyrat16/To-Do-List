export async function apiGet() {
  const URL = "http://localhost:3000/tasks";

  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
}
