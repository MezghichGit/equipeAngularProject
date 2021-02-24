import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { ListEquipesComponent } from './list-equipes/list-equipes.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';

const routes: Routes = [
  {
    path: "ListEquipes",
    component: ListEquipesComponent
  },
  {
    path: "AddEquipe",
    component: AddEquipeComponent
  },
  {
    path: "UpdateEquipe/:num",
    component: UpdateEquipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
