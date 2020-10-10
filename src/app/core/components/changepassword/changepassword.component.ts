import { Component, OnInit } from '@angular/core';
import {

   FormBuilder, AbstractControl,
   FormGroup, Validators
 } from '@angular/forms'

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  // directives: [REACTIVE_FORM_DIRECTIVES]

})
export class ChangepasswordComponent implements OnInit {
  pwChangeForm: FormGroup;
 // Properties that store paths to FormControls makes our template less verbose
 current: AbstractControl;
 newPW: AbstractControl;
 confirm: AbstractControl;

 constructor(private fb: FormBuilder) { }
 ngOnInit() {
    this.pwChangeForm = this.fb.group({
      current: ['', Validators.required],
      newPW: ['', Validators.required],
      confirm: ['', Validators.required]
    }, {
       // Here we create validators to be used for the group as a whole
         validator: Validators.compose([
            PWChangeValidators.newIsNotOld,
            PWChangeValidators.newMatchesConfirm
         ])
  });

 this.current = this.pwChangeForm.controls['current'];
 this.newPW = this.pwChangeForm.controls['newPW'];
 this.confirm = this.pwChangeForm.controls['confirm'];

  }

}
