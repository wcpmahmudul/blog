import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
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
    this.currentUserSubject$ = new BehaviorSubject<ApplicationUser>(JSON.parse(localStorage.getItem('blogLab-currentUser') || ''));
   }

   login(model: ApplicationUserLogin): Observable<ApplicationUser> {
     return this.http.post(`${environment.baseUrl}/account/login`, model).pipe(
       map((user: any) => {

        if (user) {
          localStorage.setItem('blogLab-currentUser', JSON.stringify(user));
          this.setCurrentUser(user);
        }

        return user;
       })
     );
   }

   register(model: ApplicationUserCreate): Observable<ApplicationUser> {
    return this.http.post(`${environment.baseUrl}/account/register`, model).pipe(
      map((user: any) => {

       if (user) {
         localStorage.setItem('blogLab-currentUser', JSON.stringify(user));
         this.setCurrentUser(user);
       }

       return user;
      })
    );
   }

   logout(): void {
     localStorage.removeItem('blogLab-currentUser');
     this.currentUserSubject$.next();
   }

   setCurrentUser(user: ApplicationUser): void {
    this.currentUserSubject$.next(user);
  }

  public get currentUserValue(): ApplicationUser {
    return this.currentUserSubject$.value;
  }



}
