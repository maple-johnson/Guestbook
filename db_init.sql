CREATE DATABASE guestbook;

use guestbook;

DROP TABLE IF EXISTS signed;

CREATE TABLE signed (
	id INT auto_increment,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    jobTitle VARCHAR(255),
    company VARCHAR(255),
    linkedIn VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    howMet VARCHAR(255),
    other VARCHAR(255),
    message VARCHAR(255),
    mailList VARCHAR(255),
    format VARCHAR(255),
    dateAdded DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

INSERT INTO signed (
	firstName,
    lastName,
    jobTitle,
    company,
    linkedIn,
    email,
    howMet,
    other,
    message,
    mailList,
    format
) VALUES (
	"Maple",
    "Johnson",
    "Student",
    "Green River College",
    "www.linkedin.com/in/maple-johnson-2199a7275",
    "test@test.com",
    "work",
    "",
    "Hope you're doing well!",
    "on",
    "text"
),
(
	"Jane",
    "Doe",
    "Software Dev",
    "Small Company",
    "",
    "email@address.com",
    "",
    "At the Park",
    "Good meeting you! Hope we'll talk again soon!",
    "on",
    "HTML"
),
(
	"John",
    "Doe",
    "Manager",
    "Big Company",
    "",
    "asdf@asdf.com",
    "",
    "",
    "",
    NULL,
    NULL
);


 SELECT * FROM signed;