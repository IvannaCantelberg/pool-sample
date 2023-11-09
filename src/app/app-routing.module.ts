import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '/',
    title: 'Log in',
    data: { imageBg: false, title: 'text' },
    loadComponent: () => import('./login-page/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'sign-in',
    title: 'Sign In',
    data: { imageBg: true, title: 'text  2' },
    loadComponent: () => import('./login-page/sign-in/sign-in.component').then(m => m.SignInComponent)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
