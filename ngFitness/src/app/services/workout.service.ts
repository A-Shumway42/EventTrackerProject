import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = 'http://localhost:8083/';
  private url = 'api/workouts';

  constructor(private http: HttpClient) { }
}
