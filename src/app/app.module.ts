import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { QRCodeModule } from 'angularx-qrcode';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRouterModule } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuarioComponent,
    AdministradorComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    QRCodeModule,
    FormsModule
  ],
  exports:[
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
