import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';



const routes: Routes = [
    { path: 'admin', loadChildren:() => import('./pages/administrador/administrador.module').then(module => module.AdministradorModule) },
    { path: '', loadChildren: () => import('./pages/usuario/usuario.module').then(module => module.UsuarioModule) },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRouterModule { }
