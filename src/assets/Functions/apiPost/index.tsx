export function PostApi(tasks) {
  const URL = "http://localhost:3000/tasks";
  console.log(tasks);

  fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks),
  });
}
