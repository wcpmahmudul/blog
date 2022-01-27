import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogCreate } from '../models/blog/blog-create.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  create(mode: BlogCreate): Observable {
return this.http.post<>(`${environment.baseUrl}/blog`, model);
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
