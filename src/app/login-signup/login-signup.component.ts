import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { User } from '../user';
import {SignIn} from'../sign-in';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

    listData:any;

  @ViewChild('userForm') userForm!:NgForm
  User!:User

  @ViewChild('signIn') signIn!:NgForm
  Sign!:SignIn

  SubmitForm(){
    if(this.signIn.valid){
      console.log(this.signIn.value);
      alert("SignIn Successful");
      this.signIn.resetForm();
    }
  }
  

  public show:boolean=false;
  public buttonshow:boolean=false;


  public addItem(): void{
     this.listData.push(this.userForm.value);
     this.reset();
   }
   public reset(){
     this.userForm.resetForm();
     this.buttonshow=false;
   }
// submitForm(userForm:FormBuilder){
//   if(this.userModel.valid){
//     this.show=true;
//   }
// }

  ngOnInit(): void {
    this.Sign={username:'',password:''};
    this.listData=[];
    this.User={name:'',fname:'',email:'',pass:'',mobile:''};
  }
  Signup(){
    this.show=true;
    this.buttonshow=false;
  }

  SignIn(){
    this.show=false;
  }

  submitdata(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.buttonshow=true;
    }
  }





}
