CREATE DATABASE  IF NOT EXISTS `avicenna` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `avicenna`;
-- MySQL dump 10.13  Distrib 8.0.30, for Linux (x86_64)
--
-- Host: localhost    Database: avicenna
-- ------------------------------------------------------
-- Server version	8.0.30-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pacientes_habitos`
--

DROP TABLE IF EXISTS `pacientes_habitos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes_habitos` (
  `idpaciente` int NOT NULL,
  `cantidad_cigarrillos_dia` int unsigned DEFAULT NULL,
  `comienzo_fuma` date DEFAULT NULL,
  `tiempo_sin_fumar` int unsigned DEFAULT NULL,
  `tiempo_fumador` int unsigned DEFAULT NULL,
  `bebe_alcohol` smallint unsigned DEFAULT NULL,
  `cantidad_alcohol` varchar(10) DEFAULT NULL,
  `comienzo_alcohol` date DEFAULT NULL,
  `ex_alcoholico` smallint unsigned DEFAULT NULL,
  `practica_actividad_fisica` smallint unsigned DEFAULT NULL,
  `frecuencia_actividad_fisica` varchar(100) DEFAULT NULL,
  `horas_semanales_trabajo` int unsigned DEFAULT NULL,
  `evacuacion_intestinal` varchar(100) DEFAULT NULL,
  `diuresis` varchar(100) DEFAULT NULL,
  `sueno` varchar(100) DEFAULT NULL,
  `tipo_dieta` varchar(100) DEFAULT NULL,
  `actividad_sexual` varchar(100) DEFAULT NULL,
  `fuma` smallint unsigned DEFAULT NULL,
  `practica_actividad_fisica_detalle` text,
  PRIMARY KEY (`idpaciente`),
  KEY `habitos_FKIndex1` (`idpaciente`),
  CONSTRAINT `pacientes_habitos_ibfk_1` FOREIGN KEY (`idpaciente`) REFERENCES `pacientes` (`idpaciente`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes_habitos`
--

LOCK TABLES `pacientes_habitos` WRITE;
/*!40000 ALTER TABLE `pacientes_habitos` DISABLE KEYS */;
INSERT INTO `pacientes_habitos` VALUES (6168,15,'0000-00-00',NULL,40,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(80811,4,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(114001,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,0,' '),(131410,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,'S/p','S/p',NULL,NULL,NULL,0,' '),(148810,0,'0000-00-00',NULL,NULL,1,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,0,' '),(152209,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,'Habito constipado, catrsis cada 2 a 3 dias','Sin alteracion','8 horas diarias aproximadamente','variada (frutas, verduras, carnes) No salsas.','Si',0,' '),(152811,40,'1967-06-10',NULL,NULL,1,'MINIMO 3 L','1969-06-10',0,0,' ',0,' ',NULL,NULL,NULL,NULL,0,' '),(164434,3,'0000-00-00',NULL,12,0,'0','0000-00-00',0,0,' ',0,' ',' ',NULL,NULL,NULL,1,' '),(191603,0,'0000-00-00',6,5,0,'0','0000-00-00',0,0,' ',0,'sin alteraciones, en forma diaria','sin disuria','6-8 horas diarias','variada','si',0,' '),(195491,20,'0000-00-00',NULL,35,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(203513,0,'0000-00-00',NULL,NULL,1,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(203906,0,'0000-00-00',NULL,NULL,1,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(206971,5,'0000-00-00',NULL,6,0,'0','0000-00-00',0,0,' ',0,' -',' ',NULL,'completa',NULL,1,' '),(207505,20,'1987-00-00',NULL,23,1,'0','0000-00-00',0,0,' ',0,'diaria',NULL,NULL,NULL,NULL,1,' '),(208088,10,'1960-00-00',NULL,48,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(208144,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,1,'3 veces x semana',0,'c/4 dias',NULL,'bueno','balanceada','si',0,'aerobico'),(208236,10,'2005-02-01',5,3,1,'5 Litros','0000-00-00',1,1,'3 veces por semana',40,'si ','si','si','vegetal','3 veces por semana',1,'futbol, tenis'),(208271,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,'s/*p','s/p',NULL,'variada',NULL,0,' '),(208431,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',' ','ok','completa',NULL,0,'gimnasia'),(208460,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,1,'diariamente',0,' ',NULL,NULL,NULL,NULL,0,'futbol'),(208747,2,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(208855,20,'0000-00-00',10,25,0,'0','0000-00-00',0,1,'3/7',40,'7/7','6/24','7 hrs','\"Trato de cuidarme\"',NULL,0,'Gimnasio'),(208910,30,'0000-00-00',NULL,13,1,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(208951,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,0,' '),(209181,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,1,'2-3 veces x semana',36,'diaria',NULL,NULL,NULL,NULL,0,'caminar'),(209715,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,1,'cada 15 dias',48,'diaria',NULL,'insomnio','variada','no',0,'football'),(211402,20,'0000-00-00',NULL,35,1,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' '),(212334,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,'presento 2 deposiciones líquidas en las últimas 24 horas','s/p',NULL,'variada','heterosexual, pareja estable hasta hace 8 meses.',0,' '),(230684,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,'variada',NULL,0,' '),(230755,10,'0000-00-00',3,30,1,'350 ml','0000-00-00',0,1,'varios dia/ semana',0,'si','si','si','variada','si',0,'caminata '),(236399,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,' ',NULL,NULL,NULL,NULL,0,' '),(243867,0,'0000-00-00',NULL,NULL,0,'0','0000-00-00',0,0,' ',0,'Normal','Normal','Normal','dice comer mucho',NULL,0,'No realiza'),(387876,0,'2012-01-01',NULL,5,1,'0','2012-01-01',0,0,' ',0,' ',NULL,NULL,NULL,NULL,1,' ');
/*!40000 ALTER TABLE `pacientes_habitos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-29 14:53:12
