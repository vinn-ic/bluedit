create database bluedb;

use bluedb;

create table users (

	id int auto_increment primary key,
	username varchar(100),
	password varchar(250)

);


CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    post TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


//*  mysql> select row_number() over (order by id) -1 as idx, id, title, post, created_at from posts; *\\
