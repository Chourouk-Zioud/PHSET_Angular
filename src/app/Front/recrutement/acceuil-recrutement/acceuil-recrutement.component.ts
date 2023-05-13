import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/Models/Offer';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-acceuil-recrutement',
  templateUrl: './acceuil-recrutement.component.html',
  styleUrls: ['./acceuil-recrutement.component.css']
})
export class AcceuilRecrutementComponent implements OnInit {

  listOffer!: Offer[];
  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.service.getAllOfferJob().subscribe((data) => {
      console.log(data);
      this.listOffer = (data)
    })
  }

  index(offer: Offer){
    let i = this.listOffer.indexOf(offer);
  }

}
