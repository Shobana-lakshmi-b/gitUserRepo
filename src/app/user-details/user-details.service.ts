import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserDetailsService {
  serverURL = 'https://api.github.com';

  constructor(private http:HttpClient){}

  getUserDetail(userName:string) {
    return this.http.get(`${this.serverURL}/users/${userName}`).toPromise()
  }

  getUserRepos(userName:string){
    return this.http.get(`${this.serverURL}/users/${userName}/repos`).toPromise()
  }

  getLanguagesInRepo(url) {
    return this.http.get(url).toPromise()
  }
}
