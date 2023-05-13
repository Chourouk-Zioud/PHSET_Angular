import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chapter } from 'src/app/Models/Chapter';
import { Course } from 'src/app/Models/Course';
import { FaqService } from 'src/app/Services/faq.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  chapters!: Chapter[];
  id!: number;
  constructor(private service: FaqService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.retrieveChaptersByIdCourse(this.id).subscribe((res) => {
      console.log(res);
      this.chapters = res;
    });
  }

}
