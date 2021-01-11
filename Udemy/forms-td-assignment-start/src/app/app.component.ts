import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  setType='advanced';

  @ViewChild("form", {static: false}) signupForm: NgForm;
  submitted = false;
  userEntry= {
    email: '',
    type: 'test',
    password: 'test'
  }

  onSubmit(formData: NgForm){
    this.submitted = true;
    this.userEntry.email = this.signupForm.value.stringForAFormName.emailName;
    this.userEntry.type = this.signupForm.value.stringForAFormName.typeName;
    this.userEntry.password = formData.value.stringForAFormName.passwordName;
    this.signupForm.reset();
    // this.signupForm.setValue({
    //   stringForAFormName: {
    //     emailName: 'try',
    //     typeName: this.setType,
    //     passwordName: 'try'
    //   }
    // });
    this.signupForm.form.patchValue({
      stringForAFormName:{
        typeName: this.setType
      }
    })
  }

}
