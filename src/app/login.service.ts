import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders} from '@angular/common/http'
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  API_URL : string = "http://localhost:5000/api/";
  constructor(private http: Http) { 
  }

  getValues(): any {
    return this.http.get(this.API_URL + "values");
  }

  authenticateUser(username: string, password: string) : any {
    var model = {"Username": username, "Password": password};
    return this.http.post(this.API_URL +  "authenticate", model );
  };
}
