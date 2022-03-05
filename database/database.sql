/*
Commands Postgres:

show databases: \l
use database: \c database_name
show tables: \dt

*/


CREATE DATABASE firstApi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('Felix', 'felix@test.com'),
    ('Alejandro', 'alejandro@test.com');