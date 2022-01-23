package com.skilldistillery.fitness.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.fitness.entities.Workout;
import com.skilldistillery.fitness.services.WorkoutService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4202" })
public class WorkoutController {

	@Autowired
	private WorkoutService workoutSvc;

	@GetMapping("workouts")
	public List<Workout> showAllWorkouts() {
		return workoutSvc.getAllWorkouts();
	}

	@GetMapping("workouts/{workoutId}")
	public Workout findById(@PathVariable Integer workoutId) {
		Workout workout = workoutSvc.getWorkoutById(workoutId);
		return workout;
	}

	@PostMapping("workouts")
	public Workout createWorkout(@RequestBody Workout workout, HttpServletRequest req, HttpServletResponse res) {
		System.out.println(workout);
		try {
			workout = workoutSvc.addNewWorkout(workout);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(workout.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			res.setStatus(400);
			workout = null;
		}
		return workout;

	}

	@DeleteMapping("workouts/{workoutId}")
	public void deleteWorkout(@PathVariable Integer workoutId, HttpServletResponse res) {
		try {
			boolean isDeleted = workoutSvc.deleteWorkout(workoutId);
			if (isDeleted) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
		}
	}

	@PutMapping("workouts")
	public Workout updateWorkout(@RequestBody Workout workout, HttpServletResponse res) {
		Workout newWorkout = null;
		try {
			newWorkout = workoutSvc.updateWorkout(workout);
			if (newWorkout == null) {
				res.setStatus(404);
			}
			res.setStatus(201);
		} catch (Exception e) {
			res.setStatus(400);
			newWorkout = null;
		}
		return newWorkout;

	}

}
