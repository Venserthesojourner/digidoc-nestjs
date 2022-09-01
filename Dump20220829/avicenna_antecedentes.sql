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
-- Table structure for table `antecedentes`
--

DROP TABLE IF EXISTS `antecedentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `antecedentes` (
  `idpaciente` int NOT NULL,
  `descripcion` longtext,
  `paciente_id` int DEFAULT NULL,
  `antecedente_ginecobstetrico_id` int DEFAULT NULL,
  `antecedentes_metrorragia_id` int DEFAULT NULL,
  `antecedentes_quirurgicos` varchar(45) DEFAULT NULL,
  `antecedentes_alergicos` varchar(45) DEFAULT NULL,
  `antecedentes_medicacion_actual` varchar(45) DEFAULT NULL,
  `antecedentes_sociales` varchar(45) DEFAULT NULL,
  `antecedentes_obstetricos` varchar(45) DEFAULT NULL,
  `antecedentescol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idpaciente`),
  KEY `fk_antecedentes_1_idx` (`paciente_id`),
  KEY `fk_antecedentes_2_idx` (`antecedente_ginecobstetrico_id`),
  KEY `fk_antecedentes_3_idx` (`antecedentes_metrorragia_id`),
  CONSTRAINT `fk_antecedentes_1` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`idpaciente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_antecedentes_2` FOREIGN KEY (`antecedente_ginecobstetrico_id`) REFERENCES `pacientes_antecedentes_ginecobstetricos` (`idpaciente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_antecedentes_3` FOREIGN KEY (`antecedentes_metrorragia_id`) REFERENCES `pacientes_antecedentes_metrorragia` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `antecedentes`
--

LOCK TABLES `antecedentes` WRITE;
/*!40000 ALTER TABLE `antecedentes` DISABLE KEYS */;
INSERT INTO `antecedentes` VALUES (194180,'Nefrectomía 28/09/07, cirugía de aneurisma de aorta.\r\nAntecedente de gastritis crónica en tratamiento con omeprazol 20mg/d.\r\n22/04/08 Trae laboratorio, esta caminando y haciendo la dieta.\r\nPendiente nuevo clearence.\r\n15/07/08 Pido laboratorio',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(208722,'    0 +        LE  dicen   \" CARINA \" ..............\r\n                                                    26 AÑOS   I gesta  .- Paciente de Farias .... Conizacion 2007, Farias , por CIN 2 .- Con HPV .- \r\n101008: Ferreyra -  35,5 sem -  Tien LAB del 240708,  con Hb 10,7   PIDO LAB .-   Tiene ECO de  33 sem,  con 2055 gr  (  NO LA TRAJO )   .-   66,6 Kg - 110/70 - 30,5 cm - CI -  140 x\' -  TOMO CULTIVO .-   Hara curso Preparto   en el HELLER,  desde el 14/10.-\r\n171008: 36,4 sem - 67,3 Kg - 31,5 cm - CD 140 x\' -',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `antecedentes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-01 14:59:16
