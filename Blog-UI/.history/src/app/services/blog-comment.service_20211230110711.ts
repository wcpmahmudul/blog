import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogComment } from '../models/blog-comment/blog-comment-model';

@Injectable({
  providedIn: 'root'
})
export class BlogCommentService {

  constructor(private http: HttpClient) { }

  create(): Observable<BlogComment> {

  }

  delete() {

  }

  getAll(blogId: number): Observable<BlogComment[]> {

  }

}
