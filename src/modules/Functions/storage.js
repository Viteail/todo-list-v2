import { projects } from './projects';

export const storageProjects = () => {
  const todayTodoList = projects.find((project) => project.name === 'Today');
  const inboxTodoList = projects.find((project) => project.name === 'Inbox');
  const nonDefaultProjects = projects.filter(
    (project) => project !== todayTodoList && project !== inboxTodoList
  );
  console.log(nonDefaultProjects);
  localStorage.setItem('projects', JSON.stringify(nonDefaultProjects));
  localStorage.setItem('inboxTodoTasks', JSON.stringify(inboxTodoList.tasks));
};
