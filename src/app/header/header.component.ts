import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    debugger;
    this.isLoggedIn = sessionStorage.getItem("userData") != null;
  }

  logOut(): void{
    sessionStorage.removeItem("userData");
    this.router.navigate(["/login"]);
  }

}
