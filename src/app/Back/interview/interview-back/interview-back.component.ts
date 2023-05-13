import { Component, OnInit } from '@angular/core';
import { Interview } from 'src/app/Models/Interview';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-interview-back',
  templateUrl: './interview-back.component.html',
  styleUrls: ['./interview-back.component.css']
})
export class InterviewBackComponent implements OnInit {

  ListInterview!: Interview[];
  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.service.getAllInterviews().subscribe(
      (res) => {
        console.log(res);
        this.ListInterview = res;
      })
  }
  
  index(interview: Interview){
    let i = this.ListInterview.indexOf(interview);
  }

}
