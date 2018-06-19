import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private loginService: LoginService, 
    private toastr: ToastrService,
    private router: Router) {

     }

  ngOnInit() {
    debugger;
    var item = sessionStorage.getItem("userData");
    if(item != null){
      this.router.navigate(['/dashboard']);
    }
  }

  loginUser(event): void {
    debugger;
    this.username = event.target.elements[0].value;
    this.password = event.target.elements[1].value;

    this.loginService.authenticateUser(this.username, this.password).subscribe((data) => {
      debugger;
      var result = data.json();

      if(result.status) {
        this.toastr.success(result.message, '');
        sessionStorage.setItem("userData", "10");
        this.router.navigate(['/dashboard']);
      }
      else {
        this.toastr.error(result.message, '');
      }
    });
  }

}
