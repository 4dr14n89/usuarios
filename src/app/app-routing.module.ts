import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { UsuarioComponent } from './dashboard/usuario/usuario.component';


const routes: Routes = [
  {path:'layout',component:LayoutComponent},
  {
    path:'dashboard',component:DashboardComponent,
    children:[
      {path:'',component:ListUsuariosComponent},
      {path:'usuario/:id',component:UsuarioComponent}
    ]
  },
  {path:'',redirectTo:'layout',pathMatch:'full'},
  {path:'**',redirectTo:'layout',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
