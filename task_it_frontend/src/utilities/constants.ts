const API_PROTOCOL = "http://";
const HOSTNAME = "localhost";
const PORT = "8080";
const API_PATH = "/api";

export const BASE_URL = `${API_PROTOCOL}${HOSTNAME}:${PORT}${API_PATH}`;

// Auth api paths
export const AUTH_API_LOGIN = "/auth/login";
export const AUTH_API_REGISTER = "/auth/register";
export const AUTH_API_AUTHENTICATION = "/auth/get_authentication";
export const AUTH_API_LOGOUT = "/auth/logout";

// User paths
export const API_USER = "/user";
export const API_USER_DETAILs = "/user/details";

// Projects
export const CREATE_PROJECT = "/projects/create";
export const PROJECT_LIST = "/projects/list_projects";

// Tasks
export const CREATE_TASK = "/projects/list_projects";
export const TASK_LIST = "/tasks/my_tasks";

export const TASKS_PER_PROJECT = (pid: number) => `/tasks/project_tasks${pid ? `?pid=${pid}`: ""}`;  

