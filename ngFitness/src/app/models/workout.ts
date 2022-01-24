export class Workout {
  id: number;
  workoutType: string;
  workoutStart?: string | undefined;
  workoutEnd?: string | undefined;
  milesRan?: number | undefined;
  exercises?: string | undefined;
  setsPerWorkout?: number | undefined;
  repsPerWorkout?: number | undefined;

  constructor(
    id: number = 0, workoutType: string = '', workoutStart: string = '', workoutEnd: string = '', milesRan: number = 0, exercises: string = '', setsPerWorkout: number = 0, repsPerWorkout: number = 0
  ){
  this.id = id;
  this.workoutType = workoutType;
  this.workoutStart = workoutStart;
  this.workoutEnd = workoutEnd;
  this.milesRan = milesRan;
  this.exercises = exercises;
  this.setsPerWorkout = setsPerWorkout;
  this.repsPerWorkout = repsPerWorkout;

  }

}
