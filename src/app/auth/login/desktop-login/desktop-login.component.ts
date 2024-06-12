import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-desktop-login',
  templateUrl: './desktop-login.component.html',
  styleUrl: './desktop-login.component.sass'
})
export class DesktopLoginComponent {

  username: string = ""
  password: string = ""

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {}
  
  login() {
    // send a loginRequest object to the backend
    this.authService.login(this.username, this.password).pipe(
      tap(() => {
        this.router.navigate(['']);
      }),
      catchError(error => {
        console.error('Login failed', error);
        return of(null);
      })
    ).subscribe();
  }

}
