import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName= '';
  disableButton = true;

//   onUpdateUserName(event: Event) {
// this.userName = (<HTMLInputElement>event.target).value;
// this.disableButton = false;
//   }
activateButton(event: Event){
  if(this.userName==''){
    this.disableButton = true;
  }else{
    this.disableButton = false;
  }
  
}
  clearUserName(): void {
    if (this.userName!==''){
this.userName = '';
this.disableButton = true;
    }
  }
}
