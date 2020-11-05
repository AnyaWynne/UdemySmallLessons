import { Component } from '@angular/core';
import {Satellite} from './satellite'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satelliteURL = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satelliteURL).then(function(response){
      response.json().then(function(data){
        let fetchedSatellites = data.satellites;
        
        for (let i=0; i < fetchedSatellites.length; i++){
          let jsonSatellite= new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          this.sourceList.push(jsonSatellite);
        }
      }.bind(this));
    }.bind(this));

  }
}
