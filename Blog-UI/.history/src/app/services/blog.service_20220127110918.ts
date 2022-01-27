import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogCreate } from '../models/blog/blog-create.model';
import { BlogPaging } from '../models/blog/blog-paging.model';
import { Blog } from '../models/blog/blog.model';
import { PagedResult } from '../models/blog/paged-result.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  create(model: BlogCreate): Observable<Blog> {
return this.http.post<Blog>(`${environment.baseUrl}/blog`, model);
  }

  getAll(blogPaging: BlogPaging): Observable<PagedResult<Blog>> {
    return this.http.post<Blog>(`${environment.baseUrl}/blog`, model);
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
