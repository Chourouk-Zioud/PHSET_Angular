import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/Models/Training';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-training-back',
  templateUrl: './training-back.component.html',
  styleUrls: ['./training-back.component.css'],
})
export class TrainingBackComponent implements OnInit {

  ListTraining!: Training[];
  constructor(private service: FaqService) {}

  ngOnInit(): void {
    this.service.retrieveAllTraining().subscribe(
      (res)=>{
        console.log(res);
        this.ListTraining = res;
      }
    )
  }
}
