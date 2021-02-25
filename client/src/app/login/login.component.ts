import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router, private cookie: CookieService) {
  }

  ngOnInit(): void {
  }

  public onClickMe(username : any, password : any){
    this.authService.autenticateUser(username, password)
    .subscribe((data) => {
      if (data.boolean){
        this.cookie.set('IsLogged', 'true', 1);
        this.cookie.set('Password', JSON.stringify(password), 1);
        this.cookie.set('Response', JSON.stringify(data.response), 1);
        this.route.navigate(['home']);
      }
    });
  }

  onClickRegiser(){
    this.route.navigate(['register']);
  }

}
