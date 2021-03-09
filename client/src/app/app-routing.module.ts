import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/shared/auth/auth.guard';
import { HomeComponent } from './modules/main/home/home.component';
import { LoginComponent } from './modules/main/login/login.component';
import { ProfileComponent } from './modules/management/profile/profile.component';
import { ServicesComponent } from './modules/management/services/services.component';
import { RegisterComponent } from './modules/main/register/register.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'services', component: ServicesComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: HomeComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
