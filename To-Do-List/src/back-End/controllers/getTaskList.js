export function getTaskList({ req, res, database }) {
  const tasks = database.select("task");
  res.setHeader("Content-Type", "application/json");
  const responseBody = JSON.stringify(tasks);
  return res.end(responseBody);
}
