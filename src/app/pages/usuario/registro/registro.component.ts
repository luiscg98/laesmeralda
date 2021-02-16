import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LaesmeraldaserviceService } from '../../../services/laesmeraldaservice.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  bandera=0;
  resultados=[];
  alertap1=0;
  alertap2=0;
  alertapierna=0;
  alertapapa=0;
  alertapapacel=0;
  alertanom=0;
  alertafec=0;
  alertacurp=0;
  alertaest=0;
  alertatel=0;
  alertaema=0;
  usuario = {
    nombre:"",
    nacimiento:"",
    genero:"MASCULINO",
    curp:"",
    correo:"",
    estado:"",
    telefono:"",
    cat:"",
    npadre:"",
    tpadre:""
  }



  constructor(private router:Router, private laesmeralda: LaesmeraldaserviceService) {}

  ngOnInit(): void {

  }



  guardar(estado,forma){
    switch(estado){
      case 0 :
        this.bandera++;
        break;
      case 1:
        this.bandera++;
        break;
      case 2:
          switch(forma){
            case 0:
              this.resultados[12]="sub-13"
              this.usuario.nacimiento="2008-01-01"
              break;
            case 1:
              this.resultados[12]="sub-15"
              this.usuario.nacimiento="2006-01-01"
              break;
            case 2:
              this.resultados[12]="sub-17"
              this.usuario.nacimiento="2004-01-01"
              break;
            case 3:
              this.resultados[12]="sub-20"
              this.usuario.nacimiento="2001-01-01"
              break;
            case 4:
              this.resultados[12]="femenil"
              this.usuario.nacimiento="2008-01-01"
              break;
          }
          this.bandera++;
          console.log(this.resultados);
        break;
      case 3:
        this.bandera++;
        break;
      case 4:
        if(forma.valid == true){
          this.bandera++;
          this.resultados[0]=forma.value.nombre.toUpperCase();
          this.resultados[1]=forma.value.nacimiento;
          if(this.resultados[12]=='femenil'){
            this.resultados[2]='FEMENINO';
          }
          else{
            this.resultados[2]='MASCULINO';
          }
          this.resultados[3]=forma.value.curp.toUpperCase();
          this.resultados[4]=forma.value.estado;
          this.resultados[5]=forma.value.telefono;
          this.resultados[6]=forma.value.correo.toLowerCase();
          console.log(this.resultados);
        }
        break;
      case 5:
        this.bandera++;
        break;
      case 6:
        if(forma.valid == true){
          this.bandera++;
          this.resultados[7]=forma.value.npadre;
          this.resultados[8]=forma.value.tpadre;
          console.log(this.resultados);
        }
        break;
      case 7:
        this.bandera++;
        break;
    }

  }

  regresar(bandera){
    this.usuario.nombre=this.resultados[0];
    this.usuario.nacimiento=this.resultados[1];
    this.usuario.genero=this.resultados[2];
    this.usuario.curp=this.resultados[3];
    this.usuario.estado=this.resultados[4];
    this.usuario.telefono=this.resultados[5];
    this.usuario.correo=this.resultados[6];
    this.usuario.npadre=this.resultados[7];
    this.usuario.tpadre=this.resultados[8];
    this.bandera=bandera-2;
  }

  cambiarbandera(){
    this.router.navigate(['registro']);
  }
  cerrar(){
    this.router.navigate(['registro']);
  }

  llamarApi(){
    let body = {
      nombre:this.resultados[0].toUpperCase(),
      nacimiento: this.resultados[1],
      curp: this.resultados[2].toUpperCase(),
      telefono: this.resultados[3],
      correo: this.resultados[4],
      genero: this.resultados[5],
      estado: this.resultados[6],
      pnombre: this.resultados[7].toUpperCase(),
      ptelefono: this.resultados[8],
      //p1: p1,
      //p2: p2,
      //perfil: pierna
    }
    this.laesmeralda.getQuery(body, 'api/create', 1).subscribe(data => {
      console.log(data)
      if(data['ok']==true){
        this.cambiarbandera();
      }
      else{
        alert("HUBO UN PROBLEMA, VUELVELO A INTENTAR MAS TARDE");
      }
    });
  }
}
