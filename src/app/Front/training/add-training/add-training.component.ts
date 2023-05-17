import { Component, OnInit } from '@angular/core';
import { RequestTraining } from 'src/app/Models/RequestTraining';
import { Training } from 'src/app/Models/Training';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css'],
})
export class AddTrainingComponent implements OnInit {
  training: Training = new Training();
  requestTraining!: RequestTraining;

  constructor(private Service: FaqService) {}

  // addTraining() {
  //   this.Service.addTraining(this.training).subscribe((data) => {
  //     console.log(data);
  //   });
  //}

  ngOnInit(): void {
    this.requestTraining = new RequestTraining();
  }

  onSubmit() {
    this.Service.addRequest(this.requestTraining).subscribe();
  }
}
