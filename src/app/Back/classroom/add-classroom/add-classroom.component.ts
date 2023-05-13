import { Component, OnInit } from '@angular/core';
import { Classroom } from 'src/app/Models/Classroom';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  classroom!:Classroom;
  constructor(private service: AdmissionService) { }

  ngOnInit(): void {
    this.classroom = new Classroom;
  }

  onSumbit(){
    this.service.addClassroom(this.classroom).subscribe();
  }
}
