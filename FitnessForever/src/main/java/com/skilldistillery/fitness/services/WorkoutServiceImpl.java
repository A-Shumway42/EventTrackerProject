package com.skilldistillery.fitness.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.fitness.entities.Workout;
import com.skilldistillery.fitness.repositories.WorkoutRepository;

@Service
public class WorkoutServiceImpl implements WorkoutService {

	@Autowired
	private WorkoutRepository workoutRepo;

	@Override
	public List<Workout> getAllWorkouts() {
		return workoutRepo.findAll();
	}

	@Override
	public Workout getWorkoutById(Integer workoutId) {
		return workoutRepo.findIndividualWorkoutById(workoutId);
	}

	@Override
	public Workout addNewWorkout(Workout workout) {
		return workoutRepo.saveAndFlush(workout);
	}

	@Override
	public boolean deleteWorkout(Integer workoutId) {
		boolean isDeleted = false;
		if (workoutRepo.existsById(workoutId)) {
			workoutRepo.deleteById(workoutId);
			isDeleted = true;
		}
		return isDeleted;
	}

	@Override
	public Workout updateWorkout(Workout workout) {
		Optional<Workout> workoutOp = workoutRepo.findById(workout.getId());
		if (workoutOp.isPresent()) {
			Workout updatedWorkout = workoutOp.get();
			updatedWorkout.setWorkoutType(workout.getWorkoutType());
			updatedWorkout.setWorkoutStart(workout.getWorkoutStart());
			updatedWorkout.setWorkoutEnd(workout.getWorkoutEnd());
			updatedWorkout.setMilesRan(workout.getMilesRan());
			updatedWorkout.setExercises(workout.getExercises());
			updatedWorkout.setSetsPerWorkout(workout.getSetsPerWorkout());
			updatedWorkout.setRepsPerWorkout(workout.getRepsPerWorkout());
			return workoutRepo.saveAndFlush(updatedWorkout);
		}
		return null;
	}

}
