import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Claim } from 'src/app/Models/Claim';
import { Inscription } from 'src/app/Models/Inscription';
import { QuestionFAQ } from 'src/app/Models/QuestionFAQ';
import { AdmissionService } from 'src/app/Services/admission.service';
import { EvaluationService } from 'src/app/Services/evaluation.service';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-test-back',
  templateUrl: './test-back.component.html',
  styleUrls: ['./test-back.component.css'],
})
export class TestBackComponent implements OnInit {
  ListQuestion!: QuestionFAQ[];
  ListInscriptions!: Inscription[];
  itemPerPage: number = 8;
  p!: number;
  ten: string = '';
  date!: Date;
  object!: string;
  public searchTerm: string = '';

  constructor(
    private as: AdmissionService,
    private service: FaqService
  ) {}

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
}
