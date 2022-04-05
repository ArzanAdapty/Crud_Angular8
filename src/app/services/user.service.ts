import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userObj } from '@app/module/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userObj: userObj;
  userList: userObj[];
  constructor(private router: Router){
     
  }

  // add
  getNewUserId(){
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      return userList.length + 1;
    }else{
      return 1;
    }
  }
  createUser(){
    debugger
    console.log(this.userObj);
    console.log(userObj)
    const lastedId = this.getNewUserId();
    this.userObj.userId = lastedId;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
    } else{
      const userArr = []
      userArr.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userArr));
    }
    debugger
    this.router.navigate(['/users/list']);
  }

  // Edit
  UpdateUser(){
    debugger
    // const lastedId = this.getNewUserId();
    // this.userObj.userId = lastedId;
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=>a.userId == this.userObj.userId),1);
      userList.push(this.userObj);
      localStorage.setItem('userList', JSON.stringify(userList));
    } 
    this.router.navigate(['/users/list']);
  }

  // Delete
  DeleteUser(id:any){
    console.log(id);
    debugger
    const oldRecords = localStorage.getItem('userList');
    if(oldRecords !== null){
      const userList = JSON.parse(oldRecords);
      userList.splice(userList.findIndex((a:any)=>a.userId == id),1);
      localStorage.setItem('userList', JSON.stringify(userList));
    } 
    const records = localStorage.getItem('userList');
    if(records !== null){
      this.userList = JSON.parse(records);
    }
    alert(`Delete user ${id}`)
    this.router.navigate(['/users/list']);
  }
}
