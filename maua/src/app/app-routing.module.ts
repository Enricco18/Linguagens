import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProfessoresComponent } from './views/professores/professores.component';
import { CursosComponent } from './views/cursos/cursos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'professores',
    component: ProfessoresComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
