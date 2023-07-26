USE test;
UPDATE `Survey` SET `createdAt` = IF(length(${createdAt})>0,${createdAt},`createdAt`),
`updatedAt` = IF(length(${updatedAt})>0,${updatedAt},`updatedAt`),
`title` = IF(length(${title})>0,${title},`title`),
`email` = IF(length(${email})>0,${email},`email`) 
 WHERE `id` = ${id} ;