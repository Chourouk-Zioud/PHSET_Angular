import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/Models/Exam';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-exam-back',
  templateUrl: './exam-back.component.html',
  styleUrls: ['./exam-back.component.css']
})
export class ExamBackComponent implements OnInit {

  ListExam!: Exam[];
  constructor(private service: FaqService) { }

  ngOnInit(): void {
    this.service.retrieveAllExam().subscribe(
      (res)=> {
        console.log(res);
        this.ListExam = res;
      }
    )
  }

}
