import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationFormComponent} from'./registration-form/registration-form.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

const routes: Routes = [
  {path:'Registration',component:RegistrationFormComponent},
  {path:'Login-SignUp',component:LoginSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}

export const routingComponents=[RegistrationFormComponent,LoginSignupComponent]

