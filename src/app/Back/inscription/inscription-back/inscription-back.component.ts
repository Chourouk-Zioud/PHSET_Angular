import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/Models/Inscription';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-inscription-back',
  templateUrl: './inscription-back.component.html',
  styleUrls: ['./inscription-back.component.css'],
})
export class InscriptionBackComponent implements OnInit {
  ListInscriptions!: Inscription[];
  itemPerPage: number = 8;
  p!: number;
  ten: string = '';
  totalClaim: any;
  filteredClaims!: any[];
  date!: Date;
  firstName!: string;
  object!: string;
  public searchTerm: string = '';

  constructor(
    private as: AdmissionService,
    private service: AdmissionService
  ) {}

  ngOnInit(): void {
    this.service.getAllInscription().subscribe((res) => {
      console.log(res);
      this.ListInscriptions = res;
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
    this.as.Sort().subscribe({
      next: (data) => {
        this.ListInscriptions = data;
      },
    });
  }
}

