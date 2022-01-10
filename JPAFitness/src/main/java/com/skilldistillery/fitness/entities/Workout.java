package com.skilldistillery.fitness.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Workout {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "type")
	private String workoutType;

	@Column(name = "workout_start")
	private LocalDateTime workoutStart;
	@Column(name = "workout_end")
	private LocalDateTime workoutEnd;
	@Column(name = "miles")
	private Double milesRan;
	@Column(name = "exercises")
	private String exercises;
	@Column(name = "set_per_workout")
	private Integer setsPerWorkout;
	@Column(name = "reps_per_workout")
	private Integer repsPerWorkout;

	public Workout() {

	}

	public Workout(Integer id, String workoutType, LocalDateTime workoutStart, LocalDateTime workoutEnd,
			Double milesRan, String exercises, Integer setsPerWorkout, Integer repsPerWorkout) {
		super();
		this.id = id;
		this.workoutType = workoutType;
		this.workoutStart = workoutStart;
		this.workoutEnd = workoutEnd;
		this.milesRan = milesRan;
		this.exercises = exercises;
		this.setsPerWorkout = setsPerWorkout;
		this.repsPerWorkout = repsPerWorkout;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getWorkoutType() {
		return workoutType;
	}

	public void setWorkoutType(String workoutType) {
		this.workoutType = workoutType;
	}

	public LocalDateTime getWorkoutStart() {
		return workoutStart;
	}

	public void setWorkoutStart(LocalDateTime workoutStart) {
		this.workoutStart = workoutStart;
	}

	public LocalDateTime getWorkoutEnd() {
		return workoutEnd;
	}

	public void setWorkoutEnd(LocalDateTime workoutEnd) {
		this.workoutEnd = workoutEnd;
	}

	public Double getMilesRan() {
		return milesRan;
	}

	public void setMilesRan(Double milesRan) {
		this.milesRan = milesRan;
	}

	public String getExercises() {
		return exercises;
	}

	public void setExercises(String exercises) {
		this.exercises = exercises;
	}

	public Integer getSetsPerWorkout() {
		return setsPerWorkout;
	}

	public void setSetsPerWorkout(Integer setsPerWorkout) {
		this.setsPerWorkout = setsPerWorkout;
	}

	public Integer getRepsPerWorkout() {
		return repsPerWorkout;
	}

	public void setRepsPerWorkout(Integer repsPerWorkout) {
		this.repsPerWorkout = repsPerWorkout;
	}

	@Override
	public int hashCode() {
		return Objects.hash(exercises, id, milesRan, repsPerWorkout, setsPerWorkout, workoutEnd, workoutStart,
				workoutType);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Workout other = (Workout) obj;
		return Objects.equals(exercises, other.exercises) && id == other.id && Objects.equals(milesRan, other.milesRan)
				&& Objects.equals(repsPerWorkout, other.repsPerWorkout)
				&& Objects.equals(setsPerWorkout, other.setsPerWorkout) && Objects.equals(workoutEnd, other.workoutEnd)
				&& Objects.equals(workoutStart, other.workoutStart) && Objects.equals(workoutType, other.workoutType);
	}

	@Override
	public String toString() {
		return "Workout [id=" + id + ", workoutType=" + workoutType + ", workoutStart=" + workoutStart + ", workoutEnd="
				+ workoutEnd + ", milesRan=" + milesRan + ", exercises=" + exercises + ", setsPerWorkout="
				+ setsPerWorkout + ", repsPerWorkout=" + repsPerWorkout + "]";
	}

}
