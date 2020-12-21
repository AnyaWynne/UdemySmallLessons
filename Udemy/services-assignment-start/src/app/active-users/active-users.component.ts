import { Component, OnInit } from '@angular/core';
import { UsersService } from '../usersService.service';
import { CounterService } from '../counterService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  // providers: [CounterService]
})
export class ActiveUsersComponent implements OnInit{
  


constructor(private usersService: UsersService, private counterService: CounterService){};

users: string[];

ngOnInit(){
  this.users = this.usersService.activeUsers;

}

  onSetToInactive(id: number) {
 
    this.usersService.onSetToInactive(id);
  
  

  }
}
