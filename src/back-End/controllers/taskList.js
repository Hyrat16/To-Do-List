import { randomUUID } from "node:crypto";

export function create({ req, res, database }) {
  const { task } = req.body;

  const Task = {
    id: randomUUID(),
    task,
  };

  database.insert("task", Task);
  return res.end(JSON.stringify(Task));
}
