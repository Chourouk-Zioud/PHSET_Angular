import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-consult-int-condidat-item',
  templateUrl: './consult-int-condidat-item.component.html',
  styleUrls: ['./consult-int-condidat-item.component.css'],
})
export class ConsultIntCondidatItemComponent implements OnInit {
  @Input() interview!: Interview;
  @Input() condidat!: User;
  @Output() viewInterviews = new EventEmitter<Interview>();

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToMcq(id: number) {
    this.router.navigate(['/mcq'], { queryParams: { id: id } });
  }
}
