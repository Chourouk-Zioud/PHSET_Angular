import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/Models/Classroom';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  ListeClassrooms!: Classroom[];
  constructor( private service: AdmissionService) { }

  ngOnInit(): void {
    this.service.getAllClassrooms().subscribe(
      (res)=>{
        console.log(res);
        this.ListeClassrooms=res;
      }
    );
    

  }

}
