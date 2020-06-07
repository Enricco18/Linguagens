import { Component, OnInit } from '@angular/core';
import { PROFESSORES } from '../../database/professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  professores = PROFESSORES;

  constructor() {}

  ngOnInit(): void {}
}
