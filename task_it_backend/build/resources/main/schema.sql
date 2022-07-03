
drop table if exists "project_members";
drop table if exists "project_managers";
drop table if exists "tasks";
drop table if exists "projects";

drop table if exists "user_roles";
drop table if exists "users";
drop table if exists "roles";

CREATE TABLE "users"(
    id bigserial PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    user_name varchar(20) NOT NULL UNIQUE,
    password varchar(120) NOT NULL,
    email varchar(50) NOT NULL UNIQUE
);

CREATE TABLE "roles"(
    id serial PRIMARY KEY,
    role varchar(20)
);

CREATE TABLE "user_roles"(
    id serial PRIMARY KEY,
    user_id bigint REFERENCES users,
    role_id int REFERENCES roles
);

CREATE TABLE "projects"(
    id bigserial PRIMARY KEY,
    keyword varchar(10) NOT NULL UNIQUE,
    name varchar(50) NOT NULL UNIQUE,
    description varchar(500),
    color varchar(20)
);

CREATE TABLE "project_managers"(
    id bigserial PRIMARY KEY,
    project_id bigint REFERENCES projects,
    manager_id bigint REFERENCES users
);

CREATE TABLE "project_members"(
    id bigserial PRIMARY KEY,
    project_id bigint REFERENCES projects,
    member_id bigint REFERENCES users
);

CREATE TABLE "tasks"(
    id bigserial PRIMARY KEY,
    title varchar(50) NOT NULL,
    project_id bigint REFERENCES projects,
    priority int,
    description varchar(1000),
    assignee bigint REFERENCES users
);