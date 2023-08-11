import { createTask } from '../UI/task';
import { todoListElm } from '../UI/todolist';
import { currentProject } from './projects';
import { createAddTask } from '../UI/taskAdder';

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
  currentProject.tasks.forEach((task) =>
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
  todoListElm.appendChild(createAddTask());
};

export const appendTask = () => {
  let lastTask = currentProject.tasks[currentProject.tasks.length - 1];
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

export const removeTaskAdder = () => {
  for (const elm of todoListElm.childNodes) {
    if (elm.classList.contains('task-add')) elm.remove();
  }
};