import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  create() {
return this.http.post<>(`${env}`)
  }

  getAll() {

  }

  get() {

  }

  getByApplicationUserId() {

  }

  getMostFamous() {

  }

  delete() {

  }
}
