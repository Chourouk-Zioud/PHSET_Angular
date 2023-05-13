import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Models/Offer';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-recrutement-back',
  templateUrl: './recrutement-back.component.html',
  styleUrls: ['./recrutement-back.component.css']
})
export class RecrutementBackComponent implements OnInit {

  ListOfferJob!: Offer[];
  ListOfferAdmission!: Offer[];
  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.service.getAllOfferJob().subscribe(
      (res) => {
        console.log(res);
        this.ListOfferJob = res;
      })

      this.service.getAllOfferAdmission().subscribe(
        (res) => {
          console.log(res);
          this.ListOfferAdmission = res;
        })
  }

}
