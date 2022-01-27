import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogCommentCreate } from '../models/blog-comment/blog-comment-create.model';
import { BlogComment } from '../models/blog-comment/blog-comment-model';
import { BlogCommentViewModel } from '../models/blog-comment/blog-comment-view-model.model';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentService {

  constructor(private http: HttpClient) { }

  create(model: BlogCommentCreate): Observable<BlogComment> {
return this.http.post<BlogCommentViewModel>
  }

  delete(blogId: number): Observable<BlogComment[]> {

  }

  getAll(blogId: number): Observable<BlogComment[]> {

  }

}
