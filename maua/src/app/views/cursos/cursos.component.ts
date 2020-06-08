import { Component, OnInit } from '@angular/core';
import { CURSOS } from '../../database/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  cursos = CURSOS;
  constructor() {}

  ngOnInit(): void {}

  updateList(curso) {
    this.cursos.push(curso);
  }
}
