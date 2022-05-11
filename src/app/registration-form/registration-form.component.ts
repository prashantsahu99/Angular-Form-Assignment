import { Component, OnInit } from '@angular/core';
import { FormBuilder,MinLengthValidator,NgForm,PatternValidator,RequiredValidator,Validators,FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public show:boolean=true;
  public form!:FormGroupDirective;
  listData :any;

    constructor( private fb: FormBuilder){
      this.listData=[];
    }
      registrationForm = this.fb.group({
        name:['',[Validators.required,Validators.minLength(4),Validators.pattern('[A-Za-z ]*')]],
        college:['',[Validators.required,Validators.pattern("[A-Za-z ]*")]],
        cgpa:['',[Validators.required,Validators.pattern('[5-9].[0-9]*|10|[5-9]')]],
        yearofpass:['',[Validators.required,Validators.pattern('[0-9]{4}')]],
        dateofjoin:['',Validators.required],
        skill:['',Validators.required],
        resume:['',[Validators.required]]
      },{updateOn:'submit'});

  ngOnInit(): void {
  }

  submitForm(registrationForm:FormGroup,localForm:FormGroupDirective){
    if(this.registrationForm.valid){
    console.log(this.registrationForm.value);
    this.show=false;
    this.form=localForm;
    }
  }

  reset(){
    this.registrationForm.reset();
    this.form.resetForm();
    this.show=true;
    // NgForm.submitted=false;
  }
 public addItem() : void{
  this.listData.push(this.registrationForm.value);
  this.registrationForm.reset();
  this.form.resetForm();
  this.show=true;
 }
}
