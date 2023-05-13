import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/Models/Course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
})
export class CourseItemComponent implements OnInit {
  @Input() course!: Course;
  @Output() viewChapters = new EventEmitter<Course>();
  constructor() {}

  ngOnInit(): void {}
}
