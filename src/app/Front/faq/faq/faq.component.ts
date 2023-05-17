import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Topic } from 'src/app/Models/Topic';
import { FaqService } from 'src/app/Services/faq.service';
import { QuestionFAQ } from 'src/app/Models/QuestionFAQ';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  ListeQuestion!: QuestionFAQ[];

  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.service.retrieveAllQuestionFAQ().subscribe((res) => {
        console.log(res);
        this.ListeQuestion = res;
      });
  }

  // viewTopics(topic: Topic) {
  //   let i = this.topics.indexOf(topic);
  // }
}
