import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AdministradorComponent } from './administrador.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
        { path: 'login', component: LoginComponent },
        { path: 'pagos', component: PagosComponent },
        { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent }
  ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdministradorRouterModule { }
