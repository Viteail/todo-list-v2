import { createTask } from '../UI/task';
import { todoListElm } from '../UI/todolist';
import { currentProject } from './projects';
import { createAddTask } from '../UI/taskAdder';
import { todoFormElm } from '../UI/todoForm';

export class Task {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.elm = '';
    this.checklist = '';
  }
}

export const loadTasks = () => {
  currentProject.tasks.forEach((task) =>
    todoListElm.appendChild(
      createTask(
        {
          name: task.name,
          desc: task.desc,
          dueDate: task.dueDate,
        },
        task.priority,
        task
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
      lastTask.priority,
      lastTask
    )
  );
};

export const appendEditedTask = (editedTask) => {
  todoFormElm.insertAdjacentElement(
    'afterend',
    createTask(
      {
        name: editedTask.name,
        desc: editedTask.desc,
        dueDate: editedTask.dueDate,
      },
      editedTask.priority,
      editedTask
    )
  );
};

export const removeTaskAdder = () => {
  for (const elm of todoListElm.childNodes) {
    if (elm.classList.contains('task-add')) elm.remove();
  }
};
