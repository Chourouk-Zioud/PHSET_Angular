import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/Models/Training';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  id!: number;
  ListTraining!: Training[];

  constructor(
    private service: FaqService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.service.retrieveAllTraining().subscribe((res) => {
      console.log(res);
      this.ListTraining = res;
    });
  }
}
