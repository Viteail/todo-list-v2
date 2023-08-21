import { createTodoForm } from '../UI/todoForm';
import { currentProject } from './projects';
import { removeElm, removeTodoForm } from './remove';
import {
  todoFormElms,
  attachValidClass,
  validateForm,
  formatDate,
  emptyTodoFormElms,
} from './addtask';
import { appendEditedTask } from './Tasks';

export let editedTaskObj;
export let isEdit;

export const editTask = (editBtn, taskObj) => {
  editBtn.addEventListener('click', () => {
    if (isEdit) {
      appendEditedTask(editedTaskObj);
      removeTodoForm();
    }
    isEdit = true;
    let editedTask = currentProject.tasks.filter(
      (task) => task.elm === taskObj.elm
    );
    editedTask = editedTask[0];
    editedTaskObj = editedTask;
    taskObj.elm.insertAdjacentElement('afterend', createTodoForm(isEdit));
    insertTaskInfo(editedTask);
    removeElm(taskObj.elm);
  });
};

const insertTaskInfo = (editedTask) => {
  todoFormElms[0].value = editedTask.name;
  todoFormElms[1].value = editedTask.desc;
  todoFormElms[2].value = formatDateDefault(editedTask.dueDate);
  todoFormElms[3].value = editedTask.priority;
};

const formatDateDefault = (dueDate) => {
  return dueDate.replace(/-/gm, ' ').split(' ').reverse().join('-');
};

export const saveTask = (saveBtn) => {
  if (!isEdit) return;
  attachValidClass(isEdit);
  saveBtn.addEventListener('click', () => {
    if (!validateForm() || !isEdit) return;
    editedTaskObj.name = todoFormElms[0].value;
    editedTaskObj.desc = todoFormElms[1].value;
    editedTaskObj.dueDate = formatDate(todoFormElms[2].value);
    editedTaskObj.priority = todoFormElms[3].value;
    appendEditedTask(editedTaskObj);
    removeTodoForm();
    emptyTodoFormElms();
    isEdit = false;
  });
};
