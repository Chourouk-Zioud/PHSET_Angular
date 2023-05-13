import { Component, OnInit } from '@angular/core';
import { QuestionFAQ } from 'src/app/Models/QuestionFAQ';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  ListQuestion!: QuestionFAQ[];
  constructor(private service: FaqService) { }

  ngOnInit(): void {
    this.service.retrieveAllQuestionsFAQ().subscribe({
      next:(data)=>this.ListQuestion=data
    })
      
  }

}
