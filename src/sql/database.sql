CREATE DATABASE fsaldta_web_api;

CREATE TABLE members(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    resume TEXT,
    image_url TEXT
);

DESCRIBE members;