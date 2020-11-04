import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public ProfData: any;

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    this.ProfData = JSON.parse(this.cookie.get('Response'));
  }

}
