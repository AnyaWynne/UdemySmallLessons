import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isDetailShown = false;
buttonClicksArr = [];
incrNumber = 0;
// setColor: string ='white';

// constructor(){
//   this.setColor = 'white';
// }

addNumberOfClicks(): void {
  this.incrNumber+=1;
  this.buttonClicksArr.push(this.incrNumber);

}

// turnBlue(): string {
// if (this.setColor === 'white') {
//   return 'white'
// } else{
//   return 'blue'
// }

 
// }

}
