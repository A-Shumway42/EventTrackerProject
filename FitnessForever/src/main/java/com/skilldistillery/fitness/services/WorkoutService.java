package com.skilldistillery.fitness.services;

import java.util.List;

import com.skilldistillery.fitness.entities.Workout;

public interface WorkoutService {

	List<Workout> getAllWorkouts();

	Workout getWorkoutById(Integer workoutId);

	Workout addNewWorkout(Workout workout);

	boolean deleteWorkout(Integer workoutId);

	Workout updateWorkout(Workout workout);
}
