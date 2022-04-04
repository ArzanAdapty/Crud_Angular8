import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { userObj } from '@app/module/User';
import { UserService } from '@app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {

  constructor(  
    public userService: UserService, private router: Router) { 
      this.userService.userObj = new userObj();

    }

  ngOnInit(): void {
  }
  
  
}
