--
-- DDL to setup the database.
--

CREATE TABLE user (
        id INTEGER PRIMARY KEY,
        acronym TEXT,
        password TEXT,
        name TEXT
);

INSERT INTO user
    (acronym, password, name)
VALUES
    ('doe', 'doe', 'John/Jane Doe'),
    ('admin', 'admin', 'Administrator'),
    ('santa', 'secretsanta', 'Santa Claus')
;

SELECT * FROM user;

-- SQL injection example
SELECT
    *
FROM user
WHERE
    acronym LIKE 'doe'
    OR name LIKE 'doe'
;
