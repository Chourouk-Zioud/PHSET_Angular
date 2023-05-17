import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Inscription } from 'src/app/Models/Inscription';
import { User } from 'src/app/Models/User';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-postuler-offre',
  templateUrl: './postuler-offre.component.html',
  styleUrls: ['./postuler-offre.component.css'],
})
export class PostulerOffreComponent implements OnInit {
  inscription!: Inscription;
  cv!: File;
  lm!: File;
  id!: number;
  model!: NgbDateStruct;

  constructor(
    private service: AdmissionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.inscription = new Inscription();
    this.inscription.user = new User();
  }

  onSumbit() {
    this.service.newApply(this.inscription, this.id, 2).subscribe();
    if (this.cv != null && this.lm != null) {
      this.service.setCV(this.cv).subscribe();
      this.service.setLM(this.lm).subscribe();
    }
  }

  onSumbitFile() {
    if (this.cv != null && this.lm != null) {
      this.service.setCV(this.cv).subscribe();
      this.service.setLM(this.lm).subscribe();
    }
  }

  onCvSelected(event: any) {
    this.cv = event.target.files[0];
  }

  onLmSelected(event: any) {
    this.lm = event.target.files[0];
  }
}
