import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/Models/Inscription';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-inscription-back',
  templateUrl: './inscription-back.component.html',
  styleUrls: ['./inscription-back.component.css']
})
export class InscriptionBackComponent implements OnInit {

  ListInscriptions!: Inscription[];
  constructor(private service: AdmissionService) { }
  
  ngOnInit(): void {
    this.service.getAllInscription().subscribe(
      (res)=>{
        console.log(res);
        this.ListInscriptions = res;
      }
    )
  }

}
