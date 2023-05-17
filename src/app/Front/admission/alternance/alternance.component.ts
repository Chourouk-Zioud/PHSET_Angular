import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Inscription } from 'src/app/Models/Inscription';
import { User } from 'src/app/Models/User';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-alternance',
  templateUrl: './alternance.component.html',
  styleUrls: ['./alternance.component.css'],
})
export class AlternanceComponent implements OnInit {
  inscription!: Inscription;
  niveauEtudes!: string;
  model!: NgbDateStruct;
  enCours!: boolean;
  currentYear!: number;
  cv!: File;
  lm!: File;
  nom!: string;

  constructor(private route: Router, private service: AdmissionService) {}

  ngOnInit(): void {
    this.inscription = new Inscription();
    this.inscription.user = new User();
  }

  onSumbit() {
    this.service.newAdmissionALT(this.inscription, 1,2).subscribe();
}
}
