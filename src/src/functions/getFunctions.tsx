export async function getTaskList() {
  const url = "http://localhost:4000/tasks";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (mensage) {
    console.log(mensage);
  }
}
