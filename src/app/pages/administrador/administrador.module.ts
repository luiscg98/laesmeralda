import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRouterModule } from './administrador.routes';
import { LoginComponent } from './login/login.component';
import { PagosComponent } from './pagos/pagos.component';
import { QRCodeModule } from 'angularx-qrcode';
import { JwtModule } from "@auth0/angular-jwt";
export function tokenGetter() {
  return localStorage.getItem("jwt");
}



@NgModule({
  declarations: [LoginComponent, PagosComponent],
  imports: [
    CommonModule,
    AdministradorRouterModule,
    QRCodeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [ "localhost:3000" ] ,
        blacklistedRoutes: [ ]
      }
    } )
  ]
})
export class AdministradorModule { }
