package com.skilldistillery.fitness.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.skilldistillery.fitness.entities.Workout;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {

	@Query(value = "SELECT * FROM workout WHERE id = :wid", nativeQuery = true)
	Workout findIndividualWorkoutById(@Param("wid") Integer workoutId);

}
