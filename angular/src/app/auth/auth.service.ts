import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public autenticateUser(username, password){
    
    return this.http.post<any>('/api/user_auth',{
    'username': username,
    'password': password
  });
  }
}
