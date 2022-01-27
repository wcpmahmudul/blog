import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../models/photo/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  create(model: FormData): Observable<Photo> {
    return this.http.post<Photo>(`${environment.baseUrl}/Blog`, model);
  }

  getAll(blogPaging: BlogPaging): Observable<PagedResult<Blog>> {
    return this.http.get<PagedResult<Blog>>(`${environment.baseUrl}/Blog?Page=${blogPaging.page}&PageSize=${blogPaging.pageSize}`);
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
