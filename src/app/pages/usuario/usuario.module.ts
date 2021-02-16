import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRouterModule } from './usuario.routes';
import { HomeComponent } from './home/home.component';
import { VisoriasComponent } from './visorias/visorias.component';
import { RegistroComponent } from './registro/registro.component';
import { FormatoComponent } from './formato/formato.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, VisoriasComponent, RegistroComponent, FormatoComponent],
  imports: [
    CommonModule,
    UsuarioRouterModule,
    NgbModule,
    FormsModule
  ]
})
export class UsuarioModule { }
