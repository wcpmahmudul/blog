import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfo } from 'os';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApplicationUserCreate } from '../models/account/application-user-create.model';
import { ApplicationUserLogin } from '../models/account/application-user-login.model';
import { ApplicationUser } from '../models/account/application-user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private currentUserSubject$: BehaviorSubject<ApplicationUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject$ = new BehaviorSubject<ApplicationUser>(JSON.parse(localStorage.getItem('blogLab-CurrentUser') || ''));
   }

   login(model: ApplicationUserLogin): Observable<ApplicationUser> {
     return this.http.post(`${environment.baseUrl}/account/login`,model).pipe(
       map((user: ApplicationUser) => {

        if(user) {
          localStorage.set
        }
        return user;
       })
     );

   }

   register(model: ApplicationUserCreate): Observable<ApplicationUser> {

   }
}
