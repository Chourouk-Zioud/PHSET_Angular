import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { FaqService } from 'src/app/Services/faq.service';

enum technology {
  Angular = 'Angular',
  JavaScript = 'JavaScript',
  Spring = 'Spring',
  Python = 'Python',
  React = 'React',
  NodeJs = 'NodeJs',
  Symfony = 'Symfony',
  PHP = 'PHP',
  JAVA = 'JAVA',
}

  @Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
  })
  export class CourseComponent implements OnInit {
    constructor(private service: FaqService, private route: ActivatedRoute) {}

    ListeCours!: Course[];

    ngOnInit(): void {
      this.service.retrieveAllCourse().subscribe((res) => {
        console.log(res);
        this.ListeCours = res;
      });
    }

    viewChapters(course: Course) {
      let i = this.ListeCours.indexOf(course);
    }
    
  }

