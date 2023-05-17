import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from 'src/app/Models/Certificate';
import { Course } from 'src/app/Models/Course';
import { Inscription } from 'src/app/Models/Inscription';
import { QuestionFAQ } from 'src/app/Models/QuestionFAQ';
import { Account } from 'src/app/Models/account';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  ListeQuestion!: QuestionFAQ[];

  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.service.retrieveAllQuestionFAQ().subscribe((res) => {
        console.log(res);
        this.ListeQuestion = res;
      });
    }
}
