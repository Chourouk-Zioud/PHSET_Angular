import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Inscription } from 'src/app/Models/Inscription';
import { User } from 'src/app/Models/User';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-add-tun-night',
  templateUrl: './add-tun-night.component.html',
  styleUrls: ['./add-tun-night.component.css']
})
export class AddTunNightComponent implements OnInit {

  inscription!: Inscription;
  niveauEtudes!: string;
  model!: NgbDateStruct;
  enCours!: boolean;
  currentYear !: number;
  cv!:File;
  lm!:File;
  nom!: string;

  constructor(private route : Router,private service : AdmissionService) { 
    this.niveauEtudes = 'bac'; 
  }

  ngOnInit(): void {
    this.inscription=new Inscription;
    this.inscription.user = new User;
  }

  disableCoursSoir() {
    this.enCours = true;
    var date = new Date();
    this.currentYear = date.getFullYear();
  }

  enableCoursSoir() {
    this.enCours = false;
  }
  
  onSumbit(){
    this.service.newAdmissionNIGHT(this.inscription, 1, 2).subscribe();
  }
  
  onCvSelected(event: any){
    this.cv = event.target.files[0];
  }

  onLmSelected(event: any){
    this.lm = event.target.files[0];
  }


  }

