import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {


  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  obj: typeof Object = Object;

  //----------------CONSTRUCTOR------------------
  constructor() {
    let formGroupConfig = {
      userName: new FormControl("", this.createValidatorArr("name", 3, 15,/^[A-Za-z]+$/)),
      userPassword: new FormControl("", this.createValidatorArr("password", 5, 10))
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  submitLogin() {
   
  }


  createValidatorArr(cntName: string, min: number, max: number,pattern?:RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f =>pattern&&f.value && !f.value.match(pattern)  ? { "val": `${cntName} is contains only English letters` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null
     
    ];
  }
}
