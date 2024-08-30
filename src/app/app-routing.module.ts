import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[authGuard]},
  {path:"about",component:AboutComponent,canActivate:[authGuard]},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
