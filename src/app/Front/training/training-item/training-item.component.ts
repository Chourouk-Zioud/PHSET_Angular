import { Component, Input , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Training } from 'src/app/Models/Training';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css'],
})
export class TrainingItemComponent implements OnInit {
  @Input() training!: Training;
  constructor( private service: FaqService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getTrainingById(id).subscribe((data: Training) => {
      this.training = data;
    });
  }
}
