import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'https://gorest.co.in/public-api/users';
  token = '369975c36c56871b5547d0ba557338d4617ce6bbcca852d11d630e9c1d184828';
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}?access-token=${this.token}`)
               .pipe(map ( user => user['data'] ) );
  }

  getUserById(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}/${id}?access-token=${this.token}`)
               .pipe(map (user => user['data'] ) );
  }

}
