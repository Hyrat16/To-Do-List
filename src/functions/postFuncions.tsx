export async function postTaskList(data) {
  const url = "http://localhost:4000/tasks";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  });
}
