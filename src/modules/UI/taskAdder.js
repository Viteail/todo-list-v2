import { addTaskEvent } from '../Functions/addtask';

export const createAddTask = () => {
  const taskAdder = document.createElement('div');
  taskAdder.classList.add('task-add');
  taskAdder.appendChild(createAddTaskBtn());
  taskAdder.appendChild(createAddTaskText());
  addTaskEvent(taskAdder);
  return taskAdder;
};

const createAddTaskBtn = () => {
  const taskAdderBtn = document.createElement('div');
  taskAdderBtn.classList.add('task-add-btn');
  taskAdderBtn.appendChild(createAddTaskIcon());
  return taskAdderBtn;
};

const createAddTaskIcon = () => {
  const taskAdderIcon = document.createElement('img');
  taskAdderIcon.classList.add('task-add-icon');
  taskAdderIcon.src = 'icons/plus-green.svg';
  return taskAdderIcon;
};

const createAddTaskText = () => {
  const taskAdderText = document.createElement('div');
  taskAdderText.classList.add('task-add-text');
  taskAdderText.textContent = 'Add task';
  return taskAdderText;
};
