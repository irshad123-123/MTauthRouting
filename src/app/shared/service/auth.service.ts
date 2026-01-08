import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin, IsignUp } from '../model/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_url : string = `https://auth-git-main-iamrkjs-projects.vercel.app/api/auth`
  constructor(private _http : HttpClient) { }

  login(obj : Ilogin):Observable<any>{
   return this._http.post<any>(`${this.base_url}/login`,obj)
  }

  signUp(obj : IsignUp):Observable<any>{
    return this._http.post<any>(`${this.base_url}/register`,obj)
  }

  setToken(token : string){
     localStorage.setItem('token',token)
  }
  setUserRole(userRole : string){
     localStorage.setItem('userRole',userRole)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getUserRole(){
    return localStorage.getItem('userRole')
  }
}
