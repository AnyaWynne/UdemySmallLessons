import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

ngOnInit(){
this.signupForm = new FormGroup({
'name': new FormControl(null, Validators.required, this.forbiddenName), 
'email': new FormControl(null, [Validators.required, Validators.email])
});
}

// isNameForbidden(control: FormControl):{[s:string]: boolean}{
// if (control.value === 'Test'){
//   return {'nameIsNotAllowed': true};
// }
// return null;
// }

forbiddenName(control: FormControl): Promise<any> | Observable<any>{
  const promise = new Promise<any>((resolve, reject)=>{
    setTimeout(()=>{
      if (control.value.toLowerCase() === 'test'){
        resolve({'nameIsForbidden': true});
      }else{
        resolve(null);
      }
    }, 2000);
  });
  return promise;
}
onSubmit(){
  console.log(this.signupForm);
}

}
