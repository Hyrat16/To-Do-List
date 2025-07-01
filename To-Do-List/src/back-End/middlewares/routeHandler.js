import { tasks } from "../routes/index.js";
import { Database } from "../database/database.js";

const database = new Database();

export function routeHandler(req, res) {
  const cleanUrl = req.url.split("?")[0].replace(/\/$/, "");
  const task = tasks.find((task) => {
    return task.method === req.method && task.path === cleanUrl;
  });

  if (task) {
    return task.controller({ req, res, database });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}
