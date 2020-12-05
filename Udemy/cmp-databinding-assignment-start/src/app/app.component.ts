import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberArr: number[] = [];
  evenNumberArr: number[] = [];


  startGame(gameNumber: number){
    
    if (gameNumber%2===1){
      this.oddNumberArr.push(gameNumber);
    }else{
      this.evenNumberArr.push(gameNumber);
    }
  }


}
