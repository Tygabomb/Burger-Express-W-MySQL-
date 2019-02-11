
--  Create the database
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table burgers
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	
);

