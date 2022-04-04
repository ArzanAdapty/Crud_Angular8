import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from '@app/module/User';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  userEdit
  constructor(private activeRouter: ActivatedRoute, 
    public userService: UserService,
    private router: Router) { 
      this.userService.userObj = new userObj();
      this.activeRouter.params.subscribe((res) =>{
        this.userService.userObj.userId = res['id']
      })
    }

  ngOnInit(): void {
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      const currentUser = userList.find((m: any) => m.userId == this.userService.userObj.userId);
      if(currentUser != undefined){
        this.userService.userObj.userName = currentUser.userName;
        this.userService.userObj.userCity = currentUser.userCity;
        this.userService.userObj.userState = currentUser.userState;
        this.userService.userObj.userMobile = currentUser.userMobile;
        this.userService.userObj.userAltMobile = currentUser.userAltMobile;
      }
    }
  }
}
