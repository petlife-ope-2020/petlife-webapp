import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  onClickMe(username, name, email, cnpj, password, address, phone_number){
    this.http.post('/api/user_register', {username, name, email, cnpj, password, address, phone_number})
    .subscribe((response) => {
      if (response){
        this.route.navigate(['login']);
      }
      console.log('Error on Registration!');
    });
  }

}
