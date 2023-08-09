import { showAddProject } from '../Functions/mouseover';

export const createSidebar = (content) => {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  content.appendChild(sidebar);
  sidebar.appendChild(createTopMenu());
  sidebar.appendChild(createProjectMenu());
};

const createTopMenu = () => {
  const topMenu = document.createElement('div');
  topMenu.classList.add('top-menu');
  topMenu.appendChild(createInbox());
  topMenu.appendChild(createTodayList());
  return topMenu;
};

const createInbox = () => {
  const inbox = document.createElement('div');
  inbox.classList.add('inbox');
  inbox.appendChild(createInboxIcon());
  inbox.appendChild(createInboxText());
  return inbox;
};

const createInboxIcon = () => {
  const inboxIcon = document.createElement('img');
  inboxIcon.classList.add('inbox-icon');
  inboxIcon.src = 'icons/inbox.svg';
  return inboxIcon;
};

const createInboxText = () => {
  const inboxText = document.createElement('div');
  inboxText.classList.add('inbox-text');
  inboxText.textContent = 'Inbox';
  return inboxText;
};

const createTodayList = () => {
  const todayList = document.createElement('div');
  todayList.classList.add('today-list');
  todayList.appendChild(createTodayIcon());
  todayList.appendChild(createTodayText());
  return todayList;
};

const createTodayIcon = () => {
  const todayIcon = document.createElement('img');
  todayIcon.classList.add('today-icon');
  todayIcon.src = 'icons/today.svg';
  return todayIcon;
};

const createTodayText = () => {
  const todayText = document.createElement('div');
  todayText.classList.add('today-text');
  todayText.textContent = 'Today';
  return todayText;
};

const createProjectMenu = () => {
  const projectMenu = document.createElement('div');
  projectMenu.classList.add('project-menu');
  projectMenu.appendChild(createProjectsContainer());
  return projectMenu;
};

const createProjectsContainer = () => {
  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');
  projectsContainer.appendChild(createProjectsText());
  projectsContainer.appendChild(createAddProjectButton());
  showAddProject(projectsContainer);
  return projectsContainer;
};

const createProjectsText = () => {
  const projectsText = document.createElement('div');
  projectsText.classList.add('projects-text');
  projectsText.textContent = 'Projects';
  return projectsText;
};

const createAddProjectButton = () => {
  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('addproject-btn', 'invisible');
  addProjectBtn.appendChild(createAddProjectIcon());
  return addProjectBtn;
};

const createAddProjectIcon = () => {
  const addProjectIcon = document.createElement('img');
  addProjectIcon.classList.add('addproject-icon');
  addProjectIcon.src = 'icons/plus.svg';
  return addProjectIcon;
};
