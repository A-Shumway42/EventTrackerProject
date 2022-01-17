-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema fitnessdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `fitnessdb` ;

-- -----------------------------------------------------
-- Schema fitnessdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fitnessdb` DEFAULT CHARACTER SET utf8 ;
USE `fitnessdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  `workout_start` DATETIME NULL,
  `workout_end` DATETIME NULL,
  `miles` DOUBLE NULL,
  `exercises` VARCHAR(80) NULL,
  `set_per_workout` INT NULL,
  `reps_per_workout` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS fitnessuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'fitnessuser'@'localhost' IDENTIFIED BY 'fitness';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'fitnessuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `fitnessdb`;
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (1, 'Cardio', '2022-01-03 12:30:00', '2022-01-03 14:30:00', 5, NULL, NULL, NULL);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (2, 'Chest', '2022-01-04 12:30:00', '2022-01-04 14:30:00', NULL, 'Bench, Incline, DB Bench, Flies', 4, 15);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (3, 'Back', '2022-01-05 13:30:00', '2022-01-05 15:30:00', NULL, 'Deadlift, Lat Pulls, DB Pulls, Reverse Flies', 3, 100);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (4, 'Legs', '2022-01-06 12:30:00', '2022-01-06 14:30:00', NULL, 'Squats, Leg Ext, Leg Curls, Calve Press, Leg Press ', 4, 12);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (5, 'Arms', '2022-01-07 12:30:00', '2022-01-07 14:30:00', NULL, 'DB Curls, Tricep Ext, Barbell Curls, Tricep Pushdowns', 4, 20);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (6, 'Cardio & HIIT', '2022-01-08 12:30:00', '2022-01-08 14:30:00', 2, 'Box Jumps, Wall Balls, Sprints, Burpees', 3, 25);
INSERT INTO `workout` (`id`, `type`, `workout_start`, `workout_end`, `miles`, `exercises`, `set_per_workout`, `reps_per_workout`) VALUES (7, 'Cardio and Chicken', NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;

