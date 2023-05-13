import { Component, OnInit } from '@angular/core';
import { Interview } from 'src/app/Models/Interview';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  ListInterview!: Interview[];
  constructor(private serviceInterview: AdmissionService) { }

  ngOnInit(): void {
    this.serviceInterview.getAllInterviews().subscribe(
      (res) => {
        console.log(res);
        this.ListInterview = res ;
      }
    );
  }

}

