import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/Models/Inscription';
import { QuestionFAQ } from 'src/app/Models/QuestionFAQ';
import { ReponseFAQ } from 'src/app/Models/ReponseFAQ';
import { AdmissionService } from 'src/app/Services/admission.service';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  ListQuestion!: QuestionFAQ[];
  ListInscriptions!: Inscription[];
  reponseFAQ!: ReponseFAQ;
  itemPerPage: number = 8;
  p!: number;
  i!: number;
  ten: string = '';
  date!: Date;
  object!: string;
  public searchTerm: string = '';

  constructor(private as: AdmissionService, private service: FaqService) {}

  ngOnInit(): void {
    this.service.retrieveAllQuestionsFAQ().subscribe({
      next: (data) => (this.ListQuestion = data),
    });
  }

  search() {
    this.as.searchByType(this.object).subscribe({
      next: (data) => {
        this.ListInscriptions = data;
      },
    });
  }

  searchByDate() {
    this.as.searchByDate(this.date).subscribe({
      next: (data) => {
        this.ListInscriptions = data;
      },
    });
  }

  // Formatter la date au format YYYY-MM-DD
  formatDate(date: Date): string {
    if (date != null) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return year + '-' + month + '-' + day;
    }
    return '';
  }

  Sort() {
    this.service.Sort().subscribe({
      next: (data) => {
        this.ListQuestion = data;
      },
    });
  }

  onSubmit() {
    this.service.addResponse(this.i, this.reponseFAQ).subscribe();
  }
}
