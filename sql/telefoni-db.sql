-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `telefoni-za-vas`;
CREATE DATABASE `telefoni-za-vas` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `telefoni-za-vas`;

DROP TABLE IF EXISTS `telefoni`;
CREATE TABLE `telefoni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ime` varchar(30) NOT NULL,
  `slika` varchar(200) NOT NULL,
  `cena` int(11) NOT NULL,
  `brend` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `telefoni` (`id`, `ime`, `slika`, `cena`, `brend`) VALUES
(1,	'Honor p10',	'slika1',	250,	'Huawei'),
(2,	'a10',	'slika2',	200,	'Samsung');

-- 2020-01-08 23:02:01
