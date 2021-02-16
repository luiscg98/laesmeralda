import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsuarioComponent } from './usuario.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormatoComponent } from './formato/formato.component';
import { VisoriasComponent } from './visorias/visorias.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'registro', component: VisoriasComponent },
        { path: 'formato', component: FormatoComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
  ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRouterModule { }
