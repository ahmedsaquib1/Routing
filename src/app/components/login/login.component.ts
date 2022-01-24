import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock=faLock;
  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit():void{
    console.log(this.loginForm.value);
  }

}
