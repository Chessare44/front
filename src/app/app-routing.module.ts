import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{PersonaComponent} from './Componentes/persona/persona.component'
//se impora la ruta



const routes: Routes = [
  {path:"",pathMatch: "full", redirectTo:"persona"},
  {path:"persona", component:PersonaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
