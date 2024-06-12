import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopLoginComponent } from './auth/login/desktop-login/desktop-login.component';
import { authGuard } from './auth/auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { DesktopRegisterComponent } from './auth/register/desktop-register/desktop-register.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [authGuard] },
  { path: 'login', component: DesktopLoginComponent },
  { path: 'register', component: DesktopRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
