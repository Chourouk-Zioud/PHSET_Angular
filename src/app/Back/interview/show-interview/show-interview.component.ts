import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Interview } from 'src/app/Models/Interview';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-show-interview',
  templateUrl: './show-interview.component.html',
  styleUrls: ['./show-interview.component.css']
})
export class ShowInterviewComponent implements OnInit {

  id!: number;
  interview!: Interview;
  constructor(private route: ActivatedRoute,private service : AdmissionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getInterviewById(this.id).subscribe(
      (res)=> {
        console.log(res);
        this.interview = res;
      }
    )
  }

}
