CREATE DATABASE `dotapos`;

CREATE TABLE `dotapos`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `createdon` DATETIME NULL,
  `updatedon` DATETIME NULL,
  `deletedon` DATETIME NULL,
  PRIMARY KEY (`id`));

INSERT INTO `dotapos`.`user` (`firstname`, `lastname`, `createdon`) VALUES ('kenny', 'susanto', now());