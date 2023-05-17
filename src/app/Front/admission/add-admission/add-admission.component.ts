import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/Models/Inscription';
import { User } from 'src/app/Models/User';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-add-admission',
  templateUrl: './add-admission.component.html',
  styleUrls: ['./add-admission.component.css']
})
export class AddAdmissionComponent implements OnInit {
  
  dateOfBirth!: Date;
  datededelivrance!:Date;
  selectedNationality!: string;
  cv!:File;
  options= [
    { label: 'Algérienne ', value: 'Algérienne' },
    { label: 'sénégalaise', value: 'sénégalaise' },
    { label: 'congolaise ', value: 'congolaise' }
  ];
  choisirGouvernorat!: string;

  optionGouvernorat = [  
    { label: 'Tunis', value: 'Tunis' }, 
    { label: 'Bizerte ', value: 'Bizerte' }, 
    { label: 'Ariana', value: 'Ariana' },
  ];
  
  selectedactivity!: string;
  optionsactivities = [
    { label: 'tennis', value: 'tennis' },
    { label: 'football', value: 'football' },
    { label: 'yuga', value: 'yuga' }
  ];
  nom!: string;
  niveauEtudes!: string;
  inscription!:Inscription;
  constructor(private as : AdmissionService) { 
  }

  ngOnInit(): void {
    this.inscription=new Inscription;
    this.inscription.user = new User;
  }

  onSumbit(){
    this.as.newAdmissionTN(this.inscription,1,2).subscribe();
  }

  onFileSelected(event: any){
    this.cv = event.target.files[0];
  }

}
