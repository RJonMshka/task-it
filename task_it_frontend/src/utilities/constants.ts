export const METHOD_TYPE_GET = "GET";
export const METHOD_TYPE_POST = "POST";
export const METHOD_TYPE_PUT = "PUT";
export const METHOD_TYPE_PATCH = "PATCH";
export const METHOD_TYPE_DELETE = "DELETE";
export const API_PATH = "/api";

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

