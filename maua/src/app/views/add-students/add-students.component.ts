import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import Student from '../../model/aluno';
import { CURSOS } from '../../database/curso';
@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
})
export class AddStudentsComponent implements OnInit {
  @Input() students: Student[];
  @Output() saveStudent = new EventEmitter();
  cursos = CURSOS;
  constructor() {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this.students.push(f.value);
    console.log(f.value);
    this.saveStudent.emit(f.value);
    f.reset();
  }
}
