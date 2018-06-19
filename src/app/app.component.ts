import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ LoginService ]
})
export class AppComponent implements OnInit {

  dataValue : Array<any> = [];
  constructor(
    private _httpClient: Http,
    private _loginService: LoginService) {

  }

  ngOnInit(): void {
    this._loginService.getValues().subscribe((data) => {
      var val: Array<any> = data.json();      

      val.forEach((item) => {
        this.dataValue.push(item);
      });
      
    });
  }

  title = 'app';
}
