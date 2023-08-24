import { projects, currentProject } from './projects';

export const addTodayTasks = () => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  todayTodoList.tasks = todayTodoList.tasks.concat(
    getNoDublicateTasks(todayTodoList)
  );
  removeNonTodayTasks(todayTodoList);
};

export const getTodayDate = () => {
  const date = new Date();
  const currentDay = String(date.getDate()).padStart(2, '0');
  const currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  const currentYear = date.getFullYear();
  const currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
  return currentDate;
};

const getTodayTasks = (todayTodoList) => {
  const tasks = [];
  projects.forEach((project) => {
    if (project === todayTodoList) return;
    project.tasks.forEach((item) => {
      if (item.dueDate === getTodayDate()) {
        tasks.push(item);
      }
    });
  });
  return tasks;
};

const getNoDublicateTasks = (todayTodoList) => {
  const verifiedTasks = [];
  const todayTasks = getTodayTasks(todayTodoList);

  todayTasks.forEach((task) => {
    if (!todayTodoList.tasks.includes(task)) verifiedTasks.push(task);
  });

  return verifiedTasks;
};

export const getProjectName = (task) => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  if (currentProject !== todayTodoList) return;
  let projectName;

  projects.forEach((project) => {
    if (project !== todayTodoList && project.tasks.includes(task))
      projectName = project.name;
  });

  return projectName;
};

const removeNonTodayTasks = (todayTodoList) => {
  todayTodoList.tasks.forEach((task, index) => {
    if (task.dueDate !== getTodayDate()) todayTodoList.tasks.splice(index, 1);
  });
};
