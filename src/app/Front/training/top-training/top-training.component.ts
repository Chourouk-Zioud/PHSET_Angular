import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-training',
  templateUrl: './top-training.component.html',
  styleUrls: ['./top-training.component.css'],
})
export class TopTrainingComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  addTraining() {
    this.route.navigateByUrl('/addTraining');
  }

  afficherCours() {
    this.route.navigateByUrl('/course');
  }

  afficherCertifs() {
    this.route.navigateByUrl('/certif');
  }

  showTraining() {
    this.route.navigateByUrl('/training');
  }
}
