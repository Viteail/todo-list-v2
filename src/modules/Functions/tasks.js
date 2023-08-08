import { createTask } from '../UI/task';
import { todoListElm } from './cancel';

export class Task {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export let tasks = [];

export const loadTasks = () => {
  tasks.forEach((task) =>
    todoListElm.appendChild(
      createTask(
        {
          name: task.name,
          desc: task.desc,
          dueDate: task.dueDate,
        },
        task.priority
      )
    )
  );
};

export const appendTask = () => {
  let lastTask = tasks[tasks.length - 1];
  todoListElm.appendChild(
    createTask(
      {
        name: lastTask.name,
        desc: lastTask.desc,
        dueDate: lastTask.dueDate,
      },
      lastTask.priority
    )
  );
};
