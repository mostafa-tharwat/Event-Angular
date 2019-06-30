import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageEventsService {
  constructor(private http: HttpClient) { }
  token = "bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDExNWU0NzE4YmY2ODAwMTdhMGM4NDIiLCJpYXQiOjE1NjE4NTg3MzQsImV4cCI6MTU2MTk0NTEzNH0.cKRXtogXKA5i0siULSsc2j_UACSf1WKye4edWpsXGuM";

  getAllEvents(id) {
    return this.http.get(`https://desolate-anchorage-26344.herokuapp.com/events?id=${id}`,
      { headers: { 'content-type': 'application/json', 'Authorize': this.token } })
  }
}
