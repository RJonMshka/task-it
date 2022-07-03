drop table if exists users;
drop table if exists country;

CREATE TABLE users (
    id bigint(20) PRIMARY NOT NULL,
    first_name varchar(30),
    last_name varchar(30),
    user_name varchar(20) NOT NULL UNIQUE,
    password varchar(120) NOT NULL,
    email varchar(50) NOT NULL UNIQUE
);

CREATE TABLE roles (
    id int(100) PRIMARY,
    role varchar(20)
);