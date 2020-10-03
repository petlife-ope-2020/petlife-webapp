import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) {
  }

  ngOnInit(): void {
  }

  public onClickMe(username : any, password : any){
    this.authService.autenticateUser(username.value, password.value);
    if (this.authService.isLoggedIn === true) {
      this.route.navigate(['home']); 
    }
    username.value = '';
    password.value = '';
    
  }
}
