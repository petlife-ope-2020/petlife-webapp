import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public ProfData: any;

  constructor(private cookie: CookieService, private router: Router, private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.ProfData = JSON.parse(this.cookie.get('Response'));
  }

  editInformation(name, email, address, phone_number) {
    let username = JSON.parse(this.cookie.get('Response')).username;
    let password = JSON.parse(this.cookie.get('Password'));
    this.http.put('/api/update_profile', {
      username,
      password,
      name,
      email,
      address,
      phone_number
    })
      .subscribe(response => {
        let username = JSON.parse(this.cookie.get('Response')).username;
        let password = JSON.parse(this.cookie.get('Password'));
        this.authService.autenticateUser(username, password).subscribe(data => {
          if (data.boolean) {
            this.cookie.delete('Response');
            this.cookie.delete('Password');
            this.cookie.set('Password', JSON.stringify(password), 1);
            this.cookie.set('Response', JSON.stringify(data.response), 1);
            window.location.reload();
          }
        })
      });
  }

  backPage() {
    this.router.navigate(['home']);
  }

}
