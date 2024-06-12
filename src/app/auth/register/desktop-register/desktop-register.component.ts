import { Component } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-register',
  templateUrl: './desktop-register.component.html',
  styleUrls: ['./desktop-register.component.sass']
})
export class DesktopRegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password === this.confirmPassword) {
      this.registerProfile();
    } else {
      alert('Passwords did not match');
    }
  }

  registerProfile() {
    this.authService.register(this.username, this.password).pipe(
      tap(() => {
        this.authService.login(this.username, this.password).subscribe(() => {
          this.router.navigate(['']);
        });
      }),
      catchError(error => {
        console.error('Registration failed', error);
        return of(null);
      })
    ).subscribe();
  }
}