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


  get(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(`${environment.baseUrl}/Photo/${photoId}`);
  }

  getByApplicationUserId(applicationUserId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.baseUrl}/Photo /user/${applicationUserId}`);
  }

  delete(photoId: number): Observable<number> {
    return this.http.delete<number>(`${environment.baseUrl}/Photo/${photoId}`);
  }
}
