package com.skilldistillery.fitness.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;


class WorkoutTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Workout workout;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAFitness");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		workout = em.find(Workout.class, 6);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		workout = null;
	}

	@Test
	void test_Workout_entity() {
		assertNotNull(workout);
		assertEquals("Cardio & HIIT", workout.getWorkoutType());
		assertEquals(2022, workout.getWorkoutStart().getYear());
		assertEquals(1, workout.getWorkoutStart().getMonthValue());
		assertEquals(8, workout.getWorkoutStart().getDayOfMonth());
		assertEquals(2, workout.getMilesRan());
		assertEquals("Box Jumps, Wall Balls, Sprints, Burpees", workout.getExercises());
		assertEquals(3, workout.getSetsPerWorkout());
		assertEquals(25, workout.getRepsPerWorkout());
		
	}

}
