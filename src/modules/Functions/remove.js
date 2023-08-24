import { createAddTask } from '../UI/taskAdder';
import { modalElm } from '../UI/modal';
import { todoListElm } from '../UI/todolist';
import { emptyTodoFormElms } from './addtask';
import { currentProject, projects, setDefaultProject } from './projects';
import { todoFormElm } from '../UI/todoForm';
import { editedTaskObj, isEdit } from './edit';
import { appendEditedTask } from './Tasks';
import { storageProjects } from './storage';

export const cancelTodoForm = (btn) => {
  btn.addEventListener('click', () => {
    if (isEdit) appendEditedTask(editedTaskObj);
    removeTodoForm();
  });
};

export const removeTodoForm = () => {
  if (!isEdit) todoListElm.appendChild(createAddTask());
  emptyTodoFormElms();
  todoFormElm.remove();
  isEdit = false;
};

export const cancelModal = (btn) => {
  btn.addEventListener('click', () => removeModal());
};

export const addWindowEvent = () => {
  window.onclick = (e) => {
    if (e.target === modalElm) {
      removeModal();
    }
  };
};

export const removeModal = () => {
  modalElm.remove();
};

export const removeTodoList = () => {
  todoListElm.remove();
};

export const attachEventRemoveTask = (btn, taskObj) => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  btn.addEventListener('click', () => {
    if (currentProject === todayTodoList) {
      projects.forEach((project) => {
        if (project !== todayTodoList && project.tasks.includes(taskObj))
          project.tasks.splice(project.tasks.indexOf(taskObj), 1);
      });
    }
    if (
      currentProject !== todayTodoList &&
      todayTodoList.tasks.includes(taskObj)
    ) {
      todayTodoList.tasks.splice(todayTodoList.tasks.indexOf(taskObj), 1);
    }
    currentProject.tasks.forEach((task, index) => {
      if (task.elm === taskObj.elm) {
        currentProject.tasks.splice(index, 1);
        removeElm(taskObj.elm);
        storageProjects();
      }
    });
  });
};

export const attachEventRemoveProject = (btn, projectElm) => {
  btn.addEventListener('click', () => {
    projects.forEach((project, index) => {
      if (project.elm === projectElm) {
        projects.splice(index, 1);
        setDefaultProject(projectElm);
        removeElm(projectElm);
        storageProjects();
      }
    });
  });
};

export const removeElm = (elm) => {
  elm.remove();
};
