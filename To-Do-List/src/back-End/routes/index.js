import { TaskList } from "./list.js";
import { parseRouthPath } from "../utils/parseRoutePath.js";

export const routes = [...TaskList].map((route) => ({
  ...route,
  path: parseRouthPath(route.path),
}));
