import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  create() {
return this.http.post<>(`${environment.baseUrl}`)
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
