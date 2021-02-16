import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaesmeraldaserviceService } from '../../../services/laesmeraldaservice.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {
  token;
  refresh;
  datos=false;
  info;
  qrAngular;
  datosq=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  pagos=[];
  nombres=[];
  constructor(private router: Router, private leonService: LaesmeraldaserviceService, private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("jwt");
    this.refresh = localStorage.getItem("refreshToken");
    if(this.token == null && this.refresh == null){
      this.router.navigate(["/admin/login"]);
    }
    if (this.token && this.jwtHelper.isTokenExpired(this.token)){
      let body = {
        refreshToken:this.refresh
      }
      let id=1;
      this.leonService.getQuery(body,`login/refresh/${id}`,5).subscribe(data => {
        if(data['ok']==true){
        localStorage.setItem("jwt", data['token']);
        localStorage.setItem("refreshToken", data['refreshToken']);
        this.token = localStorage.getItem("jwt");
        this.refresh = localStorage.getItem("refreshToken");
        }
        else{
          alert(data['message']);
          localStorage.removeItem("jwt");
          localStorage.removeItem("refreshToken");
          this.router.navigate(["/admin/login"]);
        }
      })
    }
    this.leonService.getQuery(null,'pagos/getPagos',6,this.token).subscribe(data=>{
      this.pagos=data['message'];
      for (let index = 0; index < this.pagos.length; index++) {
        this.pagos[index].Fecha=this.pagos[index].Fecha.slice(0, -14)
        this.leonService.getQuery(null,`api/jugadorById/${this.pagos[index].idJugador}`,6, this.token).subscribe(data=>{
          console.log(data);
          let usuario=data['usuario'];
          this.nombres[index]=usuario[0].Nombre;
        })
      }
    })
  }

  buscarQR(CURP){
    let body={
      qr : CURP
    }
    console.log(CURP);
    this.leonService.getQuery(body,'pagos/pay', 3, this.token ).subscribe(data => {
      if(data['ok']==true){
        this.datos=true;
        console.log(data['usuario']);
        this.info=data['usuario'];
        console.log(this.info);
      }
      else{
        alert(data['message']);
      }
    });
  }

  pay(){
    console.log(this.info.id);
    let body={
      id:this.info.id
    }
    this.leonService.getQuery(body, 'pagos/onpay', 4, this.token).subscribe(data => {
      if(data['ok']==true){
        let body={
          id:this.info.id
        }
        this.leonService.getQuery(body,'pagos/createPay',3,this.token).subscribe(data=>{
          if(data['ok']==true){
            alert(data['message']);
            this.router.navigate(["/admin/login"]);
          }
          else{
            alert("ERROR AL REALIZAR EL PAGO");
          }
        })
      }
      else{
        alert("ERROR AL REALIZAR EL PAGO");
      }
    });
  }

  logout(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("refreshToken");
    this.router.navigate(["/admin/login"]);
  }

}
