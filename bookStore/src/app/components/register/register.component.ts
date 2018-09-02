import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  ngOnInit() {
  }

   //----------------PROPERTIRS-------------------
   formGroup: FormGroup;
   obj: typeof Object = Object;
 
   //----------------CONSTRUCTOR------------------
   constructor() {
     let formGroupConfig = {
      firstName: new FormControl("", this.createValidatorArr("firstName", 2, 15,/^[A-Za-z]+$/)),
       lastName: new FormControl("", this.createValidatorArr("lastName", 2, 15,/^[A-Za-z]+$/)),
       userPassword: new FormControl("", this.createValidatorArr("password", 5, 10)),
       userName: new FormControl("", this.createValidatorArr("userName", 3, 15,/^[A-Za-z]+$/)),
     };
 
     this.formGroup = new FormGroup(formGroupConfig);
   }
 
   //----------------METHODS-------------------
   submitRegister() {
     console.log(this.formGroup.value);
     console.log(this.formGroup.controls);
     alert(this.formGroup.status)
   }
 
 
   createValidatorArr(cntName: string, min: number, max: number,pattern?:RegExp): Array<ValidatorFn> {
     return [
       f => !f.value ? { "val": `${cntName} is required` } : null,
       f => f.value && pattern&&!f.value.match (pattern) ? { "val": `${cntName} is contain only english letter` } : null,
       f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
       f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null
     ];
   }
 }


