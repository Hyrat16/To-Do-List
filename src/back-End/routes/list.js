import { create } from "../controllers/taskList.js";
import { getTaskList } from "../controllers/getTaskList.js";
import { remove } from "../controllers/deleteID.js";

export const TaskList = [
  {
    method: "POST",
    path: "/tasks",
    controller: create,
  },
  {
    method: "DELETE",
    path: "/tasks/:id",
    controller: remove,
  },
  {
    method: "GET",
    path: "/tasks",
    controller: getTaskList,
  },
];
