USE test;
UPDATE `Question` SET `content` = IF(length(${content})>0,${content},`content`),
`createdAt` = IF(length(${createdAt})>0,${createdAt},`createdAt`),
`updatedAt` = IF(length(${updatedAt})>0,${updatedAt},`updatedAt`),
`surveyId` = IF(length(${surveyId})>0,${surveyId},`surveyId`),
`email` = IF(length(${email})>0,${email},`email`) 
 WHERE `id` = ${id} ;