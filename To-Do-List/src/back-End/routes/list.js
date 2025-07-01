import { create } from "../controllers/taskList.js";
import { getTaskList } from "../controllers/getTaskList.js";

export const TaskList = [
  {
    method: "POST",
    path: "/tasks",
    controller: create,
  },
  /* {
    method: "DELETE",
    path: "/task/:id",
    controller: create,
  } */
  {
    method: "GET",
    path: "/tasks",
    controller: getTaskList,
  },
];
