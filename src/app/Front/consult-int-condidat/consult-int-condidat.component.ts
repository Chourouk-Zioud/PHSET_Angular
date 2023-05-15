import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { AdmissionService } from 'src/app/Services/admission.service';
import { EvaluationService } from 'src/app/Services/evaluation.service';

@Component({
  selector: 'app-consult-int-condidat',
  templateUrl: './consult-int-condidat.component.html',
  styleUrls: ['./consult-int-condidat.component.css']
})
export class ConsultIntCondidatComponent implements OnInit {

  
  interviews!: Interview[];
  constructor(private ps : EvaluationService, private as: AdmissionService , private router: Router) { }


  ngOnInit(): void {
    this.as.retrieveInterviewByCurrentUser(2).subscribe({
      next: (data) => (this.interviews = data),
    });
  }

  goToMcq(id : number){
    this.router.navigate(['/mcq'], { queryParams: { id: id } });
  }
}
