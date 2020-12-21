import { Component } from '@angular/core';
import { UsersService } from '../usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  users: string[] = this.usersService.inactiveUsers;

  constructor (private usersService: UsersService){};

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.onSetToActive(id);
    // this.users = this.usersService.inactiveUsers;
  }
}
