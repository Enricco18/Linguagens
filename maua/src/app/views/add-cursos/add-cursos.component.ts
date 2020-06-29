import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import Curso from '../../model/curso';
@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css'],
})
export class AddCursosComponent implements OnInit {
  @Input() curso: Curso[];
  @Output() saveCurso = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.curso.push(f.value);
    this.saveCurso.emit(f.value);
    f.reset();
  }
}
