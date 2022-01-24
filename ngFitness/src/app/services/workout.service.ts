import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = 'http://localhost:8083/';
  private url = this.baseUrl + 'api/workouts';

  constructor(private http: HttpClient) { }

  index(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error retrieving Workout List ' + err);
      })
    );

  }

  update(workout: Workout): Observable<Workout> {
    return this.http.put<Workout>(this.url + "/" + workout.id, workout).pipe(
      catchError( (problem: any) => {
        console.error('WorkoutService.update(): error updating workout:');
        console.error(problem);
        return throwError(
          () => new Error(
            'WorkoutService.update(): error updating workout'
          )
        );
      })
    );
  }

  delete(workoutId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${workoutId}`).pipe(
      catchError( (problem: any) => {
        console.error('WorkoutService.delete(): error deleting workout!');
        console.error(problem);
        return throwError(
          () => new Error(
            'WorkoutService.index(): error deleting workout'
          )
        );
      })
    );
  }

  create(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.url, workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
          'WorkoutService.create(): error creating workout: ' + err
        );
      })
    );
  }

}
