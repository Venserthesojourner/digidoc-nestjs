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
-- Table structure for table `pacientes_embarazo_controles`
--

DROP TABLE IF EXISTS `pacientes_embarazo_controles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pacientes_embarazo_controles` (
  `idpaciente_embarazo` int NOT NULL,
  `idpaciente_embarazo_controles` int unsigned NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `semanas_amerroneas` int unsigned DEFAULT NULL,
  `peso` varchar(10) DEFAULT NULL,
  `tension_arterial` varchar(10) DEFAULT NULL,
  `altura_uterina` varchar(10) DEFAULT NULL,
  `presentacion` varchar(20) DEFAULT NULL,
  `fcf` varchar(10) DEFAULT NULL,
  `mov_fetal` varchar(10) DEFAULT NULL,
  `observaciones` longtext,
  PRIMARY KEY (`idpaciente_embarazo_controles`),
  KEY `pacientes_embarazo_controles_FKIndex1` (`idpaciente_embarazo`),
  CONSTRAINT `pacientes_embarazo_controles_ibfk_1` FOREIGN KEY (`idpaciente_embarazo`) REFERENCES `pacientes_embarazos` (`idpaciente_embarazo`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pacientes_embarazo_controles`
--

LOCK TABLES `pacientes_embarazo_controles` WRITE;
/*!40000 ALTER TABLE `pacientes_embarazo_controles` DISABLE KEYS */;
INSERT INTO `pacientes_embarazo_controles` VALUES (10,1,'2008-10-17',30,'77.900','100-60','30','CEFALICA','140','si',NULL),(36,2,'2008-11-28',5,'50.100','110-60 ',NULL,'TRANSVERSAL',NULL,NULL,NULL),(70,3,'2009-11-30',16,'62.800','115-75','11','TRANSVERSAL',NULL,'no','pido orina por sintomas'),(89,4,'2010-02-16',33,'71,500','100-60','31','CEFALICA','140','activos',NULL),(100,5,NULL,NULL,NULL,NULL,NULL,'TRANSVERSAL',NULL,NULL,NULL),(104,6,NULL,NULL,NULL,NULL,NULL,'TRANSVERSAL',NULL,NULL,NULL),(104,7,NULL,NULL,NULL,NULL,NULL,'TRANSVERSAL',NULL,NULL,NULL),(104,8,NULL,NULL,NULL,NULL,NULL,'TRANSVERSAL',NULL,NULL,NULL),(117,9,'2010-08-29',38,NULL,'110/70','33','CEFALICA','145','positivos','Ingreso');
/*!40000 ALTER TABLE `pacientes_embarazo_controles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-29 14:53:14
