import { Component, OnInit } from '@angular/core';
import { Workout } from 'src/app/models/workout';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  workouts: Workout[] = [];
  editWorkout: Workout = new Workout();
  newWorkout: Workout = new Workout();
  title = 'Fitness Forever';
  showCreateWorkoutForm = false;
  showUpdateWorkoutForm = false;

  constructor(
    private workoutService: WorkoutService
  ) { }

  ngOnInit(): void {
    this.loadAllWorkouts();
  }

  getNumberOfWorkouts(): number {
    return this.workouts.length;
  }

  showWorkoutForm() {
    this.showCreateWorkoutForm = !this.showCreateWorkoutForm;
  }

  showUpdateForm() {
    if(!this.showUpdateWorkoutForm) {
     this.showUpdateWorkoutForm = !this.showUpdateWorkoutForm;
    }
  }

  loadAllWorkouts() {
    this.workoutService.index().subscribe(
      workouts => {
        this.workouts = workouts;
      },
      wrong => {
        console.error('Home.Component.ts. loadAllWorkouts(): Error retrieving workouts');
        console.log(wrong);
      });
  }

  prepareUpdateWorkout(w: Workout) {
    this.editWorkout = w;
    this.showWorkoutForm();
  }

  updateWorkout(workout: Workout): void {
    this.workoutService.update(workout).subscribe({
      next: (Y) => {
        this.editWorkout = new Workout();
        this.loadAllWorkouts();
      },
      error: (fail) => {
        console.error('Home.Component.ts.updateWorkout(): error on update!');
        console.error(fail);
      }
    });
  }

  deleteWorkout(workoutId: number) {
    this.workoutService.delete(workoutId).subscribe({
      next: () => {
        this.loadAllWorkouts();
      },
      error: (fail: any) => {
        console.error('Home.Component.ts.deleteWorkout(): error deleting workout!');
        console.error(fail);
      }
    });
  }

  addWorkout(workout: Workout) {
    this.workoutService.create(workout).subscribe({
      next: (success) => {
        this.newWorkout = new Workout();
        this.showWorkoutForm();
        this.loadAllWorkouts();
      },
      error: (fail) => {
        console.error('Error creating workout');
        console.error(fail);
      }
    });
  }

}
