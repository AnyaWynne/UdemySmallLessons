import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;

  @Output() gameStarted = new EventEmitter<number>();
  // @Output() gameEnded = new EventEmitter<>();
  
  emittingNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // emitGameStarted(){
  //   let gameNumber = 7;
  //   setInterval(function(){ gameNumber +=1 }, 1000);
  //   this.gameStarted.emit(gameNumber);
  // }

  pauseGame(){
    clearInterval(this.interval);
  }

  emitGameStarted(){
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.emittingNumber + 1);
      this.emittingNumber++;
    },1000);
  }

}
