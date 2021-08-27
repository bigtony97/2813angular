import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [{'email':'test@test.com','pwd':'123'},{'email':'test2@test.com','pwd':'123'}, {'email':'test3@test.com','pwd':'123'}];
  username = "";
  password = "";
  errormsg = "";
  valid = false;
  constructor() { }

  ngOnInit(): void {
  }
  isValid(){
    for(let i=0;i<this.users.length;i++){
      if(this.users[i].email == this.username && this.users[i].pwd == this.password){
        this.valid = true;
      }
    }
    if(!this.valid){
      this.errormsg = "This username and password combo is incorrect. Please try again."
    } else {
      this.errormsg = "Login success!"
    }
  }
}

