import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public autenticateUser(username, password){
    let request = {
      username: username,
      password: password
    }
    return this.http.post<any>('/api/user_auth', request);
  }
}
