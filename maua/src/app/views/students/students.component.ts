import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/app/database/aluno';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;
  constructor() {}

  ngOnInit(): void {}

  updateList(students) {
    this.students.push(students);
  }

  getGridOptions() {
    return {
      display: 'grid',
      'grid-template-columns': '1fr 1fr 1fr',
      margin: 'auto',
      'max-width.px': 800,
    };
  }
}
