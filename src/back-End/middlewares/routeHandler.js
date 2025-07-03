import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database();

export function routeHandler(req, res) {
  //const cleanUrl = req.url.split("?")[0].replace(/\/$/, "");
  const task = routes.find((task) => {
    return task.method === req.method && task.path.test(req.url);
  });

  if (task) {
    const taskParams = req.url.match(task.path);

    // Adiciona os parâmetros de rota (exceto 'query')
    const { query, ...params } = taskParams.groups || {};
    req.params = params;
    req.query = query ? extractQueryParams(query) : {};

    return task.controller({ req, res, database });
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not found" }));
}
