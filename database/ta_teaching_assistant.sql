-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: ta
-- ------------------------------------------------------
-- Server version	8.0.19

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
-- Table structure for table `teaching_assistant`
--

DROP TABLE IF EXISTS `teaching_assistant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teaching_assistant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `subjects` varchar(255) DEFAULT NULL,
  `speed` varchar(255) DEFAULT NULL,
  `language` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teaching_assistant`
--

LOCK TABLES `teaching_assistant` WRITE;
/*!40000 ALTER TABLE `teaching_assistant` DISABLE KEYS */;
INSERT INTO `teaching_assistant` VALUES (4,'Mr.','Robbie','Den','Proof reading','0.5 per hours','Spenish','1 years','Robbie Den is often being asked to suggest process improvements. Through her daily exposure to copy and procedures, proofreaders can evaluate and recommend changes to create efficiencies.','ta-4.png'),(5,'Miss.','Kiara','Cherry','English, Grammer, plagiarism, proof reading','1 Page per hour','English','5 years','She is an english teacher, who have 5 years of experience in teaching as well as a master\'s degree in teaching. ','ta-2.png'),(6,'Mrs.','Dee','Anderson','Programming Launguage - C, C++, C#','2 Page per hour','Spenish','3 years','He is the ideal candidate who possess superior coding skills, excellent communication, high concentration levels, good task management, and superior problem solving and critical thinking skills.','ta-1.png'),(7,'Mrs.','Greg','Hanger','Social Studies, Manuscripts, Labour Law','5 Page per hour','Spenish','2 years','He is good at Evaluate and grade students\' class work, assignments, papers, and oral presentations.','ta-3.png'),(8,'Miss.','Lisa','John','Sketching, Telegraphy, stenography','1 Page per hour','English','12 years','Lisa John in proficient in Observing, receiving, and otherwise obtaining information from all relevant sources. ','ta-5.png'),(9,'Mr.','Bob','Ander','Accountings, Taxation, Global Economy','5 Page per hour','French','22 years','He teaches courses in business administration and management, such as accounting, finance, human resources, labor and industrial relations, marketing, and operations research. ','ta-6.png'),(10,'Mr.','Robin','Banks','Criminology, psychology, philosophy','1 Page per hour',' French','7 years','Robin Banks promoted from Career Resource Assistant. Enhanced relationships with students and faculty by becoming a key communication foundation in the department. ','ta-7.png'),(11,'Mr.','Polly','Tech','Biology, zoology, botany, Microbiology','4 Page per hour','English','7 years','Polly tech is expert in monitoring student performance, and adjusting teaching strategies and techniques for improved content delivery. She has experience of','ta-8.png'),(12,'Mr.','Pitra','Sudnicki','Proof Reading','4 Page per hour','English','6 years','Pitra Sudnicki has 4 years in workforce. She is expert in Facilitated discussion, written responses and critical thinking. ','ta-9.png'),(13,'Mrs.','Anna','Sthesia','Scientific Editing','2 Page per hour','French','10 years','She oversees the peer review process for submitted manuscripts, recruit high quality submissions to the journal, and promote journal policies.','ta-10.png'),(14,'Mr.','Bob','Frapples','Literature Search','4 Page per hour','English','8 years',' Bob Frapples review manuscripts and book proposals to decide whether books should be published. ','ta-12.png');
/*!40000 ALTER TABLE `teaching_assistant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-30  0:36:28
