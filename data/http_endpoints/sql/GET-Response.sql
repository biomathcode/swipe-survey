/* Getting Started:
Enter "USE {database};" before entering your SQL statements.
Type "--your question" + Enter to try out AI-generated SQL queries
Declare a parameter like "Where id = ${arg}".
*/
use test;

SELECT (SELECT COUNT(id) from `Response` ) AS responses, (SELECT COUNT(id) from `User`) AS users, (SELECT COUNT(id) from `Survey`) AS surveys, (SELECT COUNT(id) from `Question`) AS questions from DUAL;
