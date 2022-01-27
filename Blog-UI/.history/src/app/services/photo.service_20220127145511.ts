import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Photo } from '../models/photo/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  create(model: FormData): Observable<Photo> {
    return this.http.post<Photo>(`${environment.baseUrl}/Photo`, model);
  }


  get(blogId: number): Observable<Blog> {
    return this.http.get<Blog>(`${environment.baseUrl}/Blog/${blogId}`);
  }

  getByApplicationUserId(applicationUserId: number): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.baseUrl}/Blog/user/${applicationUserId}`);
  }

  getMostFamous(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.baseUrl}/Blog/famous`);
  }

  delete(blogId: number): Observable<number> {
    return this.http.delete<number>(`${environment.baseUrl}/Blog/${blogId}`);
  }
}
