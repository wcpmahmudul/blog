import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogComponent } from '../components/blog-components/blog/blog.component';
import { BlogCommentCreate } from '../models/blog-comment/blog-comment-create.model';
import { BlogComment } from '../models/blog-comment/blog-comment-model';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentService {

  constructor(private http: HttpClient) { }

  create(model: BlogCommentCreate): Observable<BlogComment> {
return this.http.post<BlogComponent>(`${environment.baseUrl}/BlogComment`, model);
  }

  delete(blogId: number): Observable<BlogComment[]> {
return this.http.delete<number>(`${environment.baseUrl}/BlogComment/`)
  }

  getAll(blogId: number): Observable<BlogComment[]> {

  }

}
