import { Component, OnInit } from '@angular/core';
import { ReponseFAQ } from 'src/app/Models/ReponseFAQ';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css'],
})
export class ReponseComponent implements OnInit {
  reponseFAQ!: ReponseFAQ;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
