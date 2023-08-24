import { createTask } from '../UI/task';
import {
  todoListElm,
  highPriorityContainerElm,
  mediumPriorityContainerElm,
  lowPriorityContainerElm,
} from '../UI/todolist';
import { currentProject } from './projects';
import { createAddTask } from '../UI/taskAdder';
import { todoFormElm } from '../UI/todoForm';
import { addTodayTasks } from './todayTodoList';

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
  addTodayTasks();
  currentProject.tasks.forEach((task) => appendTaskByPriority(task));
  todoListElm.appendChild(createAddTask());
};

export const appendTask = () => {
  let lastTask = currentProject.tasks[currentProject.tasks.length - 1];
  appendTaskByPriority(lastTask);
};

export const appendEditedTask = (editedTask, initialTask) => {
  if (initialTask !== undefined && editedTask.priority !== initialTask.priority)
    return appendTaskByPriority(editedTask);

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

const appendTaskByPriority = (taskObj) => {
  if (taskObj.priority === 'high')
    highPriorityContainerElm.appendChild(
      createTask(
        {
          name: taskObj.name,
          desc: taskObj.desc,
          dueDate: taskObj.dueDate,
        },
        taskObj.priority,
        taskObj
      )
    );
  if (taskObj.priority === 'medium')
    mediumPriorityContainerElm.appendChild(
      createTask(
        {
          name: taskObj.name,
          desc: taskObj.desc,
          dueDate: taskObj.dueDate,
        },
        taskObj.priority,
        taskObj
      )
    );
  if (taskObj.priority === 'low') {
    lowPriorityContainerElm.appendChild(
      createTask(
        {
          name: taskObj.name,
          desc: taskObj.desc,
          dueDate: taskObj.dueDate,
        },
        taskObj.priority,
        taskObj
      )
    );
  }
};
