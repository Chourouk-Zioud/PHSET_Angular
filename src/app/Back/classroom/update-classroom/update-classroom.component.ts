import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classroom } from 'src/app/Models/Classroom';
import { AdmissionService } from 'src/app/Services/admission.service';

@Component({
  selector: 'app-update-classroom',
  templateUrl: './update-classroom.component.html',
  styleUrls: ['./update-classroom.component.css']
})
export class UpdateClassroomComponent implements OnInit {

  classroom!: Classroom;
  id!: number;
  constructor(private route:ActivatedRoute,private service: AdmissionService) { }

  ngOnInit(): void {
    this.route.snapshot.params['id'];
    this.service.getClassroomById(this.id).subscribe(
      (res)=>{
        console.log(res);
        this.classroom = res;
      }
    );
    
  }

  onSumbit(){
    this.service.updateClassroom(this.classroom).subscribe();
  }
}
