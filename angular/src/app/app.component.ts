import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PetShop';

  constructor(private cookie: CookieService){}

  onClickLeave() {
    this.cookie.delete('IsLogged');
    this.cookie.delete('Response');
    this.cookie.delete('Password');
    this.cookie.deleteAll();
  }

  isLoggedIn(){
    return this.cookie.get('IsLogged');
  }
}
