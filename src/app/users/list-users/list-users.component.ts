import { Component, OnInit } from '@angular/core';
import { userObj } from '@app/module/User';
import { UserService } from '@app/services/user.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  constructor(public userService: UserService){
    
  }
  ngOnInit(): void {
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userService.userList = JSON.parse(records);
    }
  }
  
}
