import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaesmeraldaserviceService } from '../../../services/laesmeraldaservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token;
  refresh;
  constructor(private leonService: LaesmeraldaserviceService, private router: Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("jwt");
    if(this.token != null){
      this.router.navigate(["/admin/pagos"]);
    }
  }

  login(user:String, pass:String){
    let body = {
      user: user,
      pass: pass
    }
    this.leonService.getQuery(body,'login/validate',1).subscribe(data => {
      if(data['ok']==true){
        localStorage.setItem("jwt", data['token']);
        localStorage.setItem("refreshToken", data['refreshToken']);
        this.router.navigate(["/admin/pagos"]);
      }
      else{
        alert(data['message']);
      }

    });
  }

}
