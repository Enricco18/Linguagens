import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CursosComponent } from './views/cursos/cursos.component';
import { ProfessoresComponent } from './views/professores/professores.component';
import { AddCursosComponent } from './views/add-cursos/add-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    ProfessoresComponent,
    AddCursosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
