create database bluedb;

CREATE USER 'admin'@127.0.0.1 IDENTIFIED BY ' ';

GRANT ALL PRIVILEGES ON bluedb.* TO 'admin'@127.0.0.1;

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

create table comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    comment TEXT NOT NULL,
    data_comment TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE

);

//*  mysql> select row_number() over (order by id) -1 as idx, id, title, post, created_at from posts; *\\
